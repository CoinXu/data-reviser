/**
 * @date 2018-10-22
 * @author xuchuanping
 * @description
 */

import { factory } from "@/decorator-factory";
import { PrimitiveTypes, getPrimitiveType, isRequired } from "@impl/utils";
import { parse, getTemplate } from "@impl/message";
import { REVISER_PRIVATE_PROPERTY_NAME as PROPERTY_NAME } from "@/constants";
import {
  PropertyDecorator, ReviserDecoratorReturns, ReviserDecoratorOptions,
  ReviserDecoratorStruct, ReviserMessage
} from "@inter/decorator";

interface Templates {
  type?: string;
}

const Def: Templates = {
  type: "expected an Array but got {{type}}"
};

const hasOwnProperty = Object.prototype.hasOwnProperty;

function TypeArray(decorators?: PropertyDecorator[], template?: string | Templates): PropertyDecorator {
  const Temps = {
    type: getTemplate(Def.type, "type", template)
  };
  const FakeKey: string = "_fake_key_";
  const FakeTarget: any = {};
  const FakeDescriptor: any = {};

  FakeTarget[PROPERTY_NAME] = {
    [FakeKey]: {
      decorators: [],
      options: {
        required: false
      }
    }
  };

  for (const decor of (decorators || [])) {
    decor(FakeTarget, FakeKey, FakeDescriptor);
  }

  const struct: ReviserDecoratorStruct<any> = FakeTarget[PROPERTY_NAME][FakeKey];

  function decorator(target: any, key: string, value: any, options: ReviserDecoratorOptions): ReviserDecoratorReturns<{}> {

    if (!options.required && !isRequired(value)) {
      return null;
    }

    const type: string = getPrimitiveType(value);

    if (type !== PrimitiveTypes.Array) {
      return parse(Temps.type, { key, value, type });
    }

    const length: number = value.length;
    const message: ReviserMessage<any> = {};
    const translated: any[] = [];

    let i = 0;
    let hasMessage = false;

    for (; i < length; i++) {
      for (const decorator of struct.decorators) {
        const propKey = `[${i}]`;
        const m: ReviserDecoratorReturns<{}> = decorator(FakeTarget, propKey, value[i], struct.options);

        translated[i] = FakeTarget[propKey];

        if (m !== null) {
          message[propKey] = m;
          hasMessage = true;
        }
      }
    }

    target[key] = translated;

    return hasMessage ? message : null;
  }

  return factory(decorator);
}

export default TypeArray;


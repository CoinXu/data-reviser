/**
 * @date 2018-10-22
 * @author xuchuanping
 * @description
 */

import { factory } from "@/decorator-factory";
import { PrimitiveTypes, getPrimitiveType, isRequired } from "@impl/utils";
import { parse, getTemplate } from "@impl/message";
import {
  ReviserConstructor, PropertyDecorator, ReviserMessage,
  ReviserDecoratorOptions, ReviserDecoratorReturns, Reviser
} from "@inter/decorator";

interface Templates {
  type?: string;
}

const Def: Templates = {
  type: "expected an Array but got {{type}}"
};

function TypeArrayStructure<T = {}>(Clazz: ReviserConstructor<T>, template?: string): PropertyDecorator {
  const ins: Reviser<T> = new Clazz();
  const Temps = {
    type: getTemplate(Def.type, "type", template)
  };

  function decorator(target: any, key: string, value: any, options: ReviserDecoratorOptions): ReviserDecoratorReturns<{}> {
    if (!options.required && !isRequired(value)) {
      return null;
    }

    const type: string = getPrimitiveType(value);

    if (type !== PrimitiveTypes.Array) {
      return parse(Temps.type, { key, value, type });
    }

    const message: ReviserMessage<T> = {};
    const length: number = value.length;
    const traslated: T[] = [];

    let i = 0;
    let hasMessage = false;

    for (; i < length; i++) {
      const type: string = getPrimitiveType(value[i]);
      const key: string = `[${i}]`;

      if (type !== PrimitiveTypes.Object && type !== PrimitiveTypes.Array) {
        message[key] = parse('expected an Object or an Array but got {{type}}', {
          type
        });
        continue;
      }

      const m: ReviserMessage<{}> = ins.map(value[i]);
      traslated[i] = ins.get(true);

      if (m !== null) {
        message[key] = m;
        hasMessage = true;
      }
    }

    target[key] = traslated;

    return hasMessage ? message : null;
  }

  return factory(decorator);
}

export default TypeArrayStructure;

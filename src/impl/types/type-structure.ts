/**
 * @date 2018-08-24
 * @author xuchuanping
 * @description
 */

import { factory } from "@/decorator-factory";
import { isRequired, PrimitiveTypes, getPrimitiveType } from "@impl/utils";
import { parse } from "@impl/message";
import {
  PropertyDecorator, ReviserDecoratorReturns, ReviserMessage,
  Reviser, ReviserConstructor, ReviserDecoratorOptions
} from "@inter/decorator";

function TypeStructure<T = {}>(Clazz: ReviserConstructor<T>): PropertyDecorator {
  const ins: Reviser<T> = new Clazz();

  function decorator(target: any, key: string, value: any, options: ReviserDecoratorOptions): ReviserDecoratorReturns<{}> {
    if (!options.required && !isRequired(value)) {
      return null;
    }

    const type: string = getPrimitiveType(value);

    if (type !== PrimitiveTypes.Object && type !== PrimitiveTypes.Array) {
      return parse("expected an Object or an Array but got {{type}}", { type });
    }

    const message: ReviserMessage<T> = ins.map(value);
    if (message !== null) {
      return message;
    }
    target[key] = ins.get(true);
    return null;
  }

  return factory(decorator);
}

export default TypeStructure;

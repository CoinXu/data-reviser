/**
 * @date 2018-08-24
 * @author xuchuanping
 * @description
 */

import { factory } from "@/decorator-factory";
import { PropertyDecorator, ReviserDecoratorReturns } from "@inter/decorator";
import { PrimitiveTypes, getPrimitiveType } from "@impl/utils";

function TypeBoolean(message?: string): PropertyDecorator {
  function decorator(target: any, key: string, value: any): ReviserDecoratorReturns<{}> {
    const type: string = getPrimitiveType(value);

    if (type === PrimitiveTypes.Boolean) {
      target[key] = value;
      return null;
    }

    return message || `expected a Boolean but got ${type}`;
  }

  return factory(decorator);
}

export default TypeBoolean;

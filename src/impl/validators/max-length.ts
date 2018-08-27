/**
 * @date 2018-08-25
 * @author xuchuanping
 * @description
 */

import { factory } from "@/decorator-factory";
import { PrimitiveTypes, getPrimitiveType } from "@/impl/utils";
import { PropertyDecorator, ReviserDecoratorReturns } from "@inter/decorator";

function MaxLength(length: number, message?: string): PropertyDecorator {
  function decorator(target: any, key: string, value: any): ReviserDecoratorReturns<{}> {
    const type: string = getPrimitiveType(value);

    // string
    if (type !== PrimitiveTypes.String) {
      return message || `expected a String but got ${type}`;
    }

    if (value.length > length) {
      return message || `length of ${key} must less than ${length}`;
    }

    target[key] = value;
    return null;
  }

  return factory(decorator);
}

export default MaxLength;

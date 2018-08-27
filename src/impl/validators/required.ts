/**
 * @date 2018-08-25
 * @author xuchuanping
 * @description
 */

import { factory } from "@/decorator-factory";
import { PropertyDecorator, ReviserDecoratorReturns } from "@inter/decorator";
import { PrimitiveTypes, getPrimitiveType } from "@impl/utils";

function Required(message?: string): PropertyDecorator {
  function decorator(target: any, key: string, value: any): ReviserDecoratorReturns<{}> {
    const type: string = getPrimitiveType(value);

    // undefined | null
    if (type === PrimitiveTypes.Undefined || type === PrimitiveTypes.Null) {
      return message || `${key} required`;
    }

    // string
    if (type === PrimitiveTypes.String) {
      const str: string = value.trim();
      if (str.length < 1) {
        return message || `length of string must great than 0`;
      }
      target[key] = str;
    }

    target[key] = value;
    return null;
  }

  return factory(decorator);
}

export default Required;

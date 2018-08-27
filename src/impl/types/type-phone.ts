/**
 * @date 2018-08-24
 * @author xuchuanping
 * @description
 */

import { factory } from "@/decorator-factory";
import { PropertyDecorator, ReviserDecoratorReturns } from "@inter/decorator";
import { PrimitiveTypes, getPrimitiveType } from "@impl/utils";

// https://github.com/googlei18n/libphonenumber/blob/master/FALSEHOODS.md

function TypePhone(message?: string): PropertyDecorator {
  function decorator(target: any, key: string, value: any): ReviserDecoratorReturns<{}> {
    const type: string = getPrimitiveType(value);

    if (type !== PrimitiveTypes.String && type !== PrimitiveTypes.Number) {
      return message || `expected a String or Number but got ${type}`;
    }

    const str: string = '' + value;

    if (str.length < 1) {
      return message || `expected a phone number`;
    }

    target[key] = value;
    return null;
  }

  return factory(decorator);
}

export default TypePhone;

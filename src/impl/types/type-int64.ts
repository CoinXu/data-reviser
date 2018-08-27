/**
 * @date 2018-08-24
 * @author xuchuanping
 * @description
 */

import { factory } from "@/decorator-factory";
import { PropertyDecorator, ReviserDecoratorReturns } from "@inter/decorator";
import { PrimitiveTypes, getPrimitiveType } from "@impl/utils";
import { IEEE754Limits } from "@/constants";

function TypeInt64(message?: string): PropertyDecorator {
  function decorator(target: any, key: string, value: any): ReviserDecoratorReturns<{}> {
    const type: string = getPrimitiveType(value);

    if (type !== PrimitiveTypes.Number) {
      return `expected a Number but got ${type}`;
    }

    // # check integer
    if (value % 1 !== 0) {
      return message || `expected a Integer bug got ${value}`;
    }

    if (value > IEEE754Limits.Int64.Max) {
      return `type double must less than ${IEEE754Limits.Int64.Max} but got ${value}`;
    }

    if (value < IEEE754Limits.Int64.Min) {
      return `type double must great than ${IEEE754Limits.Int64.Min} but got ${value}`;
    }

    target[key] = value;
    return null;
  }

  return factory(decorator);
}

export default TypeInt64;

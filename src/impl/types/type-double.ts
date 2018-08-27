/**
 * @date 2018-08-24
 * @author xuchuanping
 * @description
 */

import { factory } from "@/decorator-factory";
import { PropertyDecorator, ReviserDecoratorReturns } from "@inter/decorator";
import { PrimitiveTypes, getPrimitiveType } from "@impl/utils";
import { IEEE754Limits } from "@/constants";

function TypeDouble(message?: string): PropertyDecorator {
  function decorator(target: any, key: string, value: any): ReviserDecoratorReturns<{}> {
    const type: string = getPrimitiveType(value);

    if (type !== PrimitiveTypes.Number) {
      return message || `expected a Number but got ${type}`;
    }

    if (value > IEEE754Limits.Double.Max) {
      return message || `type double must less than ${IEEE754Limits.Double.Max} but got ${value}`;
    }

    if (value < IEEE754Limits.Double.Min) {
      return message || `type double must great than ${IEEE754Limits.Double.Min} but got ${value}`;
    }

    target[key] = value;
    return null;
  }

  return factory(decorator);
}

export default TypeDouble;

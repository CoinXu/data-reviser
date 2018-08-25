/**
 * @date 2018-08-24
 * @author xuchuanping
 * @description
 */

import { factory } from "@/decorator-factory";
import { PropertyDecorator, ValidatorDecoratorReturns } from "@inter/decorator";
import { PrimitiveTypes, getPrimitiveType } from "@impl/utils";
import { IEEE754Limits } from "@/constants";

function TypeFloat(message?: string): PropertyDecorator {
  function decorator(target: any, key: string, value: any): ValidatorDecoratorReturns<{}> {
    const type: string = getPrimitiveType(value);

    if (type !== PrimitiveTypes.Number) {
      return message || `expected a Number but got ${type}`;
    }

    if (value > IEEE754Limits.Float.Max) {
      return message || `type double must less than ${IEEE754Limits.Float.Max} but got ${value}`;
    }

    if (value < IEEE754Limits.Float.Min) {
      return message || `type double must great than ${IEEE754Limits.Float.Min} but got ${value}`;
    }

    target[key] = value;
    return null;
  }

  return factory(decorator);
}

export default TypeFloat;

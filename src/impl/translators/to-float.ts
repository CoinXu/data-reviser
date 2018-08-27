/**
 * @date 2018-08-24
 * @author xuchuanping
 * @description Translate value be a float type.
 */

import { factory } from "@/decorator-factory";
import { PropertyDecorator, ReviserMessage } from "@inter/decorator";
import { IEEE754Limits } from "@/constants";

function decorator(target: any, key: string, value: any): null {
  let num: number = Number(value).valueOf() || 0;

  if (num > IEEE754Limits.Float.Max) {
    num = IEEE754Limits.Float.Max;
  }

  if (num < IEEE754Limits.Float.Min) {
    num = IEEE754Limits.Float.Min;
  }

  target[key] = num;
  return null;
}

const DecoToFloat: PropertyDecorator = factory(decorator);

export default DecoToFloat;

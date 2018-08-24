/**
 * @date 2018-08-24
 * @author xuchuanping
 * @description Translate value be a int64 type.
 */

import { factory } from "@/decorator-factory";
import { PropertyDecorator, ValidatorMessage } from "@inter/decorator";
import { IEEE754Limits } from "@/constants";

function decorator(target: any, key: string, value: any): null {
  let num: number = Number(value).valueOf() || 0;

  if (num % 1 !== 0) {
    // TODO why compile error
    num = parseInt(num as any);
  }

  if (num > IEEE754Limits.Int64.Max) {
    num = IEEE754Limits.Int64.Max;
  }

  if (num < IEEE754Limits.Int64.Min) {
    num = IEEE754Limits.Int64.Min;
  }

  target[key] = num;
  return null;
}

const DecoToInt64: PropertyDecorator = factory(decorator);

export default DecoToInt64;

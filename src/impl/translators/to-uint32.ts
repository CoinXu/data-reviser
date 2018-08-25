/**
 * @date 2018-08-25
 * @author xuchuanping
 * @description Translate value be an uint32 type.
 */

import { factory } from "@/decorator-factory";
import { PropertyDecorator, ValidatorMessage } from "@inter/decorator";
import { IEEE754Limits } from "@/constants";

function decorator(target: any, key: string, value: any): null {
  let num: number = Number(value).valueOf() || 0;

  if (num !== Infinity && num !== -Infinity && num % 1 !== 0) {
    // TODO why compile error?
    num = parseInt(num as any);
  }

  if (num > IEEE754Limits.UnInt32.Max) {
    num = IEEE754Limits.UnInt32.Max;
  }

  if (num < IEEE754Limits.UnInt32.Min) {
    num = IEEE754Limits.UnInt32.Min;
  }

  target[key] = num;
  return null;
}

const DecoToUnInt32: PropertyDecorator = factory(decorator);

export default DecoToUnInt32;

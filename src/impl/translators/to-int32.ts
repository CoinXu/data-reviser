/**
 * @date 2018-08-24
 * @author xuchuanping
 * @description Translate value be an int32 type.
 */

import { factory } from "@/decorator-factory";
import { PropertyDecorator, ReviserMessage, ReviserDecoratorOptions } from "@inter/decorator";
import { IEEE754Limits } from "@/constants";
import { isRequired } from "@impl/utils";

function decorator(target: any, key: string, value: any, options: ReviserDecoratorOptions): null {
  if (!options.required && !isRequired(value)) {
    return null;
  }

  let num: number = Number(value).valueOf() || 0;

  if (num !== Infinity && num !== -Infinity && num % 1 !== 0) {
    // TODO why compile error?
    num = parseInt(num as any);
  }

  if (num > IEEE754Limits.Int32.Max) {
    num = IEEE754Limits.Int32.Max;
  }

  if (num < IEEE754Limits.Int32.Min) {
    num = IEEE754Limits.Int32.Min;
  }

  target[key] = num;
  return null;
}

const DecoToInt32: PropertyDecorator = factory(decorator);

export default DecoToInt32;

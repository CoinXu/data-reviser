/**
 * @date 2018-08-24
 * @author xuchuanping
 * @description Translate value be a double type.
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

  if (num > IEEE754Limits.Double.Max) {
    num = IEEE754Limits.Double.Max;
  }

  if (num < IEEE754Limits.Double.Min) {
    num = IEEE754Limits.Double.Min;
  }

  target[key] = num;
  return null;
}

const DecoToDouble: PropertyDecorator = factory(decorator);

export default DecoToDouble;

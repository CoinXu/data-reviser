/**
 * @date 2018-08-25
 * @author xuchuanping
 * @description Translate value be a boolean type.
 */

import { factory } from "@/decorator-factory";
import { isRequired } from "@impl/utils";
import { PropertyDecorator, ReviserMessage, ReviserDecoratorOptions } from "@inter/decorator";

function decorator(target: any, key: string, value: any, options: ReviserDecoratorOptions): null {
  if (!options.required && !isRequired(value)) {
    return null;
  }

  target[key] = Boolean(value).valueOf();
  return null;
}

const DecoToBoolean: PropertyDecorator = factory(decorator);

export default DecoToBoolean;

/**
 * @date 2018-08-24
 * @author xuchuanping
 * @description Translate value be a string type.
 */

import { factory } from "@/decorator-factory";
import { PropertyDecorator, ReviserMessage, ReviserDecoratorOptions } from "@inter/decorator";
import { isRequired, getPrimitiveType, PrimitiveTypes } from "@impl/utils";

function decorator(target: any, key: string, value: any, options: ReviserDecoratorOptions): null {

  if (!options.required && !isRequired(value)) {
    return null;
  }

  const type: string = getPrimitiveType(value);

  if (type === PrimitiveTypes.Undefined || type === PrimitiveTypes.Null) {
    target[key] = "";
    return null;
  }

  target[key] = String(value).valueOf();
  return null;
}

const DecoToString: PropertyDecorator = factory(decorator);

export default DecoToString;

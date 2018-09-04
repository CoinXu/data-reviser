/**
 * @date 2018-08-24
 * @author xuchuanping
 * @description
 */

import { factory } from "@/decorator-factory";
import { parse } from "@impl/message";
import { PrimitiveTypes, getPrimitiveType, isRequired } from "@impl/utils";
import { PropertyDecorator, ReviserDecoratorReturns, ReviserDecoratorOptions } from "@inter/decorator";

function TypeBoolean(template?: string): PropertyDecorator {
  function decorator(target: any, key: string, value: any, options: ReviserDecoratorOptions): ReviserDecoratorReturns<{}> {
    if (!options.required && !isRequired(value)) {
      return null;
    }

    const type: string = getPrimitiveType(value);

    if (type !== PrimitiveTypes.Boolean) {
      return parse(template || "expected a Boolean but got {{type}}", {
        key,
        value,
        type
      });
    }

    target[key] = value;
    return null;
  }

  return factory(decorator);
}

export default TypeBoolean;

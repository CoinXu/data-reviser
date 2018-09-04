/**
 * @date 2018-08-24
 * @author xuchuanping
 * @description
 */

import { factory } from "@/decorator-factory";
import { PropertyDecorator, ReviserDecoratorReturns, ReviserDecoratorOptions } from "@inter/decorator";
import { PrimitiveTypes, getPrimitiveType, isRequired } from "@impl/utils";
import { parse } from "@impl/message";

function TypeString(message?: string): PropertyDecorator {
  function decorator(target: any, key: string, value: any, options: ReviserDecoratorOptions): ReviserDecoratorReturns<{}> {
    if (!options.required && !isRequired(value)) {
      return null;
    }

    const type: string = getPrimitiveType(value);

    if (type !== PrimitiveTypes.String) {
      return parse(message || "expected a String but got {{type}}", {
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

export default TypeString;

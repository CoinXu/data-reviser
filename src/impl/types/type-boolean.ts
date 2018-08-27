/**
 * @date 2018-08-24
 * @author xuchuanping
 * @description
 */

import { factory } from "@/decorator-factory";
import { PropertyDecorator, ReviserDecoratorReturns } from "@inter/decorator";
import { parse } from "@impl/message";
import { PrimitiveTypes, getPrimitiveType } from "@impl/utils";

function TypeBoolean(template?: string): PropertyDecorator {
  function decorator(target: any, key: string, value: any): ReviserDecoratorReturns<{}> {
    const type: string = getPrimitiveType(value);

    if (type !== PrimitiveTypes.Boolean) {
      return parse(template || "expected a Boolean but got {{type}}");
    }

    target[key] = value;
    return null;
  }

  return factory(decorator);
}

export default TypeBoolean;

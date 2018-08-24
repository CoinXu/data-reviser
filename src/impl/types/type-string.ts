/**
 * @date 2018-08-24
 * @author xuchuanping
 * @description
 */

import { factory } from "@/decorator-factory";
import { PropertyDecorator, ValidatorDecoratorReturns } from "@inter/decorator";
import { PrimitiveTypes, getPrimitiveType } from "@impl/utils";

function TypeString(message?: string): PropertyDecorator {
  function decorator(target: any, key: string, value: any): ValidatorDecoratorReturns<{}> {
    const type: string = getPrimitiveType(value);

    if (type === PrimitiveTypes.String) {
      target[key] = value;
      return null;
    }

    return message || `expected a String but got ${type}`;
  }

  return factory(decorator);
}

export default TypeString;

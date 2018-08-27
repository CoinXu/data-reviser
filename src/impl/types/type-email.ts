/**
 * @date 2018-08-24
 * @author xuchuanping
 * @description
 */

import { factory } from "@/decorator-factory";
import { PropertyDecorator, ReviserDecoratorReturns } from "@inter/decorator";
import { PrimitiveTypes, getPrimitiveType } from "@impl/utils";

const Pattern = /^([\w-_]+(?:\.[\w-_]+)*)@((?:[a-z0-9]+(?:-[a-zA-Z0-9]+)*)+\.[a-z]{2,6})$/;

function TypeEmail(message?: string): PropertyDecorator {
  function decorator(target: any, key: string, value: any): ReviserDecoratorReturns<{}> {
    const type: string = getPrimitiveType(value);

    if (type !== PrimitiveTypes.String) {
      return message || `expected a String but got ${type}`;
    }

    if (!Pattern.test(value)) {
      return message || `expected a mail address but got${value}`;
    }

    target[key] = value;
    return null;
  }

  return factory(decorator);
}

export default TypeEmail;

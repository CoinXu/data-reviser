/**
 * @date 2018-08-25
 * @author xuchuanping
 * @description
 */

import { factory } from "@/decorator-factory";
import { PrimitiveTypes, getPrimitiveType } from "@impl/utils";
import { parse, getTemplate } from "@impl/message";
import { PropertyDecorator, ReviserDecoratorReturns, ReviserMessageData } from "@inter/decorator";

interface Templates {
  type?: string;  // type error
  lt: string; // length error
}

const Def: Templates = {
  // { key, value, type }
  type: "expected a String but got {{type}}",
  // { key, value, limit }
  lt: "length of {{key}} must great than {{limit}}"
};

function MinLength(limit: number, template?: string | Templates): PropertyDecorator {
  const Temps = {
    type: getTemplate(Def.type, "type", template),
    lt: getTemplate(Def.lt, "lt", template)
  };

  function decorator(target: any, key: string, value: any): ReviserDecoratorReturns<{}> {
    const type: string = getPrimitiveType(value);

    // string
    if (type !== PrimitiveTypes.String) {
      return parse(Temps.type, { key, value, type });
    }

    if (value.length < limit) {
      return parse(Temps.lt, { key, value, limit });
    }

    target[key] = value;
    return null;
  }

  return factory(decorator);
}

export default MinLength;

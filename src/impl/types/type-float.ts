/**
 * @date 2018-08-24
 * @author xuchuanping
 * @description
 */

import { factory } from "@/decorator-factory";
import { PropertyDecorator, ReviserDecoratorReturns } from "@inter/decorator";
import { PrimitiveTypes, getPrimitiveType } from "@impl/utils";
import { IEEE754Limits } from "@/constants";
import { parse, getTemplate } from "@impl/message";

interface Templates {
  type?: string;
  gt?: string;
  lt?: string;
}

const Def: Templates = {
  // { key, value, type }
  type: "expected a Number but got {{type}}",
  // { key, value, limit }
  gt: "type float must less than {{limit}} but got {{value}}",
  // { key, value, limit }
  lt: "type float must great than {{limit}} but got {{value}}"
};

function TypeFloat(template?: string | Templates): PropertyDecorator {
  const Temps = {
    type: getTemplate(Def.type, "type", template),
    gt: getTemplate(Def.gt, "gt", template),
    lt: getTemplate(Def.lt, "less", template)
  };

  function decorator(target: any, key: string, value: any): ReviserDecoratorReturns<{}> {
    const type: string = getPrimitiveType(value);

    if (type !== PrimitiveTypes.Number) {
      return parse(Temps.type, { key, value, type });
    }

    if (value > IEEE754Limits.Float.Max) {
      return parse(Temps.gt, { key, value, limit: IEEE754Limits.Float.Max });
    }

    if (value < IEEE754Limits.Float.Min) {
      return parse(Temps.lt, { key, value, limit: IEEE754Limits.Float.Min });
    }

    target[key] = value;
    return null;
  }

  return factory(decorator);
}

export default TypeFloat;

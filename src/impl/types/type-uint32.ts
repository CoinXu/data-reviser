/**
 * @date 2018-08-25
 * @author xuchuanping
 * @description
 */

import { factory } from "@/decorator-factory";
import { PropertyDecorator, ReviserDecoratorReturns, ReviserDecoratorOptions } from "@inter/decorator";
import { PrimitiveTypes, getPrimitiveType, isRequired } from "@impl/utils";
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
  gt: "type uint32 must less than {{limit}} but got {{value}}",
  // { key, value, limit }
  lt: "type uint32 must great than {{limit}} but got {{value}}"
};

function TypeUnInt32(template?: string | Templates): PropertyDecorator {
  const Temps = {
    type: getTemplate(Def.type, "type", template),
    gt: getTemplate(Def.gt, "gt", template),
    lt: getTemplate(Def.lt, "less", template)
  };

  function decorator(target: any, key: string, value: any, options: ReviserDecoratorOptions): ReviserDecoratorReturns<{}> {
    if (!options.required && !isRequired(value)) {
      return null;
    }

    const type: string = getPrimitiveType(value);

    if (type !== PrimitiveTypes.Number) {
      return parse(Temps.type, { key, value, type });
    }

    if (value > IEEE754Limits.UnInt32.Max) {
      return parse(Temps.gt, { key, value, limit: IEEE754Limits.UnInt32.Max });
    }

    if (value < IEEE754Limits.UnInt32.Min) {
      return parse(Temps.lt, { key, value, limit: IEEE754Limits.UnInt32.Min });
    }

    target[key] = value;
    return null;
  }

  return factory(decorator);
}

export default TypeUnInt32;

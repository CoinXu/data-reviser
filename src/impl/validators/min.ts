/**
 * @date 2018-10-22
 * @author xuchuanping
 * @description
 */

import { factory } from "@/decorator-factory";
import { PrimitiveTypes, getPrimitiveType, isRequired } from "@impl/utils";
import { parse, getTemplate } from "@impl/message";;
import {
  PropertyDecorator, ReviserDecoratorReturns, ReviserDecoratorOptions
} from "@inter/decorator";

interface Templates {
  type?: string;
  gt: string;
}

const Def: Templates = {
  // { key, value, type }
  type: "expected a Number but got {{type}}",
  // { key, value, limit }
  gt: "{{key}} must great than {{limit}}"
};

function Min(limit: number, template?: string | Templates): PropertyDecorator {
  const Temps = {
    type: getTemplate(Def.type, "type", template),
    gt:  getTemplate(Def.gt, "gt", template)
  };

  function decorator(target: any, key: string, value: any, options: ReviserDecoratorOptions): ReviserDecoratorReturns<{}> {
    if (!options.required && !isRequired(value)) {
      return null;
    }

    const type: string = getPrimitiveType(value);

    // string
    if (type !== PrimitiveTypes.Number) {
      return parse(Temps.type, { key, value, type });
    }

    if (value < limit) {
      return parse(Temps.gt, { key, value, limit });
    }

    target[key] = value;
    return null;
  }

  return factory(decorator);
}

export default Min;

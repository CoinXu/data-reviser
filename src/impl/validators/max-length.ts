/**
 * @date 2018-08-25
 * @author xuchuanping
 * @description
 */

import { factory } from "@/decorator-factory";
import { PrimitiveTypes, getPrimitiveType, isRequired } from "@impl/utils";
import { parse, getTemplate } from "@impl/message";;
import {
  PropertyDecorator,
  ReviserDecoratorReturns,
  ReviserDecoratorOptions
} from "@inter/decorator";

interface Templates {
  type?: string;  // type error
  gt: string;     // length error
}

const Def: Templates = {
  // { key, value, type }
  type: "expected a String but got {{type}}",
  // { key, value, limit }
  gt: "length of {{key}} must less than {{limit}}"
};

function MaxLength(limit: number, template?: string | Templates): PropertyDecorator {
  const Temps = {
    type: getTemplate(Def.type, "type", template),
    gt:  getTemplate(Def.gt, "length", template)
  }

  function decorator(target: any, key: string, value: any, options: ReviserDecoratorOptions): ReviserDecoratorReturns<{}> {
    if (!options.required && !isRequired(value)) {
      return null;
    }

    const type: string = getPrimitiveType(value);

    // string
    if (type !== PrimitiveTypes.String) {
      return parse(Temps.type, { key, value, type });
    }

    if (value.length > limit) {
      return parse(Temps.gt, { key, value, limit });
    }

    target[key] = value;
    return null;
  }

  return factory(decorator);
}

export default MaxLength;

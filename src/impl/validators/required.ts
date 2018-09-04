/**
 * @date 2018-08-25
 * @author xuchuanping
 * @description
 */

import { factory } from "@/decorator-factory";
import { PrimitiveTypes, getPrimitiveType } from "@impl/utils";
import { parse, getTemplate } from "@impl/message";
import {
  PropertyDecorator,
  ReviserDecoratorReturns,
  ReviserMessageData,
  ReviserDecoratorOptions
} from "@inter/decorator";

interface Templates {
  type?: string;  // type error
  empty?: string; // length === 0
}

const Def: Templates = {
  // { key, value, type }
  type: "{{key}} not allow undefined or null",
  // { key, value, length }
  empty: "length of string must great than 0"
};

function Required(template?: string | Templates): PropertyDecorator {
  const Temps = {
    type: getTemplate(Def.type, "type", template),
    empty: getTemplate(Def.empty, "empty", template)
  };

  function decorator(target: any, key: string, value: any, options: ReviserDecoratorOptions): ReviserDecoratorReturns<{}> {
    const type: string = getPrimitiveType(value);

    // undefined | null
    if (type === PrimitiveTypes.Undefined || type === PrimitiveTypes.Null) {
      return parse(Temps.type, { key, value, type });
    }

    // string
    if (type === PrimitiveTypes.String) {
      const str: string = value.trim();
      if (str.length < 1) {
        return parse(Temps.empty, { key, value });
      }
    }

    target[key] = value;
    return null;
  }

  return factory(decorator, { required: true });
}

export default Required;

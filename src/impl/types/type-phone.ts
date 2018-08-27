/**
 * @date 2018-08-24
 * @author xuchuanping
 * @description
 */

import { factory } from "@/decorator-factory";
import { PropertyDecorator, ReviserDecoratorReturns } from "@inter/decorator";
import { PrimitiveTypes, getPrimitiveType } from "@impl/utils";
import { parse, getTemplate } from "@impl/message";

// https://github.com/googlei18n/libphonenumber/blob/master/FALSEHOODS.md

interface Templates {
  type?: string;
  empty?: string;
};

const Def: Templates = {
  // { key, value, type }
  type: "expected a String or Number but got {{type}}",
  // { key, value }
  empty: "expected a phone number bug got a empty string"
};

function TypePhone(template?: string | Templates): PropertyDecorator {
  const Temps = {
    type: getTemplate(Def.type, "type", template),
    empty: getTemplate(Def.type, "empty", template)
  };

  function decorator(target: any, key: string, value: any): ReviserDecoratorReturns<{}> {
    const type: string = getPrimitiveType(value);

    if (type !== PrimitiveTypes.String && type !== PrimitiveTypes.Number) {
      return parse(Temps.type, { key, value, type });
    }

    const str: string = '' + value;

    if (str.length < 1) {
      return parse(Temps.empty, { key, value });
    }

    target[key] = value;
    return null;
  }

  return factory(decorator);
}

export default TypePhone;

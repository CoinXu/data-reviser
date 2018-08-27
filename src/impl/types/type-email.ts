/**
 * @date 2018-08-24
 * @author xuchuanping
 * @description
 */

import { factory } from "@/decorator-factory";
import { PropertyDecorator, ReviserDecoratorReturns } from "@inter/decorator";
import { PrimitiveTypes, getPrimitiveType } from "@impl/utils";
import { parse, getTemplate } from "@impl/message";

const Pattern = /^([\w-_]+(?:\.[\w-_]+)*)@((?:[a-z0-9]+(?:-[a-zA-Z0-9]+)*)+\.[a-z]{2,6})$/;

interface Templates {
  type?: string;
  pattern?: string;
}

const Def: Templates = {
  // { key, value, type }
  type: "expected a String but got {{type}}",
  // { key, value }
  pattern: "expected a mail address but got {{value}}"
};

function TypeEmail(template?: string | Templates): PropertyDecorator {
  const Temps = {
    type: getTemplate(Def.type, "type", template),
    pattern: getTemplate(Def.pattern, "pattern", template)
  };

  function decorator(target: any, key: string, value: any): ReviserDecoratorReturns<{}> {
    const type: string = getPrimitiveType(value);

    if (type !== PrimitiveTypes.String) {
      return parse(Temps.type, { key, value, type });
    }

    if (!Pattern.test(value)) {
      return parse(Temps.pattern, { key, value });
    }

    target[key] = value;
    return null;
  }

  return factory(decorator);
}

export default TypeEmail;

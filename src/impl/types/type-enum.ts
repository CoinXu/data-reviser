/**
 * @date 2018-09-10
 * @author zhuoyihan
 * @description
 */
import { factory } from "@/decorator-factory";
import { PropertyDecorator, ReviserDecoratorReturns, ReviserDecoratorOptions, Enum } from "@inter/decorator";
import { getPrimitiveType, isRequired } from "@impl/utils";
import { parse, getTemplate } from "@impl/message";

interface Templates {
  type?: string;
  empty?: string;
};

const Def: Templates = {
  // { key, value, type }
  type: "expected a EnumType but got {{type}}",
  // { key, value }
  empty: "expected a EnumType but got a empty"
};

function TypeEnum(enumType: Array<string|Enum>, template?: string | Templates): PropertyDecorator {
  const Temps = {
    type: getTemplate(Def.type, "type", template),
    empty: getTemplate(Def.type, "empty", template)
  };

  function decorator(target: any, key: string, value: any, options: ReviserDecoratorOptions): ReviserDecoratorReturns<{}> {
    if (!options.required && !isRequired(value)) {
      return null;
    }

    const type: string = getPrimitiveType(value);

    const str: string = '' + value;

    if (str.length < 1) {
      return parse(Temps.empty, { key, value });
    }

    for (const item of enumType) {
      if (typeof item === 'string') {
        if (item === str) {
          target[key] = value;
          return null;
        }
      } else {
        if (item.enum && item.enum === str) {
          target[key] = value;
          return null;
        }
      }
    }

    return parse(Temps.type, { key, value, type });
  }

  return factory(decorator);
}

export default TypeEnum;

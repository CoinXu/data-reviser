/**
 * @date 2018-08-27
 * @author coinxu
 * @description Mssage template parser
 */

import { PrimitiveTypes, getPrimitiveType } from "@impl/utils";

const hasOwnProperty = Object.prototype.hasOwnProperty;
const InterpolationStartMark: string = "{{";
const InterpolationEndMark: string = "}}";

export function parse<T = {}>(template: string, values?: T): string {
  if (getPrimitiveType(template) !== PrimitiveTypes.String) {
    return "";
  }

  values = values || ({} as T);

  const length: number = template.length;
  if (length < 1) {
    return "";
  }

  const StartMarkLength: number = InterpolationStartMark.length;
  const EndMarkLength: number = InterpolationEndMark.length;
  const cache: string[] = [];

  let start: number = 0;
  let point: number = 0;
  let end: number = 0;
  let name: string = "";

  while((point = template.indexOf(InterpolationStartMark, start)) > -1) {
    cache.push(template.slice(start, point));
    end = template.indexOf(InterpolationEndMark, point);

    if (end < 0) {
      throw new Error(`syntax error at ${point}: not find end mark`);
    }

    start = end + EndMarkLength;
    name = template.slice(point + StartMarkLength, end).trim();

    if (name.length < 1) {
      continue;
    }

    if (!hasOwnProperty.call(values, name)) {
      continue;
    }

    cache.push(String(values[name]).valueOf());
  }

  // no interpolations
  if (cache.length === 0) {
    return template;
  }

  return cache.join("");
};

export function getTemplate(def: string, key: string, message?: string | any): string {
  if (typeof message === "string") {
    return message;
  }

  // may be undefined
  return message && <string>message[key] || def;
}

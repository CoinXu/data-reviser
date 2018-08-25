/**
 * @date 2018-08-24
 * @author xuchuanping
 * @description
 */

const ObjectProto = Object.prototype;
const ObjectToString = ObjectProto.toString;

export enum PrimitiveTypes {
  Function = "Function",
  Object = "Object",
  Array = "Array",
  Undefined = "Undefined",
  String = "String",
  Number = "Number",
  Boolean = "Boolean",
  Null = "Null"
};

export function getPrimitiveType(value: any): string {
  return ObjectToString.call(value).slice(8, -1);
}


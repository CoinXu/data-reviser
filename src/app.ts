/**
 * @date 2018-08-23
 * @author xuchuanping
 * @description For developer test at browser.
 */

import * as Reviser from "@/index";
import { ValidatorMessage } from "@inter/decorator";
import {
  Validator, DecoRequired, DecoString, ToBoolean,
  ToDouble, ToFloat, ToInt32, ToString,
  TypeBoolean, TypeStruct
} from "@/index";

class M extends Validator {
  @ToBoolean
  str = "";
};

const m = new M();

let mData = m.get();
let mMessage = m.map({ str: Infinity });

console.log('mMessage', mMessage);
console.log('mData', mData);


mMessage = m.map({ str: -Infinity });
mData = m.get();

console.log('mMessage', mMessage);
console.log('mData', mData);

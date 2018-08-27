/**
 * @date 2018-08-23
 * @author xuchuanping
 * @description For developer test at browser.
 */

import { ReviserMessage } from "@inter/decorator";
import {
  Reviser, DecoRequired,  TypeBoolean, TypeStruct,
  ToBoolean, ToDouble, ToFloat, ToInt32, ToString,
} from "@/index";

class M extends Reviser {
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

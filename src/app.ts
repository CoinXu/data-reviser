/**
 * @date 2018-08-23
 * @author xuchuanping
 * @description For developer test at browser.
 */

import { ReviserMessage } from "@inter/decorator";
import { Reviser, DecoMinLength } from "@/index";

class M extends Reviser {
  @DecoMinLength(2, "custom message")
  str = "";
};

const m = new M();

let mData = m.get();
let mMessage = m.map({ str: Infinity });

console.log('mData', mData);
console.log('mMessage', mMessage);

/**
 * @date 2018-08-23
 * @author xuchuanping
 * @description For developer test at browser.
 */

import { ReviserMessage } from "@inter/decorator";
import { Reviser, DecoMinLength } from "@/index";

class M extends Reviser {
  @DecoMinLength(2)
  m = "";
};

class N extends M {
  @DecoMinLength(2)
  n = "";
}

class O extends M {
  @DecoMinLength(2)
  o = "";
};

const n = new N();
const nData = n.get();
const nMessage = n.map({});

console.log('nData', nData);
console.log('nMessage', nMessage);

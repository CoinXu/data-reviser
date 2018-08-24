/**
 * @date 2018-08-23
 * @author xuchuanping
 * @description For developer test at browser.
 */

import * as Reviser from "@/index";
import { Validator, DecoRequire, DecoInt32, DecoString, TypeBoolean } from "@/index";
import { ValidatorMessage } from "@inter/decorator";

// class M extends Validator {
//   @DecoString()
//   str = "";
// };

// const m = new M();
// const mMessage: ValidatorMessage<any> = m.map({ str: 1 });
// const mData = m.get();

// console.log('mMessage', mMessage);
// console.log('mData', mData);


// class N extends M {
//   @DecoInt32()
//   @DecoRequire()
//   num = 1;
// };

// const n = new N();
// const nMessage: ValidatorMessage<any> = n.map({ str: 1 });
// const nData = n.get();

// console.log('nMessage', nMessage);
// console.log('nData', nData);


class O extends Validator {
  @TypeBoolean()
  b = true;
};

const o = new O();
const oMessage = o.map({ b: false });
const oData = o.get();

console.log('oMessage', oMessage);
console.log('oData', oData);

class P extends Validator {
  @TypeBoolean()
  b = true;
};

const p = new P();
const pMessage = p.map({ b: false });
const pData = p.get();

console.log('pMessage', oMessage);
console.log('pData', oData);


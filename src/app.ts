/**
 * @date 2018-08-23
 * @author xuchuanping
 * @description For developer test at browser.
 */

import * as Reviser from "@/index";
import { Validator, DecoRequire, DecoInt32, DecoString } from "@/index";
import { ValidatorMessage } from "@inter/decorator";

class M extends Validator {
  @DecoString()
  str = "";
};

const m = new M();
const mMessage: ValidatorMessage<any> = m.map({ str: 1 });
const mData = m.get();

console.log('mMessage', mMessage);
console.log('mData', mData);


class N extends M {
  @DecoInt32()
  @DecoRequire()
  num = 1;
};

const n = new N();
const nMessage: ValidatorMessage<any> = n.map({ str: 1 });
const nData = n.get();

console.log('nMessage', nMessage);
console.log('nData', nData);


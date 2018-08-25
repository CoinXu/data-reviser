/**
 * @date 2018-08-23
 * @author xuchuanping
 * @description For developer test at browser.
 */

import * as Reviser from "@/index";
import { ValidatorMessage } from "@inter/decorator";
import {
  Validator, DecoRequire, DecoString,
  ToDouble, ToFloat, ToInt32, ToString,
  TypeBoolean, TypeStructure
} from "@/index";

class M extends Validator {
  @ToString
  str = "";
};

const m = new M();
const mMessage = m.map({ str: 1 });
const mData = m.get();

console.log('mMessage', mMessage);
console.log('mData', mData);


class N extends M {
  @ToInt32
  num = 1;
};

const n = new N();
const nMessage = n.map({ str: 1 });
const nData = n.get();

console.log('nMessage', nMessage);
console.log('nData', nData);


class O extends Validator {
  @TypeBoolean()
  b = true;

  @TypeStructure(N)
  s = {};
};

const o = new O();
const oMessage = o.map({
  b: 1,
  s: {
    str: 2,
    num: "2"
  }
});
const oData = o.get();
console.log('oMessage', oMessage);
console.log('oData', oData);


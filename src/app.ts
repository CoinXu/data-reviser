/**
 * @date 2018-08-23
 * @author xuchuanping
 * @description For developer test at browser.
 */

import { expect, assert } from "chai";
import { Enum, ReviserMessage } from "@inter/decorator";
import { Reviser, DecoRequired, ToString, TypeString, TypeEnum } from "@/index";

class M extends Reviser {
  @ToString
  @DecoRequired()
  m = "";
};

class N extends M {
  @TypeString()
  n = "";
};

class O extends M {
  @TypeString()
  @DecoRequired()
  o = "";
};

const Week: Array<Enum> = [
  {enum: 'Sun'},
  {enum: 'Mon'},
  {enum: 'Tue'},
  {enum: 'Wed'},
  {enum: 'Thu'},
  {enum: 'Fri'},
  {enum: 'Sat'}
];
class E extends Reviser {
  @TypeEnum(Week)
  enum = '';
}

const n = new E();
const nMessage = n.map({enum: 'Sat'});
// expect(Object.keys(nMessage)).to.be.deep.equal(['m']);
// expect(Object.keys(n.get())).to.be.deep.equal(['m', 'n']);
console.log(n.get(), nMessage);

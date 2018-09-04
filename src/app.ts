/**
 * @date 2018-08-23
 * @author xuchuanping
 * @description For developer test at browser.
 */

import { expect, assert } from "chai";
import { ReviserMessage } from "@inter/decorator";
import { Reviser, DecoRequired, ToString, TypeString } from "@/index";

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

const n = new N();
const nMessage = n.map({});
expect(Object.keys(nMessage)).to.be.deep.equal(['m']);
expect(Object.keys(n.get())).to.be.deep.equal(['m', 'n']);

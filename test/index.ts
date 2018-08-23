/**
 * @date 2018-08-23
 * @author xuchuanping
 * @description
 */

import "mocha";
import { expect } from "chai";
import { Validator, DecoRequire, DecoInt32 } from "@/index";

describe("Class Validator", function() {
  // Legal data
  it("Should return empty object while set legal data by method Validator.setModel", function() {
    class M extends Validator {
      @DecoInt32()
      @DecoRequire()
      n = 1;
    };

    const m = new M();
    const message: any = m.setModel({ n: 2 });
    expect(message).to.be.deep.equal({});
  });
});

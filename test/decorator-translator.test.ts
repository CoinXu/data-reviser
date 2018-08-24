/**
 * @date 2018-08-24
 * @author xuchuanping
 * @description Translate decorators test case.
 */

import "mocha";
import { expect, assert } from "chai";
import { IEEE754Limits } from "@/constants";
import { Validator, ToDouble, ToFloat, ToInt32, ToInt64, ToString } from "@/index";

describe("Translate decorators", function() {
  it("Should translate value to double while set @ToDouble decorator", function() {
    class M extends Validator<any> {
      @ToDouble
      n = "";
    };

    const m = new M();

    let message = m.map({ n: '1' });
    expect(message).to.be.equal(null);

    let data = m.get();
    expect(data.n).to.be.equal(1);

    message = m.map({ n: Infinity });
    expect(message).to.be.equal(null);

    data = m.get();
    assert(data.n < Infinity);
  });

  it("Should translate value to float while set @ToFloat decorator", function() {
    class M extends Validator<any> {
      @ToFloat
      f = "";
    };

    const m = new M();

    const message = m.map({ f: '1' });
    expect(message).to.be.equal(null);

    const data = m.get();
    expect(data.f).to.be.equal(1);
  });

  it("Should translate value to int32 while set @ToInt32 decorator", function() {
    class M extends Validator<any> {
      @ToInt32
      f = "";
    };

    const m = new M();

    const message = m.map({ f: '1' });
    expect(message).to.be.equal(null);

    const data = m.get();
    expect(data.f).to.be.equal(1);
  });

  it("Should translate value to int64 while set @ToInt64 decorator", function() {
    class M extends Validator<any> {
      @ToInt64
      f = "";
    };

    const m = new M();

    const message = m.map({ f: '1' });
    expect(message).to.be.equal(null);

    const data = m.get();
    expect(data.f).to.be.equal(1);
  });
});

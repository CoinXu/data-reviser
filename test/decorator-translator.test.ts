/**
 * @date 2018-08-24
 * @author xuchuanping
 * @description Translate decorators test case.
 */

import "mocha";
import { expect, assert } from "chai";
import { IEEE754Limits } from "@/constants";
import {
  Reviser, ToBoolean, ToDouble, ToFloat, ToInt32, ToInt64, ToString,
  ToUnInt32, ToUnInt64
} from "@/index";

describe("Translate decorators", function() {
  // Boolean
  it("Should translate value to boolean while set @ToBoolean decorator", function() {
    class M extends Reviser<any> {
      @ToBoolean
      n = 1;
    };

    const m = new M();

    let data: any = m.get();
    expect(data.n).to.be.equal(true);

    let message = m.map({ n: "1" });
    expect(message).to.be.equal(null);

    data = m.get();
    expect(data.n).to.be.equal(true);
  });

  // Double
  it("Should translate value to double while set @ToDouble decorator", function() {
    class M extends Reviser<any> {
      @ToDouble
      n = "";
    };

    const m = new M();

    let message = m.map({ n: "1" });
    expect(message).to.be.equal(null);

    let data = m.get();
    expect(data.n).to.be.equal(1);

    message = m.map({ n: Infinity });
    expect(message).to.be.equal(null);

    data = m.get();
    expect(data.n).to.be.equal(IEEE754Limits.Double.Max);

    message = m.map({ n: -Infinity });
    expect(message).to.be.equal(null);

    data = m.get();
    expect(data.n).to.be.equal(IEEE754Limits.Double.Min);
  });

  // Float
  it("Should translate value to float while set @ToFloat decorator", function() {
    class M extends Reviser<any> {
      @ToFloat
      n = "";
    };

    const m = new M();

    let message = m.map({ n: "1" });
    expect(message).to.be.equal(null);

    let data = m.get();
    expect(data.n).to.be.equal(1);

    message = m.map({ n: Infinity });
    expect(message).to.be.equal(null);

    data = m.get();
    expect(data.n).to.be.equal(IEEE754Limits.Float.Max);

    message = m.map({ n: -Infinity });
    expect(message).to.be.equal(null);

    data = m.get();
    expect(data.n).to.be.equal(IEEE754Limits.Float.Min);
  });

  // Int32
  it("Should translate value to int32 while set @ToInt32 decorator", function() {
    class M extends Reviser<any> {
      @ToInt32
      n = "";
    };

    const m = new M();

    let message = m.map({ n: "1" });
    expect(message).to.be.equal(null);

    let data = m.get();
    expect(data.n).to.be.equal(1);

    message = m.map({ n: Infinity });
    expect(message).to.be.equal(null);

    data = m.get();
    expect(data.n).to.be.equal(IEEE754Limits.Int32.Max);

    message = m.map({ n: -Infinity });
    expect(message).to.be.equal(null);

    data = m.get();
    expect(data.n).to.be.equal(IEEE754Limits.Int32.Min);
  });

  // Int64
  it("Should translate value to int64 while set @ToInt64 decorator", function() {
    class M extends Reviser<any> {
      @ToInt64
      n = "";
    };

    const m = new M();

    let message = m.map({ n: "1" });
    expect(message).to.be.equal(null);

    let data = m.get();
    expect(data.n).to.be.equal(1);

    message = m.map({ n: Infinity });
    expect(message).to.be.equal(null);

    data = m.get();
    expect(data.n).to.be.equal(IEEE754Limits.Int64.Max);

    message = m.map({ n: -Infinity });
    expect(message).to.be.equal(null);

    data = m.get();
    expect(data.n).to.be.equal(IEEE754Limits.Int64.Min);
  });

  // String
  it("Should translate value to string while set @ToString decorator", function() {
    class M extends Reviser<any> {
      @ToString
      n = "";
    };

    const m = new M();

    let message = m.map({ n: "1" });
    expect(message).to.be.equal(null);

    let data = m.get();
    expect(data.n).to.be.equal("1");

    m.map({ n: [] });
    expect(message).to.be.equal(null);

    data = m.get();
    expect(data.n).to.be.equal("");

    m.map({ n: {} });
    expect(message).to.be.equal(null);

    data = m.get();
    expect(data.n).to.be.equal("[object Object]");
  });

  // UnInt32
  it("Should translate value to uint32 while set @ToUnInt32 decorator", function() {
    class M extends Reviser<any> {
      @ToUnInt32
      n = "";
    };

    const m = new M();

    let message = m.map({ n: "1" });
    expect(message).to.be.equal(null);

    let data = m.get();
    expect(data.n).to.be.equal(1);

    message = m.map({ n: Infinity });
    expect(message).to.be.equal(null);

    data = m.get();
    expect(data.n).to.be.equal(IEEE754Limits.UnInt32.Max);

    message = m.map({ n: -Infinity });
    expect(message).to.be.equal(null);

    data = m.get();
    expect(data.n).to.be.equal(IEEE754Limits.UnInt32.Min);
  });

  // UnInt64
  it("Should translate value to uint64 while set @UnInt64 decorator", function() {
    class M extends Reviser<any> {
      @ToUnInt64
      n = "";
    };

    const m = new M();

    let message = m.map({ n: "1" });
    expect(message).to.be.equal(null);

    let data = m.get();
    expect(data.n).to.be.equal(1);

    message = m.map({ n: Infinity });
    expect(message).to.be.equal(null);

    data = m.get();
    expect(data.n).to.be.equal(IEEE754Limits.UnInt64.Max);

    message = m.map({ n: -Infinity });
    expect(message).to.be.equal(null);

    data = m.get();
    expect(data.n).to.be.equal(IEEE754Limits.UnInt64.Min);
  });

});

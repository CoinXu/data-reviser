/**
 * @date 2018-08-23
 * @author xuchuanping
 * @description
 */

import "mocha";
import { expect, assert } from "chai";
import { PropertyDecorator, ValidatorMessage } from "@inter/decorator";
import { factory } from "@/decorator-factory";
import { IEEE754Limits } from "@/constants";
import {
  Validator, DecoRequire, DecoInt32,
  ToDouble, ToFloat, ToInt32, ToInt64, ToString
} from "@/index";

describe("Class Validator", function() {
  // Legal data
  it("Should return empty object while set legal data by method Validator.setModel", function() {
    class M extends Validator<any> {
      @DecoInt32()
      @DecoRequire()
      n = 1;
    };

    const m = new M();
    const message: ValidatorMessage<any> = m.setModel({ n: 2 });
    expect(message).to.be.deep.equal({});
  });


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

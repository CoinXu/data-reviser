/**
 * @date 2018-08-24
 * @author xuchuanping
 * @description Validator test case
 */

import "mocha";
import { expect, assert } from "chai";
import { ValidatorMessage } from "@inter/decorator";
import { Validator, DecoRequire, DecoInt32 } from "@/index";

describe("Class Validator", function() {
  // Legal data
  // TODO deprecated
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

  // get
  it("Should has method named get on Validator instance", function() {
    const v = new Validator();
    expect(v.get).to.be.a('function');
  });

  // set
  it("Should has method named set on Validator instance", function() {
    const v = new Validator();
    expect(v.set).to.be.a('function');
  });

  // map
  it("Should has method named map on Validator instance", function() {
    const v = new Validator();
    expect(v.map).to.be.a('function');
  });

  // # map
  it("Should return null while method map called while no error accored", function() {
    const v = new Validator();
    const message = v.map({});
    assert.isNull(message);
  });

  it("Should return object while method map called while error accored", function() {
    class M extends Validator {
      @DecoRequire()
      n = 1;
    };

    const m = new M();
    const message = m.map({});
    expect(message).to.be.a('object');
  });

  // # get
  it("Should return object that contains all properties that decorated while call method get", function() {
    class M extends Validator {
      @DecoRequire()
      a = 1;

      @DecoRequire()
      b = 2;

      c = 3;
    };

    const m = new M();
    const data = m.get();
    expect(Object.keys(data)).to.be.deep.equal(['a', 'b']);
  });
});

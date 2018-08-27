/**
 * @date 2018-08-24
 * @author xuchuanping
 * @description Reviser test case
 */

import "mocha";
import { expect, assert } from "chai";
import { ReviserMessage } from "@inter/decorator";
import { Reviser, DecoRequired, TypeInt32 } from "@/index";

describe("Class Reviser", function() {
  // #get
  it("Should has method named get on Reviser instance", function() {
    const v = new Reviser();
    expect(v.get).to.be.a('function');
  });

  // #set
  it("Should has method named set on Reviser instance", function() {
    const v = new Reviser();
    expect(v.set).to.be.a('function');
  });

  // # map
  it("Should has method named map on Reviser instance", function() {
    const v = new Reviser();
    expect(v.map).to.be.a('function');
  });

  // # map
  it("Should return null while method map called while no error accored", function() {
    const v = new Reviser();
    const message = v.map({});
    assert.isNull(message);
  });

  it("Should return object while method map called while error accored", function() {
    class M extends Reviser {
      @DecoRequired()
      n = 1;
    };

    const m = new M();
    const message = m.map({});
    expect(message).to.be.a('object');
  });

  // # get
  it("Should return object that contains all properties that decorated while call method get", function() {
    class M extends Reviser {
      @DecoRequired()
      a = 1;

      @DecoRequired()
      b = 2;

      c = 3;
    };

    const m = new M();
    const data = m.get();
    expect(Object.keys(data)).to.be.deep.equal(['a', 'b']);
  });
});

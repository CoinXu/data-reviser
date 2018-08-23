/**
 * @date 2018-08-23
 * @author xuchuanping
 * @description
 */

import "mocha";
import { expect } from "chai";
import { Validator, DecoRequire, DecoInt32 } from "@/index";
import { PropertyDecorator } from "@inter/decorator";
import { factory } from "@/decorator-factory";

const TestDecoratorToSet = "TestDecoratorToSet";
const TestDecorator: PropertyDecorator = factory(function(target: any, key: string, value: any): any {
  target[key] = TestDecoratorToSet;
});

describe("Class Validator", function() {
  // Legal data
  it("Should return empty object while set legal data by method Validator.setModel", function() {
    class M extends Validator<any> {
      @DecoInt32()
      @DecoRequire()
      n = 1;
    };

    const m = new M();
    const message: any = m.setModel({ n: 2 });
    expect(message).to.be.deep.equal({});
  });

  it("Should update target value while use TestDecorator", function() {
    class M extends Validator<any> {
      @TestDecorator
      str = "";
    };

    const m = new M();
    m.map({ str: 1 });

    const data = m.get();
    expect(data.str).to.be.equal(TestDecoratorToSet);
  });
});

/**
 * @date 2018-08-27
 * @author coinxu
 * @description
 */

import "mocha";
import { expect, assert } from "chai";
import { parse, getTemplate } from "@impl/message";

describe("Message parser", function() {
  // parse
  describe("#parse", function() {
    it("Should return string that length is 0 pass any data type", function() {
      expect(parse(true as any)).to.be.equal("");
      expect(parse(null as any)).to.be.equal("");
      expect(parse(undefined as any)).to.be.equal("");
      expect(parse(1 as any)).to.be.equal("");
      // @ts-ignore
      expect(parse(Symbol("foo") as any)).to.be.equal("");
    });

    it("Should return orignal string if no interpolation", function() {
      expect(parse("test one")).to.be.equal("test one");
    });

    it("Should return string that replace interpolations", function() {
      const template = "key is {{key}} value is {{value}} duplicate property name {{key}}";
      const value = { key: 'k', value: 'v' };
      const result = "key is k value is v duplicate property name k";
      expect(parse(template, value)).to.be.equal(result);
    });

    it("Should ignore interpolation gaps", function() {
      expect(parse("key is {{ key }}", { key: 'k' })).to.be.equal("key is k");
    });

    it("Should throw error while template syntax error", function() {
      let hasError: boolean = false;
      try {
        expect(parse("key is {{ key"));
      } catch(e) {
        hasError = true;
      }

      assert(hasError);
    });

    it("Should not replace interpolation if values not contains", function() {
      expect(parse("key is {{key}}", {})).to.be.equal("key is ");
    });

    it("Should translate value to string if not a string type", function() {
      const values = {
        obj: { a: 1 },
        arr: [1],
        bool: true,
        nl: null,
        undef: undefined,
        num: 1,
        // @ts-ignore
        symb: Symbol("foo")
      };

      const template = "{{obj}} {{arr}} {{bool}} {{nl}} {{undef}} {{num}} {{symb}}";
      const result = "[object Object] 1 true null undefined 1 Symbol(foo)";
      expect(parse(template, values)).to.be.equal(result);
    });
  });

  // getTempalte
  describe("#getTemplate", function() {
    it("Should return message if param message passed a string data", function() {
      const template: string = getTemplate("def", "def", "message");
      expect(template).to.be.equal("message");
    });

    it("Should return def if param message not passed", function() {
      expect(getTemplate("def", "def")).to.be.equal("def");
    });

    it("Should return value that on message named key if param message is an object", function() {
      const template = { def: "t e s t" };
      expect(getTemplate("def", "def", template)).to.be.equal(template.def);
    });

    it("Should return def if param message is an object and no value named param key", function() {
      const template = { def: "t e s t" };
      expect(getTemplate("def", "undef", template)).to.be.equal("def");
    });
  });
});

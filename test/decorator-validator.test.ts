/**
 * @date 2018-08-25
 * @author xuchuanping
 * @description
 */

import "mocha";
import { expect, assert } from "chai";
import { Validator, DecoMaxLength, DecoMinLength, DecoRequired } from "@/index";

describe("Validator decorators", function() {
  // DecoMaxLength
  describe("@DecoMaxLength", function() {
    it("Should return message if pass a non-string data", function() {
      class M extends Validator {
        @DecoMaxLength(2)
        foo = "";
      };

      const m = new M();
      const message = m.set({ foo: 123 });
      expect(message.foo).to.be.a('string');
    });

    it("Should return message if pass a long string", function() {
      class M extends Validator {
        @DecoMaxLength(2)
        foo = "";
      };

      const m = new M();
      const message = m.set({ foo: "abc" });
      expect(message.foo).to.be.a('string');
    });

    it("Should return null if pass a legal string", function() {
      class M extends Validator {
        @DecoMaxLength(2)
        foo = "";
      };

      const m = new M();
      const message = m.set({ foo: "a" });
      expect(message).to.be.equal(null);
    });

    it("Should return custom message while map a non-double data", function() {
      const customMesage = 'custom message';

      class M extends Validator {
        @DecoMaxLength(2, customMesage)
        p = 1;
      };

      const m = new M();
      const message = m.map({ p: null });
      expect(message.p).to.be.equal(customMesage);
    });
  });

  // DecoMinLength
  describe("@DecoMinLength", function() {
    it("Should return message if pass a non-string data", function() {
      class M extends Validator {
        @DecoMinLength(2)
        foo = "";
      };

      const m = new M();
      const message = m.set({ foo: 123 });
      expect(message.foo).to.be.a('string');
    });

    it("Should return message if pass a short string", function() {
      class M extends Validator {
        @DecoMinLength(2)
        foo = "";
      };

      const m = new M();
      const message = m.set({ foo: "a" });
      expect(message.foo).to.be.a('string');
    });

    it("Should return null if pass a legal string", function() {
      class M extends Validator {
        @DecoMinLength(2)
        foo = "";
      };

      const m = new M();
      const message = m.set({ foo: "ab" });
      expect(message).to.be.equal(null);
    });

    it("Should return custom message while map a non-double data", function() {
      const customMesage = 'custom message';

      class M extends Validator {
        @DecoMinLength(2, customMesage)
        p = 1;
      };

      const m = new M();
      const message = m.map({ p: null });
      expect(message.p).to.be.equal(customMesage);
    });
  });

  // DecoRequired
  describe("@DecoRequired", function() {
    it("Should return message if pass undefined or null", function() {
      class M extends Validator {
        @DecoRequired()
        foo = "";
      };

      const m = new M();

      let message = m.set({ foo: undefined });
      expect(message.foo).to.be.a('string');

      message = m.set({ foo: null });
      expect(message.foo).to.be.a('string');
    });

    it("Should return message if pass empty string", function() {
      class M extends Validator {
        @DecoRequired()
        foo = "";
      };

      const m = new M();
      const message = m.set({ foo: "" });
      expect(message.foo).to.be.a('string');
    });

    it("Should return null if pass a string", function() {
      class M extends Validator {
        @DecoRequired()
        foo = "";
      };

      const m = new M();
      const message = m.set({ foo: "a" });
      expect(message).to.be.equal(null);
    });
  });
});

/**
 * @date 2018-08-25
 * @author xuchuanping
 * @description
 */

import "mocha";
import { expect, assert } from "chai";
import { Reviser, DecoMaxLength, DecoMinLength, Required, Max, Min } from "@/index";

describe("Reviser decorators", function() {
  // DecoMaxLength
  describe("@DecoMaxLength", function() {
    it("Should return message if pass a non-string data", function() {
      class M extends Reviser {
        @DecoMaxLength(2)
        foo = "";
      };

      const m = new M();
      const message = m.set({ foo: 123 });
      expect(message.foo).to.be.a('string');
    });

    it("Should return message if pass a long string", function() {
      class M extends Reviser {
        @DecoMaxLength(2)
        foo = "";
      };

      const m = new M();
      const message = m.set({ foo: "abc" });
      expect(message.foo).to.be.a('string');
    });

    it("Should return null if pass a legal string", function() {
      class M extends Reviser {
        @DecoMaxLength(2)
        foo = "";
      };

      const m = new M();
      const message = m.set({ foo: "a" });
      expect(message).to.be.equal(null);
    });

    it("Should return custom message if passed while map a non-double data", function() {
      const customMesage = 'custom message';

      class M extends Reviser {
        @DecoMaxLength(2, customMesage)
        @Required()
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
      class M extends Reviser {
        @DecoMinLength(2)
        foo = "";
      };

      const m = new M();
      const message = m.set({ foo: 123 });
      expect(message.foo).to.be.a('string');
    });

    it("Should return message if pass a short string", function() {
      class M extends Reviser {
        @DecoMinLength(2)
        foo = "";
      };

      const m = new M();
      const message = m.set({ foo: "a" });
      expect(message.foo).to.be.a('string');
    });

    it("Should return null if pass a legal string", function() {
      class M extends Reviser {
        @DecoMinLength(2)
        foo = "";
      };

      const m = new M();
      const message = m.set({ foo: "ab" });
      expect(message).to.be.equal(null);
    });

    it("Should return custom message if passed while map a non-double data", function() {
      const customMesage = 'custom message';

      class M extends Reviser {
        @DecoMinLength(2, customMesage)
        @Required()
        p = 1;
      };

      const m = new M();
      const message = m.map({ p: null });
      expect(message.p).to.be.equal(customMesage);
    });
  });

  // Required
  describe("@Required", function() {
    it("Should return message if pass undefined or null", function() {
      class M extends Reviser {
        @Required()
        foo = "";
      };

      const m = new M();

      let message = m.set({ foo: undefined });
      expect(message.foo).to.be.a('string');

      message = m.set({ foo: null });
      expect(message.foo).to.be.a('string');
    });

    it("Should return message if pass empty string", function() {
      class M extends Reviser {
        @Required()
        foo = "";
      };

      const m = new M();
      const message = m.set({ foo: "" });
      expect(message.foo).to.be.a('string');
    });

    it("Should return null if pass a string", function() {
      class M extends Reviser {
        @Required()
        foo = "";
      };

      const m = new M();
      const message = m.set({ foo: "a" });
      expect(message).to.be.equal(null);
    });

    it("Should return custom message if passed while map a non-required data", function() {
      class M extends Reviser {
        @Required("foo")
        foo = "";
      };

      const m = new M();
      const message = m.set({ foo: "" });
      expect(message.foo).to.be.equal("foo");
    })
  });

  // Max
  describe("@Max", function() {
    it("Should return message if pass a non-number data", function() {
      class M extends Reviser {
        @Max(2)
        foo = 1;
      };

      const m = new M();
      const message = m.set({ foo: [] });
      expect(message.foo).to.be.a('string');
    });

    it("Should return message if pass a value that great than limit value", function() {
      class M extends Reviser {
        @Max(2)
        foo = 1;
      };

      const m = new M();
      const message = m.set({ foo: 3 });
      expect(message.foo).to.be.a('string');
    });

    it("Should return null if pass a legal value", function() {
      class M extends Reviser {
        @Max(2)
        foo = 1;
      };

      const m = new M();
      const message = m.set({ foo: 1 });
      expect(message).to.be.equal(null);
    });

    it("Should return custom message if passed while map a illegal data", function() {
      class M extends Reviser {
        @Max(2, "foo")
        foo = 1;
      };

      const m = new M();
      const message = m.set({ foo: 3 });
      expect(message.foo).to.be.equal("foo");
    });
  });

  // Min
  describe("@Min", function() {
    it("Should return message if pass a non-number data", function() {
      class M extends Reviser {
        @Min(2)
        foo = 1;
      };

      const m = new M();
      const message = m.set({ foo: {} });
      expect(message.foo).to.be.a('string');
    });

    it("Should return message if pass a value that less than limit value", function() {
      class M extends Reviser {
        @Min(2)
        foo = 1;
      };

      const m = new M();
      const message = m.set({ foo: 1 });
      expect(message.foo).to.be.a('string');
    });

    it("Should return null if pass a legal value", function() {
      class M extends Reviser {
        @Min(2)
        foo = 1;
      };

      const m = new M();
      const message = m.set({ foo: 2 });
      expect(message).to.be.equal(null);
    });

    it("Should return custom message if passed while map a illegal data", function() {
      class M extends Reviser {
        @Min(2, "foo")
        foo = 1;
      };

      const m = new M();
      const message = m.set({ foo: 1 });
      expect(message.foo).to.be.equal("foo");
    });
  });

});

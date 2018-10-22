/**
 * @date 2018-08-24
 * @author xuchuanping
 * @description Translate decorators test case.
 */

import "mocha";
import { expect, assert } from "chai";
import {
  Reviser, TypeBoolean, TypeDouble, TypeEmail, TypeFloat, TypeInt32,
  TypeInt64, TypePhone, TypeString, TypeStruct, TypeUnInt32, TypeUnInt64, Required,
  TypeArray, TypeArrayStruct, ToInt32
} from "@/index";

// TODO
// Add numeric limits test case

describe("Data type decorators", function() {
  // TypeBoolean
  describe("@TypeBoolean", function() {
    it("Should ignore non-required property while pass a non-required value", function() {
      class M extends Reviser {
        @TypeBoolean()
        p = true;
      };

      const m = new M();
      const message = m.map({});
      expect(message).to.be.a('null');
    });

    it("Should return string message while map a non-boolean data", function() {
      class M extends Reviser {
        @TypeBoolean()
        p = true;
      };

      const m = new M();
      const message = m.map({ p: 1 });
      expect(message.p).to.be.a('string');
    });

    it("Should return null while map a boolean data", function() {
      class M extends Reviser {
        @TypeBoolean()
        p = true;
      };

      const m = new M();
      const message = m.map({ p: false });
      expect(message).to.be.equal(null);
    });

    it("Should return custom message while map a non-boolean data", function() {
      const customMesage = 'custom message';

      class M extends Reviser {
        @TypeBoolean(customMesage)
        p = true;
      };

      const m = new M();
      const message = m.map({ p: {} });
      expect(message.p).to.be.equal(customMesage);
    });
  });

  // TypeDouble
  describe("@TypeDouble", function() {
    it("Should return string message while map a non-double data", function() {
      class M extends Reviser {
        @TypeDouble()
        p = 1;
      };

      const m = new M();
      const message = m.map({ p: Infinity });
      expect(message.p).to.be.a('string');
    });

    it("Should return null while map a double data", function() {
      class M extends Reviser {
        @TypeDouble()
        p = 1;
      };

      const m = new M();
      const message = m.map({ p: 1.2 });
      expect(message).to.be.equal(null);
    });

    it("Should return custom message while map a non-double data", function() {
      const customMesage = 'custom message';

      class M extends Reviser {
        @TypeDouble(customMesage)
        p = 1;
      };

      const m = new M();
      const message = m.map({ p: "123" });
      expect(message.p).to.be.equal(customMesage);
    });
  });

  // TypeEmail
  describe("@TypeEmail", function() {
    it("Should return string message while map a non-email data", function() {
      class M extends Reviser {
        @TypeEmail()
        p = "";
      };

      const m = new M();
      const message = m.map({ p: "123" });
      expect(message.p).to.be.a('string');
    });

    it("Should return null while map a email data", function() {
      class M extends Reviser {
        @TypeEmail()
        p = "";
      };

      const m = new M();
      const message = m.map({ p: "a@b.cd" });
      expect(message).to.be.equal(null);
    });

    it("Should return custom message while map a non-email data", function() {
      const customMesage = 'custom message';

      class M extends Reviser {
        @TypeEmail(customMesage)
        p = 1;
      };

      const m = new M();
      const message = m.map({ p: "123" });
      expect(message.p).to.be.equal(customMesage);
    });
  });

  // TypeFloat
  describe("@TypeFloat", function() {
    it("Should return string message while map a non-float data", function() {
      class M extends Reviser {
        @TypeFloat()
        p = 1.2;
      };

      const m = new M();
      const message = m.map({ p: "123" });
      expect(message.p).to.be.a('string');
    });

    it("Should return null while map a float data", function() {
      class M extends Reviser {
        @TypeFloat()
        p = 1.2;
      };

      const m = new M();
      const message = m.map({ p: 2 });
      expect(message).to.be.equal(null);
    });

    it("Should return custom message while map a non-float data", function() {
      const customMesage = 'custom message';

      class M extends Reviser {
        @TypeFloat(customMesage)
        p = 1;
      };

      const m = new M();
      const message = m.map({ p: Infinity });
      expect(message.p).to.be.equal(customMesage);
    });
  });

  // TypeInt32
  describe("@TypeInt32", function() {
    it("Should return string message while map a non-int32 data", function() {
      class M extends Reviser {
        @TypeInt32()
        p = 1;
      };

      const m = new M();
      const message = m.map({ p: "123" });
      expect(message.p).to.be.a('string');
    });

    it("Should return null while map an int32 data", function() {
      class M extends Reviser {
        @TypeInt32()
        p = 1;
      };

      const m = new M();
      const message = m.map({ p: 2 });
      expect(message).to.be.equal(null);
    });

    it("Should return custom message while map a non-int32 data", function() {
      const customMesage = 'custom message';

      class M extends Reviser {
        @TypeInt32(customMesage)
        @Required()
        p = 1;
      };

      const m = new M();
      const message = m.map({ p: Infinity });
      expect(message.p).to.be.equal(customMesage);
    });
  });

  // TypeInt64
  describe("@TypeInt64", function() {
    it("Should return string message while map a non-int64 data", function() {
      class M extends Reviser {
        @TypeInt64()
        p = 1;
      };

      const m = new M();
      const message = m.map({ p: "123" });
      expect(message.p).to.be.a('string');
    });

    it("Should return null while map an int64 data", function() {
      class M extends Reviser {
        @TypeInt64()
        p = 1;
      };

      const m = new M();
      const message = m.map({ p: 2 });
      expect(message).to.be.equal(null);
    });

    it("Should return custom message while map a non-int64 data", function() {
      const customMesage = 'custom message';

      class M extends Reviser {
        @TypeInt64(customMesage)
        @Required()
        p = 1;
      };

      const m = new M();
      const message = m.map({ p: Infinity });
      expect(message.p).to.be.equal(customMesage);
    });
  });

  // TypePhone
  describe("@TypePhone", function() {
    it("Should return string message while map a non-phone data", function() {
      class M extends Reviser {
        @TypePhone()
        p = "";
      };

      const m = new M();
      const message = m.map({ p: {} });
      expect(message.p).to.be.a('string');
    });

    it("Should return null while map a phone data", function() {
      class M extends Reviser {
        @TypePhone()
        p = 1;
      };

      const m = new M();
      const message = m.map({ p: 123456 });
      expect(message).to.be.equal(null);
    });

    it("Should return custom message while map a non-phone data", function() {
      const customMesage = 'custom message';

      class M extends Reviser {
        @TypePhone(customMesage)
        p = 1;
      };

      const m = new M();
      const message = m.map({ p: {} });
      expect(message.p).to.be.equal(customMesage);
    });
  });

  // TypeString
  describe("@TypeString", function() {
    it("Should return string message while map a non-string data", function() {
      class M extends Reviser {
        @TypeString()
        p = "";
      };

      const m = new M();
      const message = m.map({ p: 1 });
      expect(message.p).to.be.a('string');
    });

    it("Should return null while map a string data", function() {
      class M extends Reviser {
        @TypeString()
        p = 1;
      };

      const m = new M();
      const message = m.map({ p: "s" });
      expect(message).to.be.equal(null);
    });

    it("Should return custom message while map a non-string data", function() {
      const customMesage = 'custom message';

      class M extends Reviser {
        @TypeString(customMesage)
        p = 1;
      };

      const m = new M();
      const message = m.map({ p: 123 });
      expect(message.p).to.be.equal(customMesage);
    });
  });

  // TypeStruct
  describe("@TypeStruct", function() {
    it("Should return string message while map a non-structure class", function() {
      class B extends Reviser {
        @TypeInt32()
        foo = 1;

        @TypeString()
        bar = "";
      };

      class M extends Reviser {
        @TypeStruct(B)
        b = {};
      };

      const m = new M();
      const message: any = m.map({ b: { foo: "a", bar: 1 } });
      expect(message.b).to.be.a('object');
      expect(message.b.foo).to.be.a('string');
      expect(message.b.bar).to.be.a('string');
    });

    it("Should return null while map a structure class", function() {
      class B extends Reviser {
        @TypeInt32()
        foo = 1;

        @TypeString()
        bar = "";
      };

      class M extends Reviser {
        @TypeStruct(B)
        b = {};
      };

      const m = new M();
      const message = m.map({
        b: {
          foo: 2,
          bar: "bar"
        }
      });
      expect(message).to.be.equal(null);
    });
  });

  // TypeUnInt32
  describe("@TypeUnInt32", function() {
    it("Should return string message while map a non-uint32 data", function() {
      class M extends Reviser {
        @TypeUnInt32()
        p = 1;
      };

      const m = new M();
      const message = m.map({ p: "123" });
      expect(message.p).to.be.a('string');
    });

    it("Should return null while map an uint32 data", function() {
      class M extends Reviser {
        @TypeUnInt32()
        p = 1;
      };

      const m = new M();
      const message = m.map({ p: 1 });
      expect(message).to.be.equal(null);
    });

    it("Should return custom message while map a non-uint32 data", function() {
      const customMesage = 'custom message';

      class M extends Reviser {
        @TypeUnInt32(customMesage)
        p = 1;
      };

      const m = new M();
      const message = m.map({ p: Infinity });
      expect(message.p).to.be.equal(customMesage);
    });
  });

  // TypeArray
  describe("@TypeArray", function() {
    it("Should return string message while map a non-array data", function() {
      class M extends Reviser {
        @TypeArray()
        p = 1;
      };

      const m = new M();
      const message = m.map({ p: "123" });
      expect(message.p).to.be.a('string');
    });

    it("Should return null while map an array", function() {
      class M extends Reviser {
        @TypeArray()
        p = 1;
      };

      const m = new M();
      const message = m.map({ p: [] });
      expect(message).to.be.equal(null);
    });

    it("Should return message form pass decorators if map a illegal data", function() {
      class M extends Reviser {
        @TypeArray([Required(), ToInt32])
        p = 1;
      };

      const m = new M();
      const message = m.map({ p: [null] });
      expect(message.p).to.be.a("object");
      expect(message.p["[0]"]).to.be.a("string");
      expect(m.get(true).p[0]).to.be.a("number");
    });
  });

  // TypeArrayStruct
  describe("@TypeArrayStruct", function() {
    it("Should return string message while map a non-structure data", function() {
     class N extends Reviser {
        @TypeInt32()
        p = 1;
      };

      class M extends Reviser {
        @TypeArrayStruct(N)
        n = [];
      }

      const m = new M();
      const message = m.map({ n: "123" });
      expect(message.n).to.be.a('string');
    });

    it("Should return null while map a structure data", function() {
     class N extends Reviser {
        @TypeInt32()
        p = 1;
      };

      class M extends Reviser {
        @TypeArrayStruct(N)
        n = [];
      }

      const m = new M();
      const message = m.map({ n: [] });
      expect(message).to.be.equal(null);
    });

    it("Should return message that point array item while map a illega array", function() {
     class N extends Reviser {
        @TypeInt32()
        p = 1;
      };

      class M extends Reviser {
        @TypeArrayStruct(N)
        n = [];
      }

      const m = new M();
      const message = m.map({
        n: [
          { p: "123" },
          { p: "123" }
        ]
      });
      expect(message.n).to.be.a("object");
      expect(message.n["[0]"]).to.be.a("object");
      expect(message.n["[0]"].p).to.be.a("string");
      expect(message.n["[1]"]).to.be.a("object");
      expect(message.n["[1]"].p).to.be.a("string");
    });

  });
});

/**
 * @date 2018-07-18
 * @author zhuoyihan
 * @description mocha测试方法
 */

var paramveri = require('./build');
let expect = require('chai').expect;

describe('参数验证测试', function() {
  it('参数无错误', function() {
    expect(paramveri.default.testAllRight()).to.be.deep.equal({
      model: {
        boo: true,
        double: 1.11,
        float: 1.1,
        num1: 10,
        num64: 64,
        numarr: [1, 2, 3, 4],
        obj: {num: 11},
        str: "test",
        unnum32: 100,
        unnum64: 6400,
        phone: 13560521917,
        mail: "295958897@qq.com",
      },
      errmsg: {}
    });
  });
  it('参数require错误', function() {
    expect(paramveri.default.testRequireWrong()).to.be.deep.equal({
      model: {
      },
      errmsg: {
        num1: {
          type: "require error",
          msg: "require"
        }
      }
    });
  });
  it('int32参数类型错误', function() {
    expect(paramveri.default.testInt32TypeWrong()).to.be.deep.equal({
      model: {
        num1: 1,
      },
      errmsg: {
        num1: {
          type: "type error",
          msg: "wrong"
        }
      }
    });
  });
  it('int64参数类型错误', function() {
    expect(paramveri.default.testInt64TypeWrong()).to.be.deep.equal({
      model: {
        num64: 1
      },
      errmsg: {
        num64: {
          type: "type error",
          msg: "wrong"
        }
      }
    });
  });
  it('unsign int32参数类型错误', function() {
    expect(paramveri.default.testUnInt32TypeWrong()).to.be.deep.equal({
      model: {
        unnum32: 1
      },
      errmsg: {
        unnum32: {
          type: "type error",
          msg: "wrong"
        }
      }
    });
  });
  it('unsign int64参数类型错误', function() {
    expect(paramveri.default.testUnInt64TypeWrong()).to.be.deep.equal({
      model: {
        unnum64: 1
      },
      errmsg: {
        unnum64: {
          type: "type error",
          msg: "wrong"
        }
      }
    });
  });
  it('double参数类型错误', function() {
    expect(paramveri.default.testDoubleTypeWrong()).to.be.deep.equal({
      model: {
        double: 1
      },
      errmsg: {
        double: {
          type: "type error",
          msg: "wrong"
        }
      }
    });
  });
  it('float参数类型错误', function() {
    expect(paramveri.default.testFloatTypeWrong()).to.be.deep.equal({
      model: {
        float: 1
      },
      errmsg: {
        float: {
          type: "type error",
          msg: "wrong"
        }
      }
    });
  });
  it('string参数类型错误', function() {
    expect(paramveri.default.testStringTypeWrong()).to.be.deep.equal({
      model: {
        str: "demo"
      },
      errmsg: {
        str: {
          type: "type error",
          msg: "wrong"
        }
      }
    });
  });
  it('array参数类型错误', function() {
    expect(paramveri.default.testArrayTypeWrong()).to.be.deep.equal({
      model: {
        numarr: []
      },
      errmsg: {
        numarr: {
          type: "type error",
          msg: "wrong"
        }
      }
    });
  });
  it('array参数元素类型错误', function() {
    expect(paramveri.default.testArraySubTypeWrong()).to.be.deep.equal({
      model: {
        numarr: []
      },
      errmsg: {
        numarr: [{
          type: "type error",
          msg: "wrong",
          index: "3"
        }]
      }
    });
  });
  it('boolean参数类型错误', function() {
    expect(paramveri.default.testBooleanTypeWrong()).to.be.deep.equal({
      model: {
        boo: false
      },
      errmsg: {
        boo: {
          type: "type error",
          msg: "wrong"
        }
      }
    });
  });
  it('struct参数类型错误', function() {
    expect(paramveri.default.testStructTypeWrong()).to.be.deep.equal({
      model: {
        obj: {}
      },
      errmsg: {
        obj: {
          type: "type error",
          msg: "wrong"
        }
      }
    });
  });
  it('struct参数格式错误', function() {
    expect(paramveri.default.testStructEntryTypeWrong()).to.be.deep.equal({
      model: {
        obj: {
          num: 1
        }
      },
      errmsg: {
        obj: {
          type: "type error",
          msg: "wrong",
          key: {
            num: {
              type: "type error",
              msg: "wrong",
            }
          }
        }
      }
    });
  });
  it('email参数类型错误', function() {
    expect(paramveri.default.testEmailTypeWrong()).to.be.deep.equal({
      model: {
        mail: ""
      },
      errmsg: {
        mail: {
          type: "type error",
          msg: "wrong"
        }
      }
    });
  });
  it('phone参数类型错误', function() {
    expect(paramveri.default.testPhoneTypeWrong()).to.be.deep.equal({
      model: {
        phone: null
      },
      errmsg: {
        phone: {
          type: "type error",
          msg: "wrong"
        }
      }
    });
  });
});

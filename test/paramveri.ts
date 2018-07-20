/**
 * @date 2018-07-18
 * @author zhuoyihan
 * @description 测试用例
 */

import paramVeri from "../src/script/index";

// 测试参数正确
function testAllRight() {
  class Test1ObjEntry extends paramVeri.Validator{

    @paramVeri.DecoInt32("wrong")
    num: number = 1;
  }
  class Test1Entry extends paramVeri.Validator{

    @paramVeri.DecoRequire("require")
    @paramVeri.DecoInt32("wrong")
    num1: number = 1;

    @paramVeri.DecoInt64("wrong")
    num64: number = 1;

    @paramVeri.DecoUnInt32("wrong")
    unnum32: number = 1;

    @paramVeri.DecoUnInt64("wrong")
    unnum64: number = 1;

    @paramVeri.DecoDouble("wrong")
    double: number = 1.0;

    @paramVeri.DecoFloat("wrong")
    float: number = 1.0;

    @paramVeri.DecoString("wrong")
    str: string = "demo";

    @paramVeri.DecoBoolean("wrong")
    boo: boolean = false;

    @paramVeri.DecoEmail("wrong")
    mail: string = "";

    @paramVeri.DecoArray(paramVeri.VERI_TYPE.INT32,"wrong")
    numarr: Array<any> = [];

    @paramVeri.DecoStruct("wrong")
    @paramVeri.StructType(Test1ObjEntry)
    obj: Test1ObjEntry = new Test1ObjEntry();

  }
  let data = {
    num1: 10,
    num64: 64,
    unnum32: 100,
    unnum64: 6400,
    double: 1.11,
    float: 1.1,
    str: "test",
    numarr: [1,2,3,4],
    boo: true,
    obj: {
      num: 11
    }
  };
  let obj = new Test1ObjEntry();
  obj.setModel(data.obj);
  let data1 = joinModel(data,{
    obj: obj
  })
  let entry = new Test1Entry();
  let errmsg = entry.setModel(data1);
  let model = entry.getModel();
  return {
    model: model,
    errmsg: errmsg
  };
}

// 测试require
function testRequireWrong() {
  class TestEntry extends paramVeri.Validator{
    @paramVeri.DecoRequire("require")
    num1: number;
  }
  let data = {
  };
  let entry = new TestEntry();
  let errmsg = entry.setModel(data);
  let model = entry.getModel();
  return {
    model: model,
    errmsg: errmsg
  };
}

// 测试int32参数类型错误
function testInt32TypeWrong() {
  class TestEntry extends paramVeri.Validator{
    @paramVeri.DecoInt32("wrong")
    num1: number = 1;
  }
  let data = {
    num1: "10",
  };
  let entry = new TestEntry();
  let errmsg = entry.setModel(data);
  let model = entry.getModel();
  return {
    model: model,
    errmsg: errmsg
  };
}

// 测试int64参数类型错误
function testInt64TypeWrong() {
  class TestEntry extends paramVeri.Validator{
    @paramVeri.DecoInt64("wrong")
    num64: number = 1;
  }
  let data = {
    num64: "64"
  };
  let entry = new TestEntry();
  let errmsg = entry.setModel(data);
  let model = entry.getModel();
  return {
    model: model,
    errmsg: errmsg
  };
}

// 测试unsign int32参数类型错误
function testUnInt32TypeWrong() {
  class TestEntry extends paramVeri.Validator{
    @paramVeri.DecoUnInt32("wrong")
    unnum32: number = 1;

  }
  let data = {
    unnum32: "100",
  };
  let entry = new TestEntry();
  let errmsg = entry.setModel(data);
  let model = entry.getModel();
  return {
    model: model,
    errmsg: errmsg
  };
}

// 测试unsign int64参数类型错误
function testUnInt64TypeWrong() {
  class TestEntry extends paramVeri.Validator{
    @paramVeri.DecoUnInt64("wrong")
    unnum64: number = 1;
  }
  let data = {
    unnum64: "6400"
  };
  let entry = new TestEntry();
  let errmsg = entry.setModel(data);
  let model = entry.getModel();
  return {
    model: model,
    errmsg: errmsg
  };
}

// 测试double参数类型错误
function testDoubleTypeWrong() {
  class TestEntry extends paramVeri.Validator{
    @paramVeri.DecoDouble("wrong")
    double: number = 1.0;
  }
  let data = {
    double: "1.11"
  };
  let entry = new TestEntry();
  let errmsg = entry.setModel(data);
  let model = entry.getModel();
  return {
    model: model,
    errmsg: errmsg
  };
}

// 测试float参数类型错误
function testFloatTypeWrong() {
  class TestEntry extends paramVeri.Validator{
    @paramVeri.DecoFloat("wrong")
    float: number = 1.0;
  }
  let data = {
    float: "1.1"
  };
  let entry = new TestEntry();
  let errmsg = entry.setModel(data);
  let model = entry.getModel();
  return {
    model: model,
    errmsg: errmsg
  };
}

// 测试string参数类型错误
function testStringTypeWrong() {
  class TestEntry extends paramVeri.Validator{
    @paramVeri.DecoString("wrong")
    str: string = "demo";
  }
  let data = {
    str: 1
  };
  let entry = new TestEntry();
  let errmsg = entry.setModel(data);
  let model = entry.getModel();
  return {
    model: model,
    errmsg: errmsg
  };
}

// 测试数组参数类型错误
function testArrayTypeWrong() {
  class TestEntry extends paramVeri.Validator{
    @paramVeri.DecoArray(paramVeri.VERI_TYPE.INT32,"wrong")
    numarr: Array<any> = [];
  }
  let data = {
    numarr: 1
  };
  let entry = new TestEntry();
  let errmsg = entry.setModel(data);
  let model = entry.getModel();
  return {
    model: model,
    errmsg: errmsg
  };
}

// 测试数组元素参数类型错误
function testArraySubTypeWrong() {
  class TestEntry extends paramVeri.Validator{
    @paramVeri.DecoArray(paramVeri.VERI_TYPE.INT32,"wrong")
    numarr: Array<any> = [];
  }
  let data = {
    numarr: [1,2,3,"4"]
  };
  let entry = new TestEntry();
  let errmsg = entry.setModel(data);
  let model = entry.getModel();
  return {
    model: model,
    errmsg: errmsg
  };
}

// 测试boolean参数类型错误
function testBooleanTypeWrong() {
  class TestEntry extends paramVeri.Validator{
    @paramVeri.DecoBoolean("wrong")
    boo: boolean = false;
  }
  let data = {
    boo: 2
  };
  let entry = new TestEntry();
  let errmsg = entry.setModel(data);
  let model = entry.getModel();
  return {
    model: model,
    errmsg: errmsg
  };
}

// 测试struct参数类型错误
function testStructTypeWrong() {
  class TestobjEntry extends paramVeri.Validator{
    @paramVeri.DecoInt32("wrong")
    num: number = 1;
  }
  class TestEntry extends paramVeri.Validator{
    @paramVeri.DecoStruct("wrong")
    @paramVeri.StructType(TestobjEntry)
    obj: TestobjEntry = new TestobjEntry();
  }
  let data = {
    obj: {
      num: 11
    }
  };
  let obj = new TestobjEntry();
  obj.setModel(data.obj);
  let data1 = joinModel(data,{
    obj: 1
  })
  let entry = new TestEntry();
  let errmsg = entry.setModel(data1);
  let model = entry.getModel();
  return {
    model: model,
    errmsg: errmsg
  };
}

// 测试struct参数对象类型错误
function testStructEntryTypeWrong() {
  class TestobjEntry extends paramVeri.Validator{
    @paramVeri.DecoInt32("wrong")
    num: number = 1;
  }
  class TestEntry extends paramVeri.Validator{
    @paramVeri.DecoStruct("wrong")
    @paramVeri.StructType(TestobjEntry)
    obj: TestobjEntry = new TestobjEntry();
  }
  let data = {
    obj: {
      num: 11
    }
  };
  let obj = new TestEntry();
  let data1 = joinModel(data,{
    obj: obj
  })
  let entry = new TestEntry();
  let errmsg = entry.setModel(data1);
  let model = entry.getModel();
  return {
    model: model,
    errmsg: errmsg
  };
}

// 测试email参数类型错误
function testEmailTypeWrong() {
  class TestEntry extends paramVeri.Validator{
    @paramVeri.DecoEmail("wrong")
    mail: string = "";
  }
  let data = {
    mail: "123456789"
  };
  let entry = new TestEntry();
  let errmsg = entry.setModel(data);
  let model = entry.getModel();
  return {
    model: model,
    errmsg: errmsg
  };
}

// 合并两json
function joinModel(data1,data2) {
  let tarData = {};
  for(let key in data1){
    tarData[key] = data1[key];
  }
  for(let key in data2){
    tarData[key] = data2[key];
  }
  return tarData;
}

export default {
  testAllRight,
  testRequireWrong,
  testInt32TypeWrong,
  testInt64TypeWrong,
  testUnInt32TypeWrong,
  testUnInt64TypeWrong,
  testDoubleTypeWrong,
  testFloatTypeWrong,
  testStringTypeWrong,
  testArrayTypeWrong,
  testArraySubTypeWrong,
  testBooleanTypeWrong,
  testStructTypeWrong,
  testStructEntryTypeWrong,
  testEmailTypeWrong
}

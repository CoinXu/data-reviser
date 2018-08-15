/**
 * @date 2018-08-15
 * @author zhuoyihan
 * @description 测试用实体类,babel编译
 */

import paramVeri from "../script/index";
import Test1ObjEntry from "./Test1ObjEntry";
import Test2ObjEntry from "./Test2ObjEntry";

// 测试用实体类
class Test1Entry extends paramVeri.Validator{


  @paramVeri.DecoInt32("wrong")
  @paramVeri.DecoRequire("require")
  num1 = 1;

  @paramVeri.DecoInt64("wrong")
  @paramVeri.DecoRequire()
  num64;

  @paramVeri.DecoUnInt32("wrong")
  unnum32;

  @paramVeri.DecoUnInt64("wrong")
  unnum64;

  @paramVeri.DecoDouble("wrong")
  double;

  @paramVeri.DecoFloat("wrong")
  float;

  @paramVeri.DecoMaxLength(4,"length wrong")
  @paramVeri.DecoMinLength(2,"length wrong")
  @paramVeri.DecoString("wrong")
  str;

  @paramVeri.DecoBoolean("wrong")
  boo;

  @paramVeri.DecoEmail("wrong")
  mail;

  @paramVeri.DecoPhone("wrong")
  phone;

  @paramVeri.DecoArray(paramVeri.VERI_TYPE.STRUCT,"wrong")
  @paramVeri.StructType(Test2ObjEntry)
  numarr = [];

  @paramVeri.DecoStruct("wrong")
  @paramVeri.StructType(Test1ObjEntry)
  obj = new Test1ObjEntry();

}

class Test1ExtendEntry extends Test1Entry{
  @paramVeri.DecoInt32()
  @paramVeri.DecoRequire()
  numExtend;

  @paramVeri.DecoInt32()
  numExtend1;
}

export default {
  Test1Entry,
  Test1ExtendEntry
};


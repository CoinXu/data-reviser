/**
 * @date 2018-07-17
 * @author zhuoyihan
 * @description 测试用实体类
 */

import paramVeri from "../script/index";
import Test1ObjEntry from "./Test1ObjEntry";

// 测试用实体类
class Test1Entry extends paramVeri.Validator{


  @paramVeri.DecoInt32("wrong")
  @paramVeri.DecoRequire("require")
  num1: number = 1;

  @paramVeri.DecoInt64("wrong")
  @paramVeri.DecoRequire()
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

  @paramVeri.DecoArray(paramVeri.VERI_TYPE.INT32,"wrong",3)
  numarr: Array<any> = [];

  @paramVeri.DecoStruct("wrong")
  @paramVeri.StructType(Test1ObjEntry)
  obj: Test1ObjEntry = new Test1ObjEntry();

}

export default Test1Entry;


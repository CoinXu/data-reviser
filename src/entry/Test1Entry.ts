/**
 * @date 2018-07-17
 * @author zhuoyihan
 * @description 测试用实体类
 */

import paramVeri from "../script/index";
import {VERI_TYPE} from "../script/staticData";
import Test1ObjEntry from "./Test1ObjEntry";

// 测试用实体类
class Test1Entry extends paramVeri.Validator{

  @paramVeri.DecoRequire("require")
  @paramVeri.DecoInt32("num is wrong")
  num1: number = 1;

  @paramVeri.DecoInt64("发生错误")
  num64: number = 1;

  @paramVeri.DecoUnInt32("error",)
  unnum32: number = 1;

  @paramVeri.DecoUnInt64("")
  unnum64: number = 1;

  @paramVeri.DecoDouble("double is require",)
  double: number = 1.0;

  @paramVeri.DecoFloat("发生错误")
  float: number = 1.0;

  @paramVeri.DecoString("")
  str: string = "demo";

  @paramVeri.DecoBoolean("error")
  boo: boolean = false;

  @paramVeri.DecoArray(VERI_TYPE.INT32,"")
  numarr: Array<any> = [];

  @paramVeri.DecoStruct("error")
  @paramVeri.StructType(Test1ObjEntry)
  obj: Test1ObjEntry = new Test1ObjEntry();

}

export default Test1Entry;





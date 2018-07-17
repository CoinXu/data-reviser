/**
 * @date 2018-07-17
 * @author zhuoyihan
 * @description 测试用实体类
 */

import {Validator,structType} from "../script/index";
import {
  decoInt32,
  decoDouble,
  decoFloat,
  decoInt64,
  decoString,
  decoStruct,
  decoUnInt32,
  decoUnInt64,
  decoArray,
  decoBoolean
} from "../impl/Decorators/index";
import {VERI_TYPE} from "../script/staticData";
import Test1ObjEntry from "./Test1ObjEntry";

// 测试用实体类
class Test1Entry extends Validator{

  @decoInt32("num is require",true)
  num1: number = 1;

  @decoInt64("发生错误",true)
  num64: number = 1;

  @decoUnInt32("error", true)
  unnum32: number = 1;

  @decoUnInt64("",true)
  unnum64: number = 1;

  @decoDouble("double is require", true)
  double: number = 1.0;

  @decoFloat("发生错误", true)
  float: number = 1.0;

  @decoString("",true)
  str: string = "demo";

  @decoBoolean("error",false)
  boo: boolean = false;

  @decoArray(VERI_TYPE.INT32,"",true)
  numarr: Array<any> = [];

  @decoStruct("error",true)
  @structType(Test1ObjEntry)
  obj: Test1ObjEntry = new Test1ObjEntry();

}

export default Test1Entry;





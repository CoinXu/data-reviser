/**
 * @date 2018-07-17
 * @author zhuoyihan
 * @description 测试用实体类
 */

import {Validator,decorator,structType} from "../script/index";
import {VERI_TYPE} from "../script/staticData";
import Test1ObjEntry from "./Test1ObjEntry";

// 测试用实体类
class Test1Entry extends Validator{

  @decorator(VERI_TYPE.INT32)
  num1: number = 1;

  @decorator(VERI_TYPE.INT64)
  num64: number = 1;

  @decorator(VERI_TYPE.UNINT32)
  unnum32: number = 1;

  @decorator(VERI_TYPE.UNINT64)
  unnum64: number = 1;

  @decorator(VERI_TYPE.DOUBLE)
  double: number = 1.0;

  @decorator(VERI_TYPE.FLOAT)
  float: number = 1.0;

  @decorator(VERI_TYPE.STRING)
  str: string = "demo";

  @decorator(VERI_TYPE.ARRAY,VERI_TYPE.INT32)
  numarr: Array<any> = [];

  @decorator(VERI_TYPE.STRUCT)
  @structType(Test1ObjEntry)
  obj: Test1ObjEntry = new Test1ObjEntry();

}

export default Test1Entry;





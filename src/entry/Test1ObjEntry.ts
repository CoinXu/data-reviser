/**
 * @date 2018-7-17
 * @author zhuoyihan
 * @description 测试用，参数类型为struct时，struct对应实体类
 */

import paramVeri from "../script/index";
import Test2ObjEntry from "./Test2ObjEntry";

// 测试用实体类
class Test1ObjEntry extends paramVeri.Validator{

  @paramVeri.DecoStruct("wrong")
  @paramVeri.StructType(Test2ObjEntry)
  obj1: object = {};
}

export default Test1ObjEntry;





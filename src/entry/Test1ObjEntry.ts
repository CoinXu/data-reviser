/**
 * @date 2018-7-17
 * @author zhuoyihan
 * @description 测试用，参数类型为struct时，struct对应实体类
 */

import paramVeri from "../script/index";

// 测试用实体类
class Test1ObjEntry extends paramVeri.Validator{

  @paramVeri.DecoInt32("num is require")
  num: number = 1;
}

export default Test1ObjEntry;





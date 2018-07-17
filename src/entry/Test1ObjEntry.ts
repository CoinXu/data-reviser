/**
 * @date 2018-7-17
 * @author zhuoyihan
 * @description 测试用，参数类型为struct时，struct对应实体类
 */

import {Validator,decorator} from "../script/index";
import {VERI_TYPE} from "../script/staticData";

// 测试用实体类
class Test1ObjEntry extends Validator{

  @decorator(VERI_TYPE.INT32)
  num: number = 1;


}

export default Test1ObjEntry;





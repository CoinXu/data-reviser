import {Validator,Decorator} from "../script/index";
import {__VERI_TYPE__} from "../script/StaticData";

class test1ObjEntry extends Validator{

  @Decorator(__VERI_TYPE__.INT32)
  num: number = 1;


}

export default test1ObjEntry;





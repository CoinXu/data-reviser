import {Validator,Decorator,structType} from "../script/index";
import {__VERI_TYPE__} from "../script/StaticData";
import test1ObjEntry from "./test1ObjEntry";

class test1Entry extends Validator{

  @Decorator(__VERI_TYPE__.INT32)
  num1: number = 1;

  @Decorator(__VERI_TYPE__.INT64)
  num64: number = 1;

  @Decorator(__VERI_TYPE__.UNINT32)
  unnum32: number = 1;

  @Decorator(__VERI_TYPE__.UNINT64)
  unnum64: number = 1;

  @Decorator(__VERI_TYPE__.DOUBLE)
  double: number = 1.0;

  @Decorator(__VERI_TYPE__.FLOAT)
  float: number = 1.0;

  @Decorator(__VERI_TYPE__.STRING)
  str: string = "demo";

  @Decorator(__VERI_TYPE__.ARRAY,__VERI_TYPE__.INT32)
  numarr: Array<any> = [];

  @Decorator(__VERI_TYPE__.STRUCT)
  @structType(test1ObjEntry)
  obj: test1ObjEntry = new test1ObjEntry();

}

export default test1Entry;





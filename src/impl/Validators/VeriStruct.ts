import {__ERROR_TYPE__,__CLASS_TYPE_} from "../../script/staticData";
import {IVeri} from "../../inter/decorator";

export function VeriStruct(key: string, value: any): IVeri {
  if(!(value instanceof this[__CLASS_TYPE_][key])){
    //验证对象是否正确
    return {
      value: false,
      error: {error: __ERROR_TYPE__.type_error, key: key}
    };
  }else{
    return {
      value: true
    };
  }
}


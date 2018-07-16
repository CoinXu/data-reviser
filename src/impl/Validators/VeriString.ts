import {__ERROR_TYPE__} from "../../script/staticData";
import {IVeri} from "../../inter/decorator";

export function VeriString(key: string, value: any):IVeri {
  if(typeof value !== "string"){
    //验证是否为number
    return {
      value: false,
      error: {error: __ERROR_TYPE__.type_error, key: key}
    };
  }else{
    //条件满足
    return {
      value: true
    };
  }
}

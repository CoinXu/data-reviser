import {__ERROR_TYPE__} from "../../script/StaticData";
import {IVeri} from "../../inter/decorator";

export function VeriDouble(key: string, value: any):IVeri {
  if(typeof value !== "number"){
    //验证是否为number
    return {
      value: false,
      error: {error: __ERROR_TYPE__.type_error, key: key}
    };
  }else{
    if(value > Math.pow(2,1024) || value < -Math.pow(2,1024)){
      //验证指数位是否超过double范围
      return {
        value: false,
        error: {error: __ERROR_TYPE__.size_error, key: key}
      };
    }else{
      return {
        value: true
      };
    }
  }
}

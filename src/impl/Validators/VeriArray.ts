import {__ERROR_TYPE__} from "../../script/StaticData";
import {IVeri} from "../../inter/decorator";


export function VeriArray(key: string, value: any, veriFun: Function):IVeri {
  if(!(value instanceof Array)){
    //验证是否为数组
    return {
      value: false,
      error: {error: __ERROR_TYPE__.type_error, key: key}
    };
  }else{
    this[key] = [];
    let ve;
    for (let i in value) {
      ve = veriFun.call(this, key, value[i]);
      if (!ve.value) {
        ve.error.index = i;
        return {
          value: false,
          error: ve.error
        };
      }
    }
    return {
      value: true
    };
  }
}

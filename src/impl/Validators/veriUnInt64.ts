/**
 * @date 2017-07-17
 * @author zhuoyihan
 * @description unsign int64验证器
 */

import {ERROR_TYPE} from "../../script/staticData";
import {IVeri} from "../../inter/decorator";

/**
 * unsign int64类型验证
 *
 * @param {string} key - 键值
 * @param {any} value - 值
 * @returns {IVeri}
 */
export function veriUnInt64(key: string, value: any):IVeri {
  if(typeof value !== "number"){
    //验证是否为number
    return {
      value: false,
      error: {error: ERROR_TYPE.TYPE_ERROR, key: key}
    };
  }else{
    if(value > (9223372036854775807 + 9223372036854775808) || value < 0){
      //验证是否超过unsign int64范围
      return {
        value: false,
        error: {error: ERROR_TYPE.SIZE_ERROR, key: key}
      };
    }else{
      if(value % 1 !== 0){
        //存在小数
        return {
          value: false,
          error: {error: ERROR_TYPE.TYPE_ERROR, key: key}
        };
      }else {
        //条件满足
        return {
          value: true
        };
      }
    }
  }
}

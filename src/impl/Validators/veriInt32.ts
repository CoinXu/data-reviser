/**
 * @date 2017-07-17
 * @author zhuoyihan
 * @description int32验证器
 */

import {ERROR_TYPE} from "../../script/staticData";
import {IVeri} from "../../inter/decorator";

/**
 * int32类型验证
 *
 * @param {string} key - 键值
 * @param {any} value - 值
 * @returns {IVeri}
 */
export function veriInt32(key: string, value: any):IVeri {
  if(typeof value !== "number"){
    //验证是否为number
    return {
      value: false,
      error: {error: ERROR_TYPE.TYPE_ERROR, key: key}
    };
  }else{
    if(value > 2147483647 || value < -2147483648){
      //验证是否超过int32范围
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

/**
 * @date 2017-07-17
 * @author zhuoyihan
 * @description float验证器
 */

import {ERROR_TYPE} from "../../script/staticData";
import {IVeri} from "../../inter/decorator";

/**
 * float类型验证
 *
 * @param {string} key - 键值
 * @param {any} value - 值
 * @returns {IVeri}
 */
export function veriFloat(key: string, value: any):IVeri {
  if(typeof value !== "number"){
    //验证是否为number
    return {
      value: false,
      error: {error: ERROR_TYPE.TYPE_ERROR, key: key}
    };
  }else{
    if(value > Math.pow(2,128) || value < -Math.pow(2,128)){
      //验证指数位是否超过float范围
      return {
        value: false,
        error: {error: ERROR_TYPE.SIZE_ERROR, key: key}
      };
    }else{
      return {
        value: true
      };
    }
  }
}

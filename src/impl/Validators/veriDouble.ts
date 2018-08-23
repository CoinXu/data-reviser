/**
 * @date 2017-07-17
 * @author zhuoyihan
 * @description double验证器
 */

import {ERROR_TYPE} from "@/constants";
import {IVeri} from "../../inter/decorator";

/**
 * double类型验证
 *
 * @param {string} key - 键值
 * @param {any} value - 值
 * @returns {IVeri}
 */
export function veriDouble(key: string, value: any):IVeri {
  if(typeof value !== "number"){
    //验证是否为number
    return {
      value: false,
      error: ERROR_TYPE.TYPE_ERROR
    };
  }else{
    if(value > Math.pow(2,1024) || value < -Math.pow(2,1024)){
      //验证指数位是否超过double范围
      return {
        value: false,
        error: ERROR_TYPE.SIZE_ERROR
      };
    }else{
      return {
        value: true
      };
    }
  }
}

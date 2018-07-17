/**
 * @date 2017-07-17
 * @author zhuoyihan
 * @description string验证器
 */

import {ERROR_TYPE} from "../../script/staticData";
import {IVeri} from "../../inter/decorator";

/**
 * string类型验证
 *
 * @param {string} key - 键值
 * @param {any} value - 值
 * @returns {IVeri}
 */
export function veriString(key: string, value: any):IVeri {
  if(typeof value !== "string"){
    //验证是否为number
    return {
      value: false,
      error: {error: ERROR_TYPE.TYPE_ERROR, key: key}
    };
  }else{
    //条件满足
    return {
      value: true
    };
  }
}

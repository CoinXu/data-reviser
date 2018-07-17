/**
 * @date 2017-07-17
 * @author zhuoyihan
 * @description struct验证器
 */

import {ERROR_TYPE,CLASS_TYPE} from "../../script/staticData";
import {IVeri} from "../../inter/decorator";

/**
 * struct类型验证
 *
 * @param {string} key - 键值
 * @param {any} value - 值
 * @returns {IVeri}
 */
export function veriStruct(key: string, value: any): IVeri {
  if(!(value instanceof this[CLASS_TYPE][key])){
    //验证对象是否正确
    return {
      value: false,
      error: {error: ERROR_TYPE.TYPE_ERROR, key: key}
    };
  }else{
    return {
      value: true
    };
  }
}


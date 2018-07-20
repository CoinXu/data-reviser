/**
 * @date 2017-07-20
 * @author zhuoyihan
 * @description email验证器
 */

import {ERROR_TYPE} from "../../script/staticData";
import {IVeri} from "../../inter/decorator";

/**
 * email类型验证
 *
 * @param {string} key - 键值
 * @param {any} value - 值
 * @returns {IVeri}
 */
export function veriEmail(key: string, value: any):IVeri {
  if(typeof value !== "string"){
    //验证是否为string
    return {
      value: false,
      error: ERROR_TYPE.TYPE_ERROR
    };
  }else{
    let reg=/^([\w-_]+(?:\.[\w-_]+)*)@((?:[a-z0-9]+(?:-[a-zA-Z0-9]+)*)+\.[a-z]{2,6})$/;
    let result = reg.test(value);
    if(result){
      //验证指数位是否匹配正则表达式
      return {
        value: true
      };
    }else{
      return {
        value: false,
        error: ERROR_TYPE.TYPE_ERROR
      };
    }
  }
}

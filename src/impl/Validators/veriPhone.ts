/**
 * @date 2017-07-20
 * @author zhuoyihan
 * @description phone验证器
 */

import {ERROR_TYPE} from "@/constants";
import {IVeri} from "../../inter/decorator";

/**
 * phone类型验证
 *
 * @param {string} key - 键值
 * @param {any} value - 值
 * @returns {IVeri}
 */
export function veriPhone(key: string, value: any):IVeri {
  let reg=/^1[3-9](\d{9})$/;
  try {
    let result = reg.test(value);
    if (result) {
      //验证是否匹配正则表达式
      return {
        value: true
      };
    } else {
      return {
        value: false,
        error: ERROR_TYPE.TYPE_ERROR
      };
    }
  }catch (e) {
    return {
      value: false,
      error: ERROR_TYPE.TYPE_ERROR
    };
  }
}

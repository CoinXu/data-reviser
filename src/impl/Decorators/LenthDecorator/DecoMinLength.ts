/**
 * @date 2017-07-20
 * @author zhuoyihan
 * @description 验证参数长度MIN
 */

import {initValidator} from "../index";
import {dealVeri} from "../index";
import {ERROR_TYPE} from "@/constants";

/**
 * 验证参数长度MIN
 *
 * @param {number} size - 参数最小长度
 * @param {string} errMsg - 自定义错误信息，默认为Null
 * @returns {(target, key) => {}}
 */
export function DecoMinLength(size: number,errMsg: string = null) {
  return function (target: object, key: string) {
    const container = initValidator.call(this,target,key);

    container.push(function (key: string, value: any) {
      try{
        if(value.length >= size){
          return true;
        }else {
          return dealVeri.call(this, {value: false, error: ERROR_TYPE.LENGTH_MIN_ERRO}, key, value, errMsg);
        }
      }catch (e) {
        return dealVeri.call(this, {value: false, error: ERROR_TYPE.TYPE_ERROR}, key, value, errMsg);
      }
    });

    return;
  }
}


/**
 * @date 2017-07-17
 * @author zhuoyihan
 * @description array验证器
 */

import {ERROR_TYPE} from "../../script/staticData";
import {IVeri, IVeriIndex} from "../../inter/decorator";


/**
 * array类型验证
 *
 * @param {string} key - 键值
 * @param {any} value - 值
 * @param {Function} veriFun - 验证数组值使用的验证器
 * @returns {IVeri}
 */
export function veriArray(key: string, value: any, veriFun: Function):IVeri {
  if(!(value instanceof Array)){
    //验证是否为数组
    return {
      value: false,
      error: ERROR_TYPE.TYPE_ERROR
    };
  }else{
    this[key] = [];
    let ve: IVeri;
    let errIndex = new Array<IVeriIndex>();
    for (let i = 0; i < value.length; i++) {
      ve = veriFun.call(this, key, value[i]);
      if (!ve.value) {
        errIndex.push({
          index: i,
          error: ve.error
        });
      }
    }
    if(errIndex.length){
      return {
        value: false,
        index: errIndex
      };
    }else {
      return {
        value: true
      };
    }
  }
}

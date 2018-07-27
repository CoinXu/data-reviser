/**
 * @date 2017-07-17
 * @author zhuoyihan
 * @description struct验证器
 */

import {ERROR_TYPE,CLASS_TYPE} from "../../script/staticData";
import {IVeri, IVeriIndex} from "../../inter/decorator";

/**
 * struct类型验证
 *
 * @param {string} key - 键值
 * @param {any} value - 值
 * @returns {IVeri}
 */
export function veriStruct(key: string, value: any): IVeri {
  if(typeof value === "object" && value !== null && !(value instanceof Array)){
    let obj = new this[CLASS_TYPE][key]();
    let error = obj.setModel(value);
    let model = obj.getModel();
    if(Object.keys(error).length !== 0){
      if(typeof this[key] !== 'undefined' && !(this[key] instanceof Array)) {
        this[key] = model;
      }
      return {
        value: false,
        key: error,
        error: ERROR_TYPE.TYPE_ERROR
      }
    }else{
      return {
        value: true
      };
    }
  }else{
    return {
      value: false,
      error: ERROR_TYPE.TYPE_ERROR
    };
  }
  // if(!(value instanceof this[CLASS_TYPE][key])){
  //   //验证对象是否正确
  //   return {
  //     value: false,
  //     error: ERROR_TYPE.TYPE_ERROR
  //   };
  // }else{
  //   return {
  //     value: true
  //   };
  // }
}


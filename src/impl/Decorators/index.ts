/**
 * @date 2017-07-17
 * @author zhuoyihan
 * @description 装饰器入口
 */


import {IVeri} from "../../inter/decorator";
import {decoInt32} from "./decoInt32";
import {decoDouble} from "./decoDouble";
import {decoFloat} from "./decoFloat";
import {decoInt64} from "./decoInt64";
import {decoString} from "./decoString";
import {decoStruct} from "./decoStruct";
import {decoUnInt32} from "./decoUnInt32";
import {decoUnInt64} from "./decoUnInt64";
import {decoArray} from "./decoArray";
import {decoBoolean} from "./decoBoolean";
import {D_NAME, ERROR_TYPE} from "../../script/staticData";

export {
  decoInt32,
  decoDouble,
  decoFloat,
  decoInt64,
  decoString,
  decoStruct,
  decoUnInt32,
  decoUnInt64,
  decoArray,
  decoBoolean
}

/**
 * 处理验证器返回结果
 *
 * @param {IVeri} ve - 验证器返回结果
 * @param {string} key - 键值
 * @param {any} value - 值
 */
export function dealVeri(ve: IVeri,key: string,value: any, errMsg: string) {
  if (ve.value) {
    this[key] = value;
  }else{
    this.errMsg[key] = {
      type: ve.error,
      msg: errMsg
    };
    if(ve.index){
      this.errMsg[key]["index"] = ve.index;
    }
  }
  this.model[key] = this[key];
}

/**
 * 设置参数验证器
 *
 * @param {object} target - 实体类原型
 * @param {string} key - 键值
 * @param {boolean} require - 参数是否必须
 * @param {string} errMsg - 自定义错误信息
 * @param {Function} veriFun - 调用函数
 * @param {boolean} isArray - 是否数组类型，默认为false
 * @param {Function} callArray - 若为数组类型，传入数组项所用验证器,默认为空
 */
export function setValidator(target: object, key: string, require: boolean, errMsg: string, veriFun: Function, isArray: boolean = false, callArray: Function = null) {
  const map = target[D_NAME] || (target[D_NAME] = {});
  target["initModel"] = target["initModel"] || {};
  target["initModel"][key] = require;

  map[key] = function (key: string, value: any) {
    if(require && typeof value === "undefined"){
      dealVeri.call(this,{value: false, error: ERROR_TYPE.REQUIRE_ERROR},key,value, errMsg);
    }else {
      if(typeof value !== "undefined") {
        let ve: IVeri;
        if(isArray){
          ve = veriFun.call(this, key, value, callArray);
        }else {
          ve = veriFun.call(this, key, value);
        }
        dealVeri.call(this, ve, key, value, errMsg);
      }
    }
  }
}

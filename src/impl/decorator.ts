/**
 * @date 2017-07-17
 * @author zhuoyihan
 * @description 验证类型装饰器
 */

import {D_NAME, ERROR_TYPE, VERI_TYPE} from "../script/staticData";
import {
  veriInt32,
  veriStruct,
  veriArray,
  veriDouble,
  veriFloat,
  veriInt64,
  veriString,
  veriUnInt32,
  veriUnInt64
} from "./Validators/index";

/**
 * 验证类型装饰器
 *
 * @param {string} type - 参数类型
 * @param {string} detailType - 若type为array, 则制定array内值类型
 * @returns {(target, key) => {}}
 */
export function decorator(type: string, detailType: string = null) {
  return function (target, key) {
    const map = target[D_NAME] || (target[D_NAME] = {});

    let veriFun;
    switch (type){
      case VERI_TYPE.ARRAY:
        veriFun = getVeriFun(detailType);
        break;
      default:
        veriFun = getVeriFun(type);
        break;
    }

    if(type === VERI_TYPE.ARRAY){
      map[key] = function (key, value) {
        let ve = veriArray.call(this,key,value,veriFun);
        dealVeri.call(this,ve,key,value);
      }
    }else {
      map[key] = function (key, value) {
        let ve = veriFun.call(this, key, value);
        dealVeri.call(this,ve,key,value);
      }
    }

    return;
  }
}

/**
 * 获取验证器
 *
 * @param {string} type - 参数类型
 * @returns {Function}
 */
function getVeriFun(type: string) {
  let veriFun;
  switch (type){
    case VERI_TYPE.INT32:
      veriFun = veriInt32;
      break;
    case VERI_TYPE.STRUCT:
      veriFun = veriStruct;
      break;
    case VERI_TYPE.DOUBLE:
      veriFun = veriDouble;
      break;
    case VERI_TYPE.FLOAT:
      veriFun = veriFloat;
      break;
    case VERI_TYPE.INT64:
      veriFun = veriInt64;
      break;
    case VERI_TYPE.STRING:
      veriFun = veriString;
      break;
    case VERI_TYPE.UNINT32:
      veriFun = veriUnInt32;
      break;
    case VERI_TYPE.UNINT64:
      veriFun = veriUnInt64;
      break;
    default:
      veriFun = function (key,value) {
        return false;
      }
      break;
  }
  return veriFun;
}

/**
 * 处理验证器返回结果
 *
 * @param {IVeri} ve - 验证器返回结果
 * @param {string} key - 键值
 * @param {any} value - 值
 */
function dealVeri(ve,key,value) {
  if (ve.value) {
    this[key] = value;
  }
  this.model[key] = this[key];
  if(ve.error) {
    this.errmsg.push(ve.error);
  }
}

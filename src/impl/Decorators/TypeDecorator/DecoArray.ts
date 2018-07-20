/**
 * @date 2017-07-17
 * @author zhuoyihan
 * @description 装饰array
 */

import {veriArray} from "../../Validators/index";
import {setValidator} from "../index";
import {
  veriDouble,
  veriFloat,
  veriInt32,
  veriInt64,
  veriString,
  veriStruct,
  veriUnInt32,
  veriUnInt64,
  veriBoolean
} from "../../Validators/index";
import {VERI_TYPE} from "../../../script/staticData";

/**
 * int32装饰器
 *
 * @param {string} arrayType - 数组项类型
 * @param {string} errMsg - 错误提示
 * @param {number} level - n维数组，默认为1
 * @returns {(target, key) => {}}
 */
export function DecoArray(arrayType: string,errMsg: string = null, level: number = 1) {
  return function (target: object, key: string) {
    let veriFun;
    switch (arrayType) {
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
      case VERI_TYPE.BOOLEAN:
        veriFun = veriBoolean;
        break;
      default:
        veriFun = function (key, value) {
          return false;
        }
        break;
    }
    setValidator.call(this, target, key, errMsg, veriArray, true, veriFun, level);
    return;
  }
}


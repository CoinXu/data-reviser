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
  veriBoolean,
  veriEmail
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
export function DecoArray(arrayType: Function,errMsg: string = null, level: number = 1) {
  return function (target: object, key: string) {
    setValidator.call(this, target, key, errMsg, veriArray, true, arrayType, level);
    return;
  }
}


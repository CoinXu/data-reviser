/**
 * @date 2017-07-17
 * @author zhuoyihan
 * @description 装饰int64
 */

import {veriInt64} from "../Validators/index";
import {setValidator} from "./index";

/**
 * int32装饰器
 *
 * @param {string} errMsg - 错误提示
 * @param {string} require - 是否必要，默认为否
 * @returns {(target, key) => {}}
 */
export function decoInt64(errMsg: string = null,require: boolean = false) {
  return function (target: object, key: string) {
    setValidator.call(this, target, key, require, errMsg, veriInt64);

    return;
  }
}


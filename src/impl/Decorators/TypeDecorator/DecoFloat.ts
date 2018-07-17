/**
 * @date 2017-07-17
 * @author zhuoyihan
 * @description 装饰float
 */

import {veriFloat} from "../../Validators/index";
import {setValidator} from "../index";

/**
 * int32装饰器
 *
 * @param {string} errMsg - 错误提示
 * @returns {(target, key) => {}}
 */
export function DecoFloat(errMsg: string = null) {
  return function (target: object, key: string) {
    setValidator.call(this, target, key, errMsg, veriFloat);

    return;
  }
}


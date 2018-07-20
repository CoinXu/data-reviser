/**
 * @date 2017-07-20
 * @author zhuoyihan
 * @description 装饰phone
 */

import {veriPhone} from "../../Validators/index";
import {setValidator} from "../index";

/**
 * phone装饰器
 *
 * @param {string} errMsg - 错误提示
 * @returns {(target, key) => {}}
 */
export function DecoPhone(errMsg: string = null) {
  return function (target: object, key: string) {
    setValidator.call(this, target, key, errMsg, veriPhone);

    return;
  }
}


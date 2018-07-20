/**
 * @date 2017-07-20
 * @author zhuoyihan
 * @description 装饰email
 */

import {veriEmail} from "../../Validators/index";
import {setValidator} from "../index";

/**
 * email装饰器
 *
 * @param {string} errMsg - 错误提示
 * @returns {(target, key) => {}}
 */
export function DecoEmail(errMsg: string = null) {
  return function (target: object, key: string) {
    setValidator.call(this, target, key, errMsg, veriEmail);

    return;
  }
}


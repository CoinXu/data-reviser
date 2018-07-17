/**
 * @date 2017-07-17
 * @author zhuoyihan
 * @description 设置参数为必须
 */

import {initValidator} from "./index";
import {dealVeri} from "./index";
import {ERROR_TYPE} from "../../script/staticData";

/**
 * 设置参数为必须
 *
 * @param {string} errMsg - 自定义错误信息，默认为Null
 * @returns {(target, key) => {}}
 */
export function DecoRequire(errMsg: string = null) {
  return function (target: object, key: string) {
    const container = initValidator.call(this,target,key);
    target["initModel"][key] = true;

    container.push(function (key, value) {
      if(typeof value === "undefined"){
        dealVeri.call(this, {value: false, error: ERROR_TYPE.REQUIRE_ERROR}, key, value, errMsg);
      }
    });

    return;
  }
}

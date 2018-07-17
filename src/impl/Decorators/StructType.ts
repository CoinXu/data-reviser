/**
 * @date 2017-07-17
 * @author zhuoyihan
 * @description 设置struct类型装饰器
 */

import {CLASS_TYPE} from "../../script/staticData";

/**
 * 设置struct类型
 *
 * @param {object} classType - struct类型对应的实体类
 * @returns {(target, key) => {}}
 */
export function StructType(classType: object) {
  return function (target, key) {
    const objectType = target[CLASS_TYPE] || (target[CLASS_TYPE] = {});

    objectType[key] = classType;

    return;
  }
}


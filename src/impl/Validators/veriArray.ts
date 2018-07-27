/**
 * @date 2017-07-17
 * @author zhuoyihan
 * @description array验证器
 */

import {ERROR_TYPE, VERI_TYPE} from "../../script/staticData";
import {IVeri, IVeriIndex} from "../../inter/decorator";


/**
 * array类型验证
 *
 * @param {string} key - 键值
 * @param {any} value - 值
 * @param {Function} veriFun - 验证数组值使用的验证器
 * @param {number} level - 验证数组维度, 默认为1
 * @returns {IVeri}
 */
export function veriArray(key: string, value: any, veriFun: Function, level: number = 1):IVeri {
  if(!(value instanceof Array)){
    //验证是否为数组
    return {
      value: false,
      error: ERROR_TYPE.TYPE_ERROR
    };
  }else{
    if(typeof this[key] !== 'undefined') {
      this[key] = [];
    }
    let ve: IVeri;
    let errIndex = readArrayData.call(this,value, level, 1, key, veriFun, "");
    // for (let i = 0; i < value.length; i++) {
    //   ve = veriFun.call(this, key, value[i]);
    //   if (!ve.value) {
    //     errIndex.push({
    //       index: i,
    //       error: ve.error
    //     });
    //   }
    // }

    if(errIndex.length){
      return {
        value: false,
        index: errIndex
      };
    }else {
      return {
        value: true
      };
    }
  }
}

/**
 * 递归读取数组
 *
 * @param {Array<any>} data - 数组
 * @param {number} level - 数组维度
 * @param {number} nowLevel - 当前递归读取第几维
 * @param {string} key - 键值
 * @param {Function} veriFun - 验证数组根项类型
 * @param {string} indexPath - 数组下标集合
 * @returns {IVeriIndex[]}
 */
function readArrayData(data: Array<any>, level: number, nowLevel: number, key: string, veriFun: Function, indexPath: string) {
  let errIndex = new Array<IVeriIndex>();
  let ve: IVeri;

  for(var i = 0; i < data.length; i++){
    if(data[i] instanceof Array){
      if(level <= nowLevel){
        errIndex.push({
          index: setErrorIndex(indexPath, i),
          error: ERROR_TYPE.TYPE_ERROR
        });
      }else{
        errIndex = errIndex.concat(readArrayData.call(this,data[i], level, nowLevel + 1, key, veriFun, setErrorIndex(indexPath, i)));
      }
    }else{
      if(level <= nowLevel){
        ve = veriFun.call(this, key, data[i]);
        if (!ve.value) {
          errIndex.push({
            index: setErrorIndex(indexPath, i),
            error: ve.error,
            key: ve.key
          });
        }else{
          if(typeof this[key] !== 'undefined' && this[key] instanceof Array) {
            this[key].push(data[i]);
          }
        }
      }else {
        errIndex.push({
          index: setErrorIndex(indexPath, i),
          error: ERROR_TYPE.TYPE_ERROR
        });
      }
    }
  }

  return errIndex;
}

/**
 * 将数组下标添加进路径
 *
 * @param {string} indexPath - 已有路径
 * @param {number} index - 添加的下标
 * @returns {string}
 */
function setErrorIndex(indexPath: string, index: number) {
  if(indexPath === ""){
    return indexPath + index;
  }else{
    return indexPath + "-" + index;
  }
}

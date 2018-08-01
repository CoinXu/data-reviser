/**
 * @date 2017-07-17
 * @author zhuoyihan
 * @description array验证器
 */

import {CLASS_TYPE, ERROR_TYPE, VERI_TYPE} from "../../script/staticData";
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
    let defaultData;
    if(typeof this[key] !== 'undefined') {
      if(this[key] instanceof Array && this[key].length > 0) {
        defaultData = this[key][0];
      }
    }
    let ve: IVeri;
    let tagArray = [];
    let errIndex = readArrayData.call(this,value, tagArray, level, 1, key, veriFun, "", defaultData);
    if(typeof this[key] !== 'undefined') {
      this[key] = tagArray;
    }

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
 * @param {any} defaultData - 数组默认值
 * @returns {IVeriIndex[]}
 */
function readArrayData(data: Array<any>, tagArray: Array<any>, level: number, nowLevel: number, key: string, veriFun: Function, indexPath: string, defaultData: any) {
  let errIndex = new Array<IVeriIndex>();
  let ve: IVeri;

  for(var i = 0; i < data.length; i++){
    if(data[i] instanceof Array){
      if(level <= nowLevel){
        setDefault.call(this, tagArray, defaultData, veriFun, key);
        errIndex.push({
          index: setErrorIndex(indexPath, i),
          error: ERROR_TYPE.TYPE_ERROR
        });
      }else{
        tagArray.push([]);
        errIndex = errIndex.concat(readArrayData.call(this,data[i], tagArray[tagArray.length - 1], level, nowLevel + 1, key, veriFun, setErrorIndex(indexPath, i), defaultData));
      }
    }else{
      if(level <= nowLevel){
        ve = veriFun.call(this, key, data[i]);
        if (!ve.value) {
          setDefault.call(this, tagArray, defaultData, veriFun, key, data[i]);
          errIndex.push({
            index: setErrorIndex(indexPath, i),
            error: ve.error,
            key: ve.key
          });
        }else{
          tagArray.push(data[i]);
        }
      }else {
        data[i] = [];
        let tag = data[i];
        for(var p = nowLevel; p < level; p++){
          tag.push([]);
          tag = tag[0];
        }
        setDefault.call(this, tagArray, defaultData, veriFun, key);
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

function setDefault(tag: Array<any>, defultData: any, veriFun: Function, key: string, data: any = null) {
  if(veriFun === VERI_TYPE.STRUCT){
    let entry = new this[CLASS_TYPE][key]();
    entry.setModel(data);
    tag.push(entry.getModel());
  }else{
    if(typeof defultData !== 'undefined'){
      tag.push(defultData);
    }
  }
}

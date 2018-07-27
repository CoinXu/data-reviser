/**
 * @date 2017-07-17
 * @author zhuoyihan
 * @description 装饰器入口
 */


import {IVeri} from "../../inter/decorator";
import {IParamWrongMsg} from "../../inter/decorator";
import {D_NAME} from "../../script/staticData";

/**
 * 处理验证器返回结果
 *
 * @param {IVeri} ve - 验证器返回结果
 * @param {string} key - 键值
 * @param {any} value - 值
 */
export function dealVeri(ve: IVeri,key: string,value: any, errMsg: string) {
  if (ve.value) {
    return true;
  }else{
    let err: IParamWrongMsg;
    if(ve.index){
      this.errMsg[key] = [];
      for (var i = 0; i < ve.index.length; i++){
        if(typeof ve.index[i].key !== "undefined"){
          err = {
            type: ve.index[i].error,
            msg: errMsg,
            index: ve.index[i].index,
            key: ve.index[i].key
          }
        }else {
          err = {
            type: ve.index[i].error,
            msg: errMsg,
            index: ve.index[i].index
          }
        }
        this.errMsg[key].push(err);
      }
    }else{
      if(typeof ve.key !== "undefined"){
        err = {
          type: ve.error,
          msg: errMsg,
          key: ve.key
        };
      }else {
        err = {
          type: ve.error,
          msg: errMsg
        };
      }
      this.errMsg[key] = err;
    }
    return false;
  }
}

/**
 * 所有装饰器初始化步骤，获取验证函数容器
 *
 * @param {object} target - 实体类原型
 * @param {string} key - 键值
 * @returns {Array} container - 验证参数方法所在容器
 */
export function initValidator(target: object, key: string) {
  const map = target[D_NAME] || (target[D_NAME] = {});
  const initModel = target["initModel"] || (target["initModel"] = {});
  if(!initModel[key]) {
    initModel[key] = false;
  }
  const container = map[key] || (map[key] = []);
  return container;
}

/**
 * 设置参数类型验证器
 *
 * @param {object} target - 实体类原型
 * @param {string} key - 键值
 * @param {string} errMsg - 自定义错误信息
 * @param {Function} veriFun - 调用函数
 * @param {boolean} isArray - 是否数组类型，默认为false
 * @param {Function} callArray - 若为数组类型，传入数组项所用验证器,默认为空
 * @param {number} level - 若为数组类型，传入数组维度,默认为空
 */
export function setValidator(
  target: object,
  key: string,
  errMsg: string,
  veriFun: Function,
  isArray: boolean = false,
  callArray: Function = null,
  level: number = null) {
  const container = initValidator.call(this,target, key);

  container.push(function (key: string, value: any) {
    let ve: IVeri;
    if(typeof value !== "undefined"){
      if(isArray){
        ve = veriFun.call(this, key, value, callArray, level);
      }else {
        ve = veriFun.call(this, key, value);
      }
      return dealVeri.call(this, ve, key, value, errMsg);
    }else{
      //排除undefined干扰，将未传值当成某种类型判断
      return false;
    }
  });
}

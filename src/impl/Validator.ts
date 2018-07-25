/**
 * @date 2017-07-17
 * @author zhuoyihan
 * @description 实体类父类
 */

import {D_NAME} from "../script/staticData"
import {Validator as IValidator} from "../inter/decorator"

/*
 * 实体类父类
 */
export class Validator implements IValidator{
  initModel: object;
  model: object = {};
  errMsg: object;

  constructor(){

  }

  /**
   * 设置model，获取错误信息
   *
   * @param {object} model - 参数模型
   * @returns {any}
   */
  public setModel(model) {
    this.errMsg = {};
    if(this.initModel) {
      let container;
      let isRight: boolean = true;
      for (let key in this.initModel) {
        try {
          container = this[D_NAME][key];
          isRight = true;
          for(let i: number = 0; i < container.length; i++) {
            isRight = isRight && this[D_NAME][key][i].call(this, key, model[key]);
          }
          if(isRight) {
            this[key] = model[key];
          }
          if(typeof this[key] !== "undefined") {
            if(typeof this[key] === "object" && this[key] !== null && typeof this[key].setModel === "function"){
              this[key].setModel({});
              this[key] = this[key].getModel();
            }

            this.model[key] = this[key];
          }
        } catch (e) {
          console.log(e);
        }
      }
    }
    return this.errMsg;
  }


  /**
   * 获取model
   *
   * @returns {{}}
   */
  public getModel() {
    // let retModel = {};
    // for(let key in this.model){
    //   if(typeof this.model[key] === "object" && this.model[key] !== null){
    //     if(this.model[key] instanceof Array){
    //       retModel[key] = this.getArrayModel(this.model[key]);
    //     }else {
    //       try {
    //         retModel[key] = this.model[key].getModel();
    //       } catch (e) {
    //         console.log(e);
    //       }
    //     }
    //   }else{
    //     if(typeof this.model[key] !== "undefined") {
    //       retModel[key] = this.model[key];
    //     }
    //   }
    // }
    return this.model;
  }

  /**
   * 递归读取数组
   *
   * @param {Array} data - 要递归读取的数组
   * @returns {any[]}
   */
  private getArrayModel(data: Array<any>){
    let retData = [];
    for(let i = 0; i < data.length; i++){
      if(typeof data[i] === "object"){
        if(data[i] instanceof Array){
          retData.push(this.getArrayModel(data[i]));
        }else{
          retData.push(data[i].getModel());
        }
      }else{
        retData.push(data[i]);
      }
    }
    return retData;
  }
}

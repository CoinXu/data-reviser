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
  model: object;
  errMsg: object;

  /**
   * 设置model，获取错误信息
   *
   * @param {object} model - 参数模型
   * @returns {any}
   */
  public setModel(model) {
    this.errMsg = {};
    if(this.initModel) {
      this.model = model;
      for (let key in this.initModel) {
        try {
          this[D_NAME][key].call(this, key, model[key]);
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
    let retModel = {};
    for(let key in this.model){
      if(typeof this.model[key] === "object"){
        if(this.model[key] instanceof Array){
          if(this.model[key].length > 0 && typeof this.model[key][0] === "object"){
            retModel[key] = [];
            for(let i in this.model[key]){
              retModel[key][i] = this.model[key][i].getModel();
            }
          }else{
            retModel[key] = this.model[key];
          }
        }else {
          try {
            retModel[key] = this.model[key].getModel();
          } catch (e) {
            console.log(e);
          }
        }
      }else{
        retModel[key] = this.model[key];
      }
    }
    return retModel;
  }
}

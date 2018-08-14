/**
 * @date 2017-07-17
 * @author zhuoyihan
 * @description 实体类父类
 */

import {D_NAME, VALID_MEMBER} from "../script/staticData"
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
      this.checkMember.call(this, this['__proto__'].constructor, model);
    }
    return this.errMsg;
  }

  /**
   * 验证参数
   * @param {constructor} tar - this['__proto__'].constructor
   * @param {object} model - 验证参数模型
   */
  private checkMember(tar, model) {
    let container;
    let isRight: boolean = true;
    for (let key in tar[VALID_MEMBER]) {
      try {
        container = this[D_NAME][key];
        isRight = true;
        for(let i: number = 0; i < container.length; i++) {
          isRight = isRight
            && this[D_NAME][key][i].call(this, key, model[key]);
        }
        if(isRight) {
          this[key] = model[key];
        }
        if(typeof this[key] !== "undefined") {
          this.model[key] = this[key];
        }
      } catch (e) {
        console.log(e);
      }
    }
    if (tar['__proto__'] !== Validator) {
      this.checkMember.call(this, tar['__proto__'], model);
    }
  }


  /**
   * 获取model
   *
   * @returns {{}}
   */
  public getModel() {
    return this.model;
  }
}

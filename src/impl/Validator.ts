/**
 * @date 2017-07-17
 * @author zhuoyihan
 * @description 实体类父类
 */

import { D_NAME, VALID_MEMBER, VALIDATOR_PRIVATE_PROPERTY_NAME } from "@/constants"
import {
  Validator as IValidator,
  ValidatorDecorator,
  ValidatorDecoratorHooks,
  ValidatorMessage
} from "@inter/decorator"

const hasOwnProperty = Object.prototype.hasOwnProperty;

/*
 * 实体类父类
 */
export class Validator<T = {}> implements IValidator<T> {
  private initModel: any;
  private model: any = {};
  private errMsg: any;
  private maps: T;

  public constructor() {
    this.maps = <T>{};
  }

  /**
   * 设置model，获取错误信息
   *
   * @param {object} model - 参数模型
   * @returns {any}
   */
  public setModel(model): any {
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
  private checkMember(tar, model): void {
    let container;
    let isRight: boolean = true;
    for (let key in tar[VALID_MEMBER]) {
      try {
        container = this[D_NAME][key];
        isRight = true;
        for(let i: number = 0; i < container.length; i++) {
          isRight = isRight && this[D_NAME][key][i].call(this, key, model[key]);
        }
        if(isRight) {
          this.model[key] = model[key];
        } else {
          if(typeof this[key] !== "undefined") {
            this.model[key] = this[key];
          }
        }
      } catch (e) {
        console.log(e);
      }
    }
    if (tar['__proto__'] !== Validator) {
      this.checkMember.call(this, tar['__proto__'], model);
    }
  }

  private static isEmpty(object: any): boolean {
    return Object.keys(object).length < 1;
  }


  /**
   * 获取model
   *
   * @returns {{}}
   */
  public getModel(): any {
    return this.model;
  }

  private getDecoratorHooks(): ValidatorDecoratorHooks<T> {
    const hooks: any = this[VALIDATOR_PRIVATE_PROPERTY_NAME] ||
      (this[VALIDATOR_PRIVATE_PROPERTY_NAME] = {});

    return (hooks) as ValidatorDecoratorHooks<T>
  }

  public get(): T {
    // compatible getModel
    const model: any = { ...this.model };

    const hooks: ValidatorDecoratorHooks<T> = this.getDecoratorHooks();
    const messages: ValidatorMessage<T> = {};
    const maps: T = this.maps;
    const values: any = Object.keys(hooks).reduce((object, name) => {
      object[name] = this[name];
      return object;
    }, {});
    const data: any = { ...values, ...(maps as any) };

    for (const propKey in hooks) {
      if (!hasOwnProperty.call(hooks, propKey) || !hasOwnProperty.call(data, propKey)) {
        continue;
      }

      for (const decorator of hooks[propKey]) {
        decorator(maps, propKey, data[propKey]);
      }
    }

    return { ...model, ...(maps as any) } as T;
  }

  public set(data: any): ValidatorMessage<T> {
    return this.map(data);
  }

  public map(data: any): ValidatorMessage<T> {
    const maps: T = this.maps;
    const hooks: ValidatorDecoratorHooks<T> = this.getDecoratorHooks();
    const messages: ValidatorMessage<T> = {};

    // # compatible setModel method
    const setModelReturns: any = this.setModel(data);
    let hasMessage = !Validator.isEmpty(setModelReturns);

    // copy setModel returns to messages.
    if (hasMessage) {
      Object.keys(setModelReturns).forEach(function(key: string) {
        messages[key] = setModelReturns[key];
      });
    }

    // # execute new standard decorators.
    for (const propKey in hooks) {
      if (!hasOwnProperty.call(hooks, propKey) || !hasOwnProperty.call(data, propKey)) {
        continue;
      }

      for (const decorator of hooks[propKey]) {
        let m = decorator(maps, propKey, data[propKey]);
        if (m !== null) {
          messages[propKey] = m;
          hasMessage = true;
        }
      }
    }

    return hasMessage ? messages : null;
  }
}

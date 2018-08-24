/**
 * @date 2017-07-17
 * @author zhuoyihan
 * @description 接口类
 */

/**
 * Define Validator message
 */
type ValidatorErrorMessage<T> = {
  [P in keyof T]?: string
};

export type ValidatorMessage<T> = ValidatorErrorMessage<T> | null;

export type ValidatorDecoratorReturns<T> = string | null;

/**
 * Define class Validator
 */
export interface Validator<T> {
  setModel(model: any): any;
  getModel(): any;
  get(): T;
  set(model: any): ValidatorMessage<T>;
  map(model: any): ValidatorMessage<T>;
};

export interface PropertyDecorator {
  (target: any, key: string, descriptor?: any): any
};

/**
 * Define Validator Decorator
 */
export interface ValidatorDecorator<T> {
  (target: any, key: string, value: any): ValidatorDecoratorReturns<T>;
};

export type ValidatorDecoratorHooks<T> = {
  [P in keyof T]?: ValidatorDecorator<T>[];
};

/**
 * 验证器数组时，验证器接口index字段数组类型
 *
 * @param {string} error - 验证结果
 * @param {string} index - 对应数组下标, 若维度大于1，以-分割
 * @param {IVeri} key - 若为object情况下，返回错误数据对象
 */
export interface IVeriIndex {
  error: string,
  index: string,
  key?: any
}

/**
 * 验证器接口
 *
 * @param {boolean} value - 验证结果正确与否
 * @param {string} error - 若不为数组或object情况下，value为false情况下，返回错误信息
 * @param {array} index - 若为数组情况下，返回错误数据index
 * @param {IVeri} key - 若为object情况下，返回错误数据对象
 */
export interface IVeri {
  value: boolean,
  error?: string,
  index?: IVeriIndex[],
  key?: any
}

/**
 * 错误信息
 *
 * @param {string} type - 错误类型
 * @param {string} msg - 用户自定义错误信息
 * @param {string} index - 若为数组情况下，返回错误数据index, 若数组维度大于1， 以-分割
 * @param {IParamWrongMsg} key - 若为object情况下，返回错误数据对象
 */
export interface IParamWrongMsg {
  type: string,
  msg?: string,
  index?: string,
  key?: any
}


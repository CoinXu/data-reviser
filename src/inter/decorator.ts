/**
 * @date 2017-07-17
 * @author zhuoyihan
 * @description 接口类
 */

/*
 * entry基类
 */
export interface Validator {
  initModel: object;
  model: object;
  errMsg: object;
  setModel(model: object);
  getModel();
}

/**
 * 验证器数组时，验证器接口index字段数组类型
 *
 * @param {string} error - 验证结果
 * @param {number} index - 对应数组下标
 */
export interface IVeriIndex {
  error: string,
  index: number
}

/**
 * 验证器接口
 *
 * @param {boolean} value - 验证结果正确与否
 * @param {string} error - 若不为数组情况下，value为false情况下，返回错误信息
 * @param {array} index - 若为数组情况下，返回错误数据index
 */
export interface IVeri {
  value: boolean,
  error?: string,
  index?: Array<IVeriIndex>
}

/**
 * 错误信息
 *
 * @param {string} type - 错误类型
 * @param {string} msg - 用户自定义错误信息
 * @param {array} index - 若为数组情况下，返回错误数据index
 */
export interface IParamWrongMsg {
  type: string,
  msg?: string,
  index?: number
}

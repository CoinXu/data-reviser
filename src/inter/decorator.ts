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
 * 验证器接口
 * @param {boolean} value - 验证结果正确与否
 * @param {string} error - value为false情况下，返回错误信息
 * @param {number} index - 若为数组情况下，返回错误数据index
 */
export interface IVeri {
  value: boolean,
  error?: string,
  index?: number
}

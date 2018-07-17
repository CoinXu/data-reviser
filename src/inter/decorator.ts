/**
 * @date 2017-07-17
 * @author zhuoyihan
 * @description 接口类
 */

/*
 * entry基类
 */
export interface Validator {
  model: object;
  errmsg: Array<object>;
  setModel(model: object);
  getModel();
}

/*
 * 验证器接口
 */
export interface IVeri {
  value: boolean,
  error?: object
}

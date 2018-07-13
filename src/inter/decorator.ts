//entry基类
export interface Validator {
  model: object;
  errmsg: Array<object>;
  setModel(model: object);
  getModel();
}

//验证器接口
export interface IVeri {
  value: boolean,
  error?: object
}

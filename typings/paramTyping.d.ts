interface IParamWrongMsg {
  type: string,
  msg?: string,
  index?: number
}

interface Validator {
  setModel(model: object): IParamWrongMsg;
  getModel(): object;
}

interface Iparamveri {
  DecoArray(arrayType:string, errMsg:string, level: number),
  DecoBoolean(errMsg: string),
  DecoDouble(errMsg: string),
  DecoFloat(errMsg: string),
  DecoInt32(errMsg: string),
  DecoInt64(errMsg: string),
  DecoStruct(errMsg: string),
  DecoString(errMsg: string),
  DecoUnInt32(errMsg: string),
  DecoUnInt64(errMsg: string),
  StructType(entryClass: object),
  Validator: Validator,
  ERROR_TYPE: {
    TYPE_ERROR,
    SIZE_ERROR,
    REQUIRE_ERROR
  },
  VERI_TYPE: {
    INT32,
    INT64,
    DOUBLE,
    FLOAT,
    STRING,
    STRUCT,
    UNINT32,
    UNINT64,
    BOOLEAN,
    ARRAY,
    EMAIL
  },
  DecoRequire(errMsg:string),
  DecoEmail(errMsg:string)
}

declare var paramVeri: Iparamveri;

declare module 'params-veri' {
  export = paramVeri;
}

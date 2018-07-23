declare module "param-veri"{
  interface IParamWrongMsg {
    type: string,
    msg?: string,
    index?: number
  }

  interface Validator {
    new(): Validator;
    setModel(model: object): IParamWrongMsg;
    getModel(): object;
  }

  interface VERI_TYPE {
    INT64: Function,
    INT32: Function,
    DOUBLE: Function,
    FLOAT: Function,
    STRING: Function,
    STRUCT: Function,
    UNINT32: Function,
    UNINT64: Function,
    BOOLEAN: Function,
    EMAIL: Function,
    PHONE: Function,
  }

  interface ERROR_TYPE {
    TYPE_ERROR: string,
    SIZE_ERROR: string,
    REQUIRE_ERROR: string,
    LENGTH_MIN_ERRO: string,
    LENGTH_MAX_ERRO: string,
  }

  interface Iparamveri {
    DecoArray(arrayType: string, errMsg?: string, level?: number),
    DecoBoolean(errMsg?: string),
    DecoDouble(errMsg?: string),
    DecoFloat(errMsg?: string),
    DecoInt32(errMsg?: string),
    DecoInt64(errMsg?: string),
    DecoStruct(errMsg?: string),
    DecoString(errMsg?: string),
    DecoUnInt32(errMsg?: string),
    DecoUnInt64(errMsg?: string),
    StructType(entryClass: object),
    Validator: Validator,
    ERROR_TYPE: ERROR_TYPE,
    VERI_TYPE: VERI_TYPE,
    DecoRequire(errMsg?: string),
    DecoEmail(errMsg?: string),
    DecoPhone(errMsg?: string),
    DecoMinLength(size: number,errMsg?: string),
    DecoMaxLength(size: number,errMsg?: string)
  }

  let paramVeri: Iparamveri;

  export default paramVeri;
}

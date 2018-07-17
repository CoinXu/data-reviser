/**
 * @date 2017-07-17
 * @author zhuoyihan
 * @description 参数验证入口
 */


import {StructType} from "../impl/Decorators/StructType";
import {Validator} from "../impl/Validator";
import {VERI_TYPE,ERROR_TYPE} from "./staticData";
import {DecoRequire} from "../impl/Decorators/DecoRequire";
import {DecoArray,DecoBoolean,DecoDouble,DecoFloat,DecoInt32,DecoInt64,DecoStruct,DecoString,DecoUnInt32,DecoUnInt64} from "../impl/Decorators/index";

/*
 * 入口
 */
export default {
  DecoArray,
  DecoBoolean,
  DecoDouble,
  DecoFloat,
  DecoInt32,
  DecoInt64,
  DecoStruct,
  DecoString,
  DecoUnInt32,
  DecoUnInt64,
  StructType,
  Validator,
  ERROR_TYPE,
  VERI_TYPE,
  DecoRequire
}

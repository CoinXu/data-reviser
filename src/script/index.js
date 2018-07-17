/**
 * @date 2017-07-17
 * @author zhuoyihan
 * @description 参数验证入口
 */


import {structType} from "../impl/structType";
import {Validator} from "../impl/Validator";
import {VERI_TYPE} from "./staticData";
import {decoArray,decoBoolean,decoDouble,decoFloat,decoInt32,decoInt64,decoStruct,decoString,decoUnInt32,decoUnInt64} from "../impl/Decorators/index";

/*
 * 入口
 */
export {
  decoArray,
  decoBoolean,
  decoDouble,
  decoFloat,
  decoInt32,
  decoInt64,
  decoStruct,
  decoString,
  decoUnInt32,
  decoUnInt64,
  structType,
  Validator,
  VERI_TYPE
}

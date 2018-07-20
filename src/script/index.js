/**
 * @date 2017-07-17
 * @author zhuoyihan
 * @description 参数验证入口
 */


import {StructType} from "../impl/Decorators/StructType";
import {Validator} from "../impl/Validator";
import {VERI_TYPE,ERROR_TYPE} from "./staticData";
import {DecoInt32} from "../impl/Decorators/TypeDecorator/DecoInt32";
import {DecoArray} from "../impl/Decorators/TypeDecorator/DecoArray";
import {DecoRequire} from "../impl/Decorators/DecoRequire";
import {DecoBoolean} from "../impl/Decorators/TypeDecorator/DecoBoolean";
import {DecoDouble} from "../impl/Decorators/TypeDecorator/DecoDouble";
import {DecoFloat} from "../impl/Decorators/TypeDecorator/DecoFloat";
import {DecoString} from "../impl/Decorators/TypeDecorator/DecoString";
import {DecoInt64} from "../impl/Decorators/TypeDecorator/DecoInt64";
import {DecoStruct} from "../impl/Decorators/TypeDecorator/DecoStruct";
import {DecoUnInt32} from "../impl/Decorators/TypeDecorator/DecoUnInt32";
import {DecoUnInt64} from "../impl/Decorators/TypeDecorator/DecoUnInt64";
import {DecoEmail} from "../impl/Decorators/TypeDecorator/DecoEmail";

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
  DecoRequire,
  DecoEmail
}

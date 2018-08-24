/**
 * @date 2018-08-23
 * @author xuchuanping
 * @description Export all
 */

// # validator decorators
import { Validator } from "./impl/Validator";
import { StructType } from "./impl/Decorators/StructType";
import { VERI_TYPE, ERROR_TYPE } from "./constants";
import { DecoInt32 } from "./impl/Decorators/TypeDecorator/DecoInt32";
import { DecoArray } from "./impl/Decorators/TypeDecorator/DecoArray";
import { DecoRequire } from "./impl/Decorators/DecoRequire";
import { DecoBoolean } from "./impl/Decorators/TypeDecorator/DecoBoolean";
import { DecoDouble } from "./impl/Decorators/TypeDecorator/DecoDouble";
import { DecoFloat } from "./impl/Decorators/TypeDecorator/DecoFloat";
import { DecoString } from "./impl/Decorators/TypeDecorator/DecoString";
import { DecoInt64 } from "./impl/Decorators/TypeDecorator/DecoInt64";
import { DecoStruct } from "./impl/Decorators/TypeDecorator/DecoStruct";
import { DecoUnInt32 } from "./impl/Decorators/TypeDecorator/DecoUnInt32";
import { DecoUnInt64 } from "./impl/Decorators/TypeDecorator/DecoUnInt64";
import { DecoEmail } from "./impl/Decorators/TypeDecorator/DecoEmail";
import { DecoPhone } from "./impl/Decorators/TypeDecorator/DecoPhone";
import { DecoMinLength } from "./impl/Decorators/LenthDecorator/DecoMinLength";
import { DecoMaxLength } from "./impl/Decorators/LenthDecorator/DecoMaxLength";

// translate decorators
import ToDouble from "@/impl/translators/to-double";
import ToFloat from "@/impl/translators/to-float";
import ToInt32 from "@/impl/translators/to-int32";
import ToInt64 from "@/impl/translators/to-int64";
import ToString from "@/impl/translators/to-string";

// 兼容之前版本导出方式
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
  DecoEmail,
  DecoPhone,
  DecoMinLength,
  DecoMaxLength
};

export {
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
  DecoEmail,
  DecoPhone,
  DecoMinLength,
  DecoMaxLength,
  ToDouble,
  ToFloat,
  ToInt32,
  ToInt64,
  ToString
};

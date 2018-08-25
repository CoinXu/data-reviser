/**
 * @date 2018-08-23
 * @author xuchuanping
 * @description Export all
 */

// basic
import { Validator } from "@impl/validator";

// translators
import ToBoolean from "@impl/translators/to-boolean";
import ToDouble from "@impl/translators/to-double";
import ToFloat from "@impl/translators/to-float";
import ToInt32 from "@impl/translators/to-int32";
import ToInt64 from "@impl/translators/to-int64";
import ToString from "@impl/translators/to-string";
import ToUnInt32 from "@impl/translators/to-uint32";
import ToUnInt64 from "@impl/translators/to-uint64";

// types
import TypeBoolean from "@impl/types/type-boolean";
import TypeDouble from "@impl/types/type-double";
import TypeEmail from "@impl/types/type-email";
import TypeFloat from "@impl/types/type-float";
import TypeInt32 from "@impl/types/type-int32";
import TypeInt64 from "@impl/types/type-int64";
import TypePhone from "@impl/types/type-phone";
import TypeString from "@impl/types/type-string";
import TypeStruct from "@impl/types/type-structure";
import TypeUnInt32 from "@impl/types/type-uint32";
import TypeUnInt64 from "@impl/types/type-uint64";

// # validators
import DecoMaxLength from "@impl/validators/max-length";
import DecoMinLength from "@impl/validators/min-length";
import DecoRequired from "@impl/validators/required";

// 兼容之前版本导出方式
export default {
  Validator,
  DecoMaxLength,
  DecoMinLength,
  DecoRequire: DecoRequired,

  DecoBoolean: TypeBoolean,
  DecoDouble: TypeDouble,
  DecoEmail: TypeEmail,
  DecoFloat: TypeFloat,
  DecoInt32: TypeInt32,
  DecoInt64: TypeInt64,
  DecoPhone: TypePhone,
  DecoString: TypeString,
  DecoStruct: TypeStruct,
  DecoUnInt32: TypeUnInt32,
  DecoUnInt64: TypeUnInt64
};

export {
  Validator,
  DecoMaxLength,
  DecoMinLength,
  DecoRequired,

  ToBoolean,
  ToDouble,
  ToFloat,
  ToInt32,
  ToInt64,
  ToString,
  ToUnInt32,
  ToUnInt64,

  TypeBoolean,
  TypeDouble,
  TypeEmail,
  TypeFloat,
  TypeInt32,
  TypeInt64,
  TypePhone,
  TypeString,
  TypeStruct,
  TypeUnInt32,
  TypeUnInt64,

  TypeBoolean as DecoBoolean,
  TypeDouble as DecoDouble,
  TypeEmail as DecoEmail,
  TypeFloat as DecoFloat,
  TypeInt32 as DecoInt32,
  TypeInt64 as DecoInt64,
  TypePhone as DecoPhone,
  TypeString as DecoString,
  TypeStruct as DecoStruct,
  TypeUnInt32 as DecoUnInt32,
  TypeUnInt64 as DecoUnInt64
};

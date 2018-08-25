/**
 * @date 2017-07-17
 * @author zhuoyihan
 * @description 静态变量
 */

import {
  veriInt32,
  veriInt64,
  veriDouble,
  veriFloat,
  veriStruct,
  veriString,
  veriUnInt32,
  veriUnInt64,
  veriBoolean,
  veriEmail,
  veriPhone,
} from "@impl/Validators/index";

export const D_NAME = "_validator_";
export const CLASS_TYPE = "_class_";
export const VALID_MEMBER = '_member_';

/*
 * 错误类型
 */
export const ERROR_TYPE = {
  TYPE_ERROR: "type error",
  SIZE_ERROR: "size error",
  REQUIRE_ERROR: "require error",
  LENGTH_MIN_ERRO: "length less than min",
  LENGTH_MAX_ERRO: "length more than max",
};

/*
 * 参数类型
 */
export const VERI_TYPE = {
  INT32: veriInt32,
  INT64: veriInt64,
  DOUBLE: veriDouble,
  FLOAT: veriFloat,
  STRING: veriString,
  STRUCT: veriStruct,
  UNINT32: veriUnInt32,
  UNINT64: veriUnInt64,
  BOOLEAN: veriBoolean,
  EMAIL: veriEmail,
  PHONE: veriPhone
};

export const VALIDATOR_PRIVATE_PROPERTY_NAME = '__validator_private_property_name__';

export const IEEE754Limits = {
  Double: {
    Max: 1.7976931348623157e+308,
    Min: -1.7976931348623157e+308
  },
  Float: {
    Max: 3.402823669209385e+38,
    Min: -3.402823669209385e+38
  },
  Int32: {
    Max: 2147483647,
    Min: -2147483647
  },
  UnInt32: {
    Max: 4294967295,
    Min: 0
  },
  Int64: {
    Max: 9223372036854775807,
    Min: -9223372036854775807
  },
  UnInt64: {
    Max: 18446744073709551615,
    Min: 0
  }
};

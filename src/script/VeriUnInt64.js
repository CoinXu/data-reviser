"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StaticData_1 = require("./StaticData");
function VeriUnInt64(isArray, callback) {
    return function (target, key) {
        var map = target[StaticData_1.__D_NAME__] || (target[StaticData_1.__D_NAME__] = {});
        var arrayTag = target[StaticData_1.__Array_tag__] || (target[StaticData_1.__Array_tag__] = {});
        arrayTag[key] = isArray;
        map[key] = function (key, value, index) {
            if (typeof value !== "number") {
                //验证是否为number
                if (callback instanceof Function) {
                    callback(StaticData_1.__ERROR_TYPE__.type_error);
                }
                else {
                    console.log("error: 参数类型为=>" + typeof value);
                }
            }
            else {
                if (value > (9223372036854775807 + 9223372036854775808) || value < 0) {
                    //验证是否超过unsign int64范围
                    if (callback instanceof Function) {
                        callback(StaticData_1.__ERROR_TYPE__.size_error);
                    }
                    else {
                        console.log("error: 参数大小超出Unsign Int64");
                    }
                }
                else {
                    if (value % 1 !== 0) {
                        //存在小数
                        if (callback instanceof Function) {
                            callback(StaticData_1.__ERROR_TYPE__.type_error);
                        }
                        else {
                            console.log("error: 参数为浮点类型");
                        }
                    }
                    else {
                        //条件满足
                        if (index === -1) {
                            this[key] = value;
                        }
                        else {
                            this[key][index] = value;
                        }
                    }
                }
            }
        };
        return;
    };
}
exports.default = VeriUnInt64;

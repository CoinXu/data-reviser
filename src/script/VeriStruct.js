"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StaticData_1 = require("./StaticData");
function VeriStruct(entry, isArray, callback) {
    return function (target, key) {
        var map = target[StaticData_1.__D_NAME__] || (target[StaticData_1.__D_NAME__] = {});
        var arrayTag = target[StaticData_1.__Array_tag__] || (target[StaticData_1.__Array_tag__] = {});
        arrayTag[key] = isArray;
        map[key] = function (key, value, index) {
            // let classType: string = value.constructor.toString().split(" ")[1].split("(")[0];
            // console.log(value)
            if (!(value instanceof entry)) {
                //验证对象是否正确
                if (typeof value !== "object") {
                    if (callback instanceof Function) {
                        callback(StaticData_1.__ERROR_TYPE__.type_error);
                    }
                    else {
                        console.log("error: 参数类型为=>" + typeof value);
                    }
                }
                else {
                    if (callback instanceof Function) {
                        callback(StaticData_1.__ERROR_TYPE__.type_error);
                    }
                    else {
                        console.log("error: 对象类型为=>" + entry);
                    }
                }
            }
            else {
                if (index === -1) {
                    this[key] = value;
                }
                else {
                    this[key][index] = value;
                }
            }
            if (index === -1) {
                this.model[key] = this[key];
            }
            else {
                this.model[key][index] = this[key][index];
            }
        };
        return;
    };
}
exports.default = VeriStruct;

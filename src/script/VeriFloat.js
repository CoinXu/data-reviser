"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StaticData_1 = require("./StaticData");
function VeriFloat(isArray, callback) {
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
                if (value > Math.pow(2, 128) || value < -Math.pow(2, 128)) {
                    //验证指数位是否超过float范围
                    if (callback instanceof Function) {
                        callback(StaticData_1.__ERROR_TYPE__.size_error);
                    }
                    else {
                        console.log("error: 参数大小超出Float");
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
exports.default = VeriFloat;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StaticData_1 = require("./StaticData");
var Validator = /** @class */ (function () {
    function Validator() {
    }
    // private model: T | null;
    // public constructor(value?: T) {
    //   this.model = value;
    // }
    Validator.prototype.setModel = function (model) {
        for (var key in model) {
            try {
                if (this[StaticData_1.__Array_tag__][key]) {
                    if (model[key] instanceof Array) {
                        for (var i in model[key]) {
                            this[StaticData_1.__D_NAME__][key].call(this, key, model[key][i], i);
                        }
                    }
                    else {
                        console.log("error: 参数类型为=>" + typeof model[key]);
                    }
                }
                else {
                    this[StaticData_1.__D_NAME__][key].call(this, key, model[key], -1);
                }
            }
            catch (e) {
                console.log("解析Model(" + key + ")字段出现异常=>", e.toString());
            }
        }
    };
    return Validator;
}());
exports.default = Validator;

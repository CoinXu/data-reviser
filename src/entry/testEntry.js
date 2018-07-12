"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var VeriInt32_1 = require("../script/VeriInt32");
var objEntry_1 = require("./objEntry");
var VeriStruct_1 = require("../script/VeriStruct");
var Validator_1 = require("../script/Validator");
var VeriString_1 = require("../script/VeriString");
var VeriInt64_1 = require("../script/VeriInt64");
var VeriFloat_1 = require("../script/VeriFloat");
var VeriDouble_1 = require("../script/VeriDouble");
var VeriUnInt32_1 = require("../script/VeriUnInt32");
var VeriUnInt64_1 = require("../script/VeriUnInt64");
var testEntry = /** @class */ (function (_super) {
    __extends(testEntry, _super);
    function testEntry() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.num = 1;
        _this.num64 = 1;
        _this.str = "demo";
        _this.float = 1.0;
        _this.double = 1.0;
        _this.unnum = 1;
        _this.unnum64 = 1;
        _this.doubleArray = [];
        _this.floatArray = [];
        _this.numArray = [];
        _this.num64Array = [];
        _this.strArray = [];
        _this.unnumArray = [];
        _this.unnum64Array = [];
        _this.obj = new objEntry_1.default();
        _this.objArray = [];
        return _this;
    }
    __decorate([
        VeriInt32_1.default()
    ], testEntry.prototype, "num", void 0);
    __decorate([
        VeriInt64_1.default()
    ], testEntry.prototype, "num64", void 0);
    __decorate([
        VeriString_1.default()
    ], testEntry.prototype, "str", void 0);
    __decorate([
        VeriFloat_1.default(false)
    ], testEntry.prototype, "float", void 0);
    __decorate([
        VeriDouble_1.default(false, function (err) {
            console.log(err);
        })
    ], testEntry.prototype, "double", void 0);
    __decorate([
        VeriUnInt32_1.default()
    ], testEntry.prototype, "unnum", void 0);
    __decorate([
        VeriUnInt64_1.default()
    ], testEntry.prototype, "unnum64", void 0);
    __decorate([
        VeriDouble_1.default(true)
    ], testEntry.prototype, "doubleArray", void 0);
    __decorate([
        VeriFloat_1.default(true)
    ], testEntry.prototype, "floatArray", void 0);
    __decorate([
        VeriInt32_1.default(true)
    ], testEntry.prototype, "numArray", void 0);
    __decorate([
        VeriInt64_1.default(true)
    ], testEntry.prototype, "num64Array", void 0);
    __decorate([
        VeriString_1.default(true)
    ], testEntry.prototype, "strArray", void 0);
    __decorate([
        VeriUnInt32_1.default(true)
    ], testEntry.prototype, "unnumArray", void 0);
    __decorate([
        VeriUnInt64_1.default(true)
    ], testEntry.prototype, "unnum64Array", void 0);
    __decorate([
        VeriStruct_1.default(objEntry_1.default)
    ], testEntry.prototype, "obj", void 0);
    __decorate([
        VeriStruct_1.default(objEntry_1.default, true)
    ], testEntry.prototype, "objArray", void 0);
    return testEntry;
}(Validator_1.default));
exports.default = testEntry;

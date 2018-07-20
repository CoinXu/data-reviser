module.exports=function(r){var t={};function e(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return r[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=r,e.c=t,e.d=function(r,t,n){e.o(r,t)||Object.defineProperty(r,t,{enumerable:!0,get:n})},e.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},e.t=function(r,t){if(1&t&&(r=e(r)),8&t)return r;if(4&t&&"object"==typeof r&&r&&r.__esModule)return r;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:r}),2&t&&"string"!=typeof r)for(var o in r)e.d(n,o,function(t){return r[t]}.bind(null,o));return n},e.n=function(r){var t=r&&r.__esModule?function(){return r.default}:function(){return r};return e.d(t,"a",t),t},e.o=function(r,t){return Object.prototype.hasOwnProperty.call(r,t)},e.p="/test/",e(e.s=0)}([function(r,t,e){"use strict";e.r(t);var n="_validator_",o="_class_",u={TYPE_ERROR:"type error",SIZE_ERROR:"size error",REQUIRE_ERROR:"require error"},i={INT32:"int32",INT64:"int64",DOUBLE:"double",FLOAT:"float",STRING:"string",STRUCT:"struct",UNINT32:"unsign int32",UNINT64:"unsign int64",BOOLEAN:"boolean",ARRAY:"array",EMAIL:"email",PHONE:"phome"};function l(r,t){return"number"!=typeof t?{value:!1,error:u.TYPE_ERROR}:t>2147483647||t<-2147483648?{value:!1,error:u.SIZE_ERROR}:t%1!=0?{value:!1,error:u.TYPE_ERROR}:{value:!0}}function a(r,t){if("object"!=typeof t||null===t||t instanceof Array)return{value:!1,error:u.TYPE_ERROR};var e=new this[o][r],n=e.setModel(t),i=e.getModel();return 0!==Object.keys(n).length?(this[r]=i,{value:!1,key:n,error:u.TYPE_ERROR}):{value:!0}}function c(r,t,e,n){if(void 0===n&&(n=1),t instanceof Array){this[r]=[];var o=function r(t,e,n,o,i,l){for(var a,c=new Array,p=0;p<t.length;p++)t[p]instanceof Array?e<=n?c.push({index:s(l,p),error:u.TYPE_ERROR}):c=c.concat(r(t[p],e,n+1,o,i,s(l,p))):e<=n?(a=i.call(this,o,t[p])).value||c.push({index:s(l,p),error:a.error}):c.push({index:s(l,p),error:u.TYPE_ERROR});return c}(t,n,1,r,e,"");return o.length?{value:!1,index:o}:{value:!0}}return{value:!1,error:u.TYPE_ERROR}}function s(r,t){return""===r?r+t:r+"-"+t}function p(r,t){return"number"!=typeof t?{value:!1,error:u.TYPE_ERROR}:t>Math.pow(2,1024)||t<-Math.pow(2,1024)?{value:!1,error:u.SIZE_ERROR}:{value:!0}}function f(r,t){return"number"!=typeof t?{value:!1,error:u.TYPE_ERROR}:t>Math.pow(2,128)||t<-Math.pow(2,128)?{value:!1,error:u.SIZE_ERROR}:{value:!0}}function d(r,t){return"number"!=typeof t?{value:!1,error:u.TYPE_ERROR}:t>0x8000000000000000||t<-0x8000000000000000?{value:!1,error:u.SIZE_ERROR}:t%1!=0?{value:!1,error:u.TYPE_ERROR}:{value:!0}}function v(r,t){return"string"!=typeof t?{value:!1,error:u.TYPE_ERROR}:{value:!0}}function y(r,t){return"number"!=typeof t?{value:!1,error:u.TYPE_ERROR}:t>4294967295||t<0?{value:!1,error:u.SIZE_ERROR}:t%1!=0?{value:!1,error:u.TYPE_ERROR}:{value:!0}}function R(r,t){return"number"!=typeof t?{value:!1,error:u.TYPE_ERROR}:t>0x10000000000000000||t<0?{value:!1,error:u.SIZE_ERROR}:t%1!=0?{value:!1,error:u.TYPE_ERROR}:{value:!0}}function g(r,t){return"boolean"!=typeof t?{value:!1,error:u.TYPE_ERROR}:{value:!0}}function h(r,t){return"string"!=typeof t?{value:!1,error:u.TYPE_ERROR}:/^([\w-_]+(?:\.[\w-_]+)*)@((?:[a-z0-9]+(?:-[a-zA-Z0-9]+)*)+\.[a-z]{2,6})$/.test(t)?{value:!0}:{value:!1,error:u.TYPE_ERROR}}function m(r,t){try{return/^1[3-9](\d{9})$/.test(t)?{value:!0}:{value:!1,error:u.TYPE_ERROR}}catch(r){return{value:!1,error:u.TYPE_ERROR}}}function E(r,t,e,n){if(r.value)return!0;var o=void 0;if(r.index){this.errMsg[t]=[];for(var u=0;u<r.index.length;u++)o={type:r.index[u].error,msg:n,index:r.index[u].index},this.errMsg[t].push(o)}else o=void 0!==r.key?{type:r.error,msg:n,key:r.key}:{type:r.error,msg:n},this.errMsg[t]=o;return!1}function b(r,t){var e=r[n]||(r[n]={}),o=r.initModel||(r.initModel={});return o[t]||(o[t]=!1),e[t]||(e[t]=[])}function T(r,t,e,n,o,u,i){void 0===o&&(o=!1),void 0===u&&(u=null),void 0===i&&(i=null),b.call(this,r,t).push(function(r,t){var l;return void 0!==t&&(l=o?n.call(this,r,t,u,i):n.call(this,r,t),E.call(this,l,r,t,e))})}var w={DecoArray:function(r,t,e){return void 0===t&&(t=null),void 0===e&&(e=1),function(n,o){var u;switch(r){case i.INT32:u=l;break;case i.STRUCT:u=a;break;case i.DOUBLE:u=p;break;case i.FLOAT:u=f;break;case i.INT64:u=d;break;case i.STRING:u=v;break;case i.UNINT32:u=y;break;case i.UNINT64:u=R;break;case i.BOOLEAN:u=g;break;case i.EMAIL:u=h;break;default:u=function(r,t){return!1}}T.call(this,n,o,t,c,!0,u,e)}},DecoBoolean:function(r){return void 0===r&&(r=null),function(t,e){T.call(this,t,e,r,g)}},DecoDouble:function(r){return void 0===r&&(r=null),function(t,e){T.call(this,t,e,r,p)}},DecoFloat:function(r){return void 0===r&&(r=null),function(t,e){T.call(this,t,e,r,f)}},DecoInt32:function(r){return void 0===r&&(r=null),function(t,e){T.call(this,t,e,r,l)}},DecoInt64:function(r){return void 0===r&&(r=null),function(t,e){T.call(this,t,e,r,d)}},DecoStruct:function(r){return void 0===r&&(r=null),function(t,e){T.call(this,t,e,r,a)}},DecoString:function(r){return void 0===r&&(r=null),function(t,e){T.call(this,t,e,r,v)}},DecoUnInt32:function(r){return void 0===r&&(r=null),function(t,e){T.call(this,t,e,r,y)}},DecoUnInt64:function(r){return void 0===r&&(r=null),function(t,e){T.call(this,t,e,r,R)}},StructType:function(r){return function(t,e){(t[o]||(t[o]={}))[e]=r}},Validator:function(){function r(){}return r.prototype.setModel=function(r){if(this.errMsg={},this.initModel){this.model=r;var t=void 0,e=!0;for(var o in this.initModel)try{t=this[n][o],e=!0;for(var u=0;u<t.length;u++)e=e&&this[n][o][u].call(this,o,r[o]);e&&(this[o]=r[o]),void 0!==this[o]&&(this.model[o]=this[o])}catch(r){console.log(r)}}return this.errMsg},r.prototype.getModel=function(){return this.model},r.prototype.getArrayModel=function(r){for(var t=[],e=0;e<r.length;e++)"object"==typeof r[e]?r[e]instanceof Array?t.push(this.getArrayModel(r[e])):t.push(r[e].getModel()):t.push(r[e]);return t},r}(),ERROR_TYPE:u,VERI_TYPE:i,DecoRequire:function(r){return void 0===r&&(r=null),function(t,e){var n=b.call(this,t,e);t.initModel[e]=!0,n.push(function(t,e){return void 0===e?E.call(this,{value:!1,error:u.REQUIRE_ERROR},t,e,r):!("string"==typeof e&&(e=(e=e.replace(/^([\s]+)/g,"")).replace(/([\s]+)$/g,"")).length<=0)||E.call(this,{value:!1,error:u.REQUIRE_ERROR},t,e,r)})}},DecoEmail:function(r){return void 0===r&&(r=null),function(t,e){T.call(this,t,e,r,h)}},DecoPhone:function(r){return void 0===r&&(r=null),function(t,e){T.call(this,t,e,r,m)}}},M=function(){var r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,t){r.__proto__=t}||function(r,t){for(var e in t)t.hasOwnProperty(e)&&(r[e]=t[e])};return function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}}(),O=function(r,t,e,n){var o,u=arguments.length,i=u<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,e):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(r,t,e,n);else for(var l=r.length-1;l>=0;l--)(o=r[l])&&(i=(u<3?o(i):u>3?o(t,e,i):o(t,e))||i);return u>3&&i&&Object.defineProperty(t,e,i),i};t.default={testAllRight:function(){var r=function(r){function t(){var t=null!==r&&r.apply(this,arguments)||this;return t.num=1,t}return M(t,r),O([w.DecoInt32("wrong")],t.prototype,"num",void 0),t}(w.Validator),t=new(function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.num1=1,e.num64=1,e.unnum32=1,e.unnum64=1,e.double=1,e.float=1,e.str="demo",e.boo=!1,e.mail="",e.phone=null,e.numarr=[],e.obj=new r,e}return M(e,t),O([w.DecoRequire("require"),w.DecoInt32("wrong")],e.prototype,"num1",void 0),O([w.DecoInt64("wrong")],e.prototype,"num64",void 0),O([w.DecoUnInt32("wrong")],e.prototype,"unnum32",void 0),O([w.DecoUnInt64("wrong")],e.prototype,"unnum64",void 0),O([w.DecoDouble("wrong")],e.prototype,"double",void 0),O([w.DecoFloat("wrong")],e.prototype,"float",void 0),O([w.DecoString("wrong")],e.prototype,"str",void 0),O([w.DecoBoolean("wrong")],e.prototype,"boo",void 0),O([w.DecoEmail("wrong")],e.prototype,"mail",void 0),O([w.DecoPhone("wrong")],e.prototype,"phone",void 0),O([w.DecoArray(w.VERI_TYPE.INT32,"wrong")],e.prototype,"numarr",void 0),O([w.DecoStruct("wrong"),w.StructType(r)],e.prototype,"obj",void 0),e}(w.Validator)),e=t.setModel({num1:10,num64:64,unnum32:100,unnum64:6400,double:1.11,float:1.1,str:"test",numarr:[1,2,3,4],boo:!0,mail:"295958897@qq.com",phone:13560521917,obj:{num:11}});return{model:t.getModel(),errmsg:e}},testRequireWrong:function(){var r=new(function(r){function t(){return null!==r&&r.apply(this,arguments)||this}return M(t,r),O([w.DecoRequire("require")],t.prototype,"num1",void 0),t}(w.Validator)),t=r.setModel({});return{model:r.getModel(),errmsg:t}},testInt32TypeWrong:function(){var r=new(function(r){function t(){var t=null!==r&&r.apply(this,arguments)||this;return t.num1=1,t}return M(t,r),O([w.DecoInt32("wrong")],t.prototype,"num1",void 0),t}(w.Validator)),t=r.setModel({num1:"10"});return{model:r.getModel(),errmsg:t}},testInt64TypeWrong:function(){var r=new(function(r){function t(){var t=null!==r&&r.apply(this,arguments)||this;return t.num64=1,t}return M(t,r),O([w.DecoInt64("wrong")],t.prototype,"num64",void 0),t}(w.Validator)),t=r.setModel({num64:"64"});return{model:r.getModel(),errmsg:t}},testUnInt32TypeWrong:function(){var r=new(function(r){function t(){var t=null!==r&&r.apply(this,arguments)||this;return t.unnum32=1,t}return M(t,r),O([w.DecoUnInt32("wrong")],t.prototype,"unnum32",void 0),t}(w.Validator)),t=r.setModel({unnum32:"100"});return{model:r.getModel(),errmsg:t}},testUnInt64TypeWrong:function(){var r=new(function(r){function t(){var t=null!==r&&r.apply(this,arguments)||this;return t.unnum64=1,t}return M(t,r),O([w.DecoUnInt64("wrong")],t.prototype,"unnum64",void 0),t}(w.Validator)),t=r.setModel({unnum64:"6400"});return{model:r.getModel(),errmsg:t}},testDoubleTypeWrong:function(){var r=new(function(r){function t(){var t=null!==r&&r.apply(this,arguments)||this;return t.double=1,t}return M(t,r),O([w.DecoDouble("wrong")],t.prototype,"double",void 0),t}(w.Validator)),t=r.setModel({double:"1.11"});return{model:r.getModel(),errmsg:t}},testFloatTypeWrong:function(){var r=new(function(r){function t(){var t=null!==r&&r.apply(this,arguments)||this;return t.float=1,t}return M(t,r),O([w.DecoFloat("wrong")],t.prototype,"float",void 0),t}(w.Validator)),t=r.setModel({float:"1.1"});return{model:r.getModel(),errmsg:t}},testStringTypeWrong:function(){var r=new(function(r){function t(){var t=null!==r&&r.apply(this,arguments)||this;return t.str="demo",t}return M(t,r),O([w.DecoString("wrong")],t.prototype,"str",void 0),t}(w.Validator)),t=r.setModel({str:1});return{model:r.getModel(),errmsg:t}},testArrayTypeWrong:function(){var r=new(function(r){function t(){var t=null!==r&&r.apply(this,arguments)||this;return t.numarr=[],t}return M(t,r),O([w.DecoArray(w.VERI_TYPE.INT32,"wrong")],t.prototype,"numarr",void 0),t}(w.Validator)),t=r.setModel({numarr:1});return{model:r.getModel(),errmsg:t}},testArraySubTypeWrong:function(){var r=new(function(r){function t(){var t=null!==r&&r.apply(this,arguments)||this;return t.numarr=[],t}return M(t,r),O([w.DecoArray(w.VERI_TYPE.INT32,"wrong")],t.prototype,"numarr",void 0),t}(w.Validator)),t=r.setModel({numarr:[1,2,3,"4"]});return{model:r.getModel(),errmsg:t}},testBooleanTypeWrong:function(){var r=new(function(r){function t(){var t=null!==r&&r.apply(this,arguments)||this;return t.boo=!1,t}return M(t,r),O([w.DecoBoolean("wrong")],t.prototype,"boo",void 0),t}(w.Validator)),t=r.setModel({boo:2});return{model:r.getModel(),errmsg:t}},testStructTypeWrong:function(){var r=function(r){function t(){var t=null!==r&&r.apply(this,arguments)||this;return t.num=1,t}return M(t,r),O([w.DecoInt32("wrong")],t.prototype,"num",void 0),t}(w.Validator),t=new(function(t){function e(){var r=null!==t&&t.apply(this,arguments)||this;return r.obj={},r}return M(e,t),O([w.DecoStruct("wrong"),w.StructType(r)],e.prototype,"obj",void 0),e}(w.Validator)),e=t.setModel({obj:11});return{model:t.getModel(),errmsg:e}},testStructEntryTypeWrong:function(){var r=function(r){function t(){var t=null!==r&&r.apply(this,arguments)||this;return t.num=1,t}return M(t,r),O([w.DecoInt32("wrong")],t.prototype,"num",void 0),t}(w.Validator),t=new(function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.obj=new r,e}return M(e,t),O([w.DecoStruct("wrong"),w.StructType(r)],e.prototype,"obj",void 0),e}(w.Validator)),e=t.setModel({obj:{num:"11"}});return{model:t.getModel(),errmsg:e}},testEmailTypeWrong:function(){var r=new(function(r){function t(){var t=null!==r&&r.apply(this,arguments)||this;return t.mail="",t}return M(t,r),O([w.DecoEmail("wrong")],t.prototype,"mail",void 0),t}(w.Validator)),t=r.setModel({mail:"123456789"});return{model:r.getModel(),errmsg:t}},testPhoneTypeWrong:function(){var r=new(function(r){function t(){var t=null!==r&&r.apply(this,arguments)||this;return t.phone=null,t}return M(t,r),O([w.DecoPhone("wrong")],t.prototype,"phone",void 0),t}(w.Validator)),t=r.setModel({phone:123456789});return{model:r.getModel(),errmsg:t}}}}]);
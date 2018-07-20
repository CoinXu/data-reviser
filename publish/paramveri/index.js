module.exports=function(r){var e={};function t(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return r[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=r,t.c=e,t.d=function(r,e,n){t.o(r,e)||Object.defineProperty(r,e,{enumerable:!0,get:n})},t.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},t.t=function(r,e){if(1&e&&(r=t(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var o in r)t.d(n,o,function(e){return r[e]}.bind(null,o));return n},t.n=function(r){var e=r&&r.__esModule?function(){return r.default}:function(){return r};return t.d(e,"a",e),e},t.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},t.p="/",t(t.s=0)}([function(r,e,t){"use strict";t.r(e);var n="_validator_",o="_class_",u={TYPE_ERROR:"type error",SIZE_ERROR:"size error",REQUIRE_ERROR:"require error",LENGTH_MIN_ERRO:"length less than min",LENGTH_MAX_ERRO:"length more than max"},i={INT32:"int32",INT64:"int64",DOUBLE:"double",FLOAT:"float",STRING:"string",STRUCT:"struct",UNINT32:"unsign int32",UNINT64:"unsign int64",BOOLEAN:"boolean",ARRAY:"array",EMAIL:"email",PHONE:"phome"},l=function(){function r(){}return r.prototype.setModel=function(r){if(this.errMsg={},this.initModel){this.model=r;var e=void 0,t=!0;for(var o in this.initModel)try{e=this[n][o],t=!0;for(var u=0;u<e.length;u++)t=t&&this[n][o][u].call(this,o,r[o]);t&&(this[o]=r[o]),void 0!==this[o]&&(this.model[o]=this[o])}catch(r){console.log(r)}}return this.errMsg},r.prototype.getModel=function(){return this.model},r.prototype.getArrayModel=function(r){for(var e=[],t=0;t<r.length;t++)"object"==typeof r[t]?r[t]instanceof Array?e.push(this.getArrayModel(r[t])):e.push(r[t].getModel()):e.push(r[t]);return e},r}();function a(r,e){return"number"!=typeof e?{value:!1,error:u.TYPE_ERROR}:e>2147483647||e<-2147483648?{value:!1,error:u.SIZE_ERROR}:e%1!=0?{value:!1,error:u.TYPE_ERROR}:{value:!0}}function c(r,e){if("object"!=typeof e||null===e||e instanceof Array)return{value:!1,error:u.TYPE_ERROR};var t=new this[o][r],n=t.setModel(e),i=t.getModel();return 0!==Object.keys(n).length?(this[r]=i,{value:!1,key:n,error:u.TYPE_ERROR}):{value:!0}}function R(r,e,t,n){if(void 0===n&&(n=1),e instanceof Array){this[r]=[];var o=function r(e,t,n,o,i,l){for(var a,c=new Array,R=0;R<e.length;R++)e[R]instanceof Array?t<=n?c.push({index:s(l,R),error:u.TYPE_ERROR}):c=c.concat(r(e[R],t,n+1,o,i,s(l,R))):t<=n?(a=i.call(this,o,e[R])).value||c.push({index:s(l,R),error:a.error}):c.push({index:s(l,R),error:u.TYPE_ERROR});return c}(e,n,1,r,t,"");return o.length?{value:!1,index:o}:{value:!0}}return{value:!1,error:u.TYPE_ERROR}}function s(r,e){return""===r?r+e:r+"-"+e}function f(r,e){return"number"!=typeof e?{value:!1,error:u.TYPE_ERROR}:e>Math.pow(2,1024)||e<-Math.pow(2,1024)?{value:!1,error:u.SIZE_ERROR}:{value:!0}}function v(r,e){return"number"!=typeof e?{value:!1,error:u.TYPE_ERROR}:e>Math.pow(2,128)||e<-Math.pow(2,128)?{value:!1,error:u.SIZE_ERROR}:{value:!0}}function E(r,e){return"number"!=typeof e?{value:!1,error:u.TYPE_ERROR}:e>0x8000000000000000||e<-0x8000000000000000?{value:!1,error:u.SIZE_ERROR}:e%1!=0?{value:!1,error:u.TYPE_ERROR}:{value:!0}}function h(r,e){return"string"!=typeof e?{value:!1,error:u.TYPE_ERROR}:{value:!0}}function d(r,e){return"number"!=typeof e?{value:!1,error:u.TYPE_ERROR}:e>4294967295||e<0?{value:!1,error:u.SIZE_ERROR}:e%1!=0?{value:!1,error:u.TYPE_ERROR}:{value:!0}}function p(r,e){return"number"!=typeof e?{value:!1,error:u.TYPE_ERROR}:e>0x10000000000000000||e<0?{value:!1,error:u.SIZE_ERROR}:e%1!=0?{value:!1,error:u.TYPE_ERROR}:{value:!0}}function O(r,e){return"boolean"!=typeof e?{value:!1,error:u.TYPE_ERROR}:{value:!0}}function _(r,e){return"string"!=typeof e?{value:!1,error:u.TYPE_ERROR}:/^([\w-_]+(?:\.[\w-_]+)*)@((?:[a-z0-9]+(?:-[a-zA-Z0-9]+)*)+\.[a-z]{2,6})$/.test(e)?{value:!0}:{value:!1,error:u.TYPE_ERROR}}function y(r,e){try{return/^1[3-9](\d{9})$/.test(e)?{value:!0}:{value:!1,error:u.TYPE_ERROR}}catch(r){return{value:!1,error:u.TYPE_ERROR}}}function T(r,e,t,n){if(r.value)return!0;var o=void 0;if(r.index){this.errMsg[e]=[];for(var u=0;u<r.index.length;u++)o={type:r.index[u].error,msg:n,index:r.index[u].index},this.errMsg[e].push(o)}else o=void 0!==r.key?{type:r.error,msg:n,key:r.key}:{type:r.error,msg:n},this.errMsg[e]=o;return!1}function g(r,e){var t=r[n]||(r[n]={}),o=r.initModel||(r.initModel={});return o[e]||(o[e]=!1),t[e]||(t[e]=[])}function b(r,e,t,n,o,u,i){void 0===o&&(o=!1),void 0===u&&(u=null),void 0===i&&(i=null),g.call(this,r,e).push(function(r,e){var l;return void 0!==e&&(l=o?n.call(this,r,e,u,i):n.call(this,r,e),T.call(this,l,r,e,t))})}e.default={DecoArray:function(r,e,t){return void 0===e&&(e=null),void 0===t&&(t=1),function(n,o){var u;switch(r){case i.INT32:u=a;break;case i.STRUCT:u=c;break;case i.DOUBLE:u=f;break;case i.FLOAT:u=v;break;case i.INT64:u=E;break;case i.STRING:u=h;break;case i.UNINT32:u=d;break;case i.UNINT64:u=p;break;case i.BOOLEAN:u=O;break;case i.EMAIL:u=_;break;default:u=function(r,e){return!1}}b.call(this,n,o,e,R,!0,u,t)}},DecoBoolean:function(r){return void 0===r&&(r=null),function(e,t){b.call(this,e,t,r,O)}},DecoDouble:function(r){return void 0===r&&(r=null),function(e,t){b.call(this,e,t,r,f)}},DecoFloat:function(r){return void 0===r&&(r=null),function(e,t){b.call(this,e,t,r,v)}},DecoInt32:function(r){return void 0===r&&(r=null),function(e,t){b.call(this,e,t,r,a)}},DecoInt64:function(r){return void 0===r&&(r=null),function(e,t){b.call(this,e,t,r,E)}},DecoStruct:function(r){return void 0===r&&(r=null),function(e,t){b.call(this,e,t,r,c)}},DecoString:function(r){return void 0===r&&(r=null),function(e,t){b.call(this,e,t,r,h)}},DecoUnInt32:function(r){return void 0===r&&(r=null),function(e,t){b.call(this,e,t,r,d)}},DecoUnInt64:function(r){return void 0===r&&(r=null),function(e,t){b.call(this,e,t,r,p)}},StructType:function(r){return function(e,t){(e[o]||(e[o]={}))[t]=r}},Validator:l,ERROR_TYPE:u,VERI_TYPE:i,DecoRequire:function(r){return void 0===r&&(r=null),function(e,t){var n=g.call(this,e,t);e.initModel[t]=!0,n.push(function(e,t){return void 0===t?T.call(this,{value:!1,error:u.REQUIRE_ERROR},e,t,r):!("string"==typeof t&&(t=(t=t.replace(/^([\s]+)/g,"")).replace(/([\s]+)$/g,"")).length<=0)||T.call(this,{value:!1,error:u.REQUIRE_ERROR},e,t,r)})}},DecoEmail:function(r){return void 0===r&&(r=null),function(e,t){b.call(this,e,t,r,_)}},DecoPhone:function(r){return void 0===r&&(r=null),function(e,t){b.call(this,e,t,r,y)}},DecoMinLength:function(r,e){return void 0===e&&(e=null),function(t,n){g.call(this,t,n).push(function(t,n){try{return n.length>=r||T.call(this,{value:!1,error:u.LENGTH_MIN_ERRO},t,n,e)}catch(r){return T.call(this,{value:!1,error:u.TYPE_ERROR},t,n,e)}})}},DecoMaxLength:function(r,e){return void 0===e&&(e=null),function(t,n){g.call(this,t,n).push(function(t,n){try{return n.length<=r||T.call(this,{value:!1,error:u.LENGTH_MAX_ERRO},t,n,e)}catch(r){return T.call(this,{value:!1,error:u.TYPE_ERROR},t,n,e)}})}}}}]);
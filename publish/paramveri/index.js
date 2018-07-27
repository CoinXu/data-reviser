module.exports=function(r){var e={};function t(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return r[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=r,t.c=e,t.d=function(r,e,n){t.o(r,e)||Object.defineProperty(r,e,{enumerable:!0,get:n})},t.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},t.t=function(r,e){if(1&e&&(r=t(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var o in r)t.d(n,o,function(e){return r[e]}.bind(null,o));return n},t.n=function(r){var e=r&&r.__esModule?function(){return r.default}:function(){return r};return t.d(e,"a",e),e},t.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},t.p="/",t(t.s=0)}([function(r,e,t){"use strict";function n(r,e){return"number"!=typeof e?{value:!1,error:_.TYPE_ERROR}:e>2147483647||e<-2147483648?{value:!1,error:_.SIZE_ERROR}:e%1!=0?{value:!1,error:_.TYPE_ERROR}:{value:!0}}function o(r,e){if("object"!=typeof e||null===e||e instanceof Array)return{value:!1,error:_.TYPE_ERROR};var t=new this[p][r],n=t.setModel(e),o=t.getModel();return 0!==Object.keys(n).length?(void 0===this[r]||this[r]instanceof Array||(this[r]=o),{value:!1,key:n,error:_.TYPE_ERROR}):{value:!0}}function u(r,e,t,n){if(void 0===n&&(n=1),e instanceof Array){void 0!==this[r]&&(this[r]=[]);var o=function r(e,t,n,o,u,l){for(var c,a=new Array,R=0;R<e.length;R++)e[R]instanceof Array?t<=n?a.push({index:i(l,R),error:_.TYPE_ERROR}):a=a.concat(r.call(this,e[R],t,n+1,o,u,i(l,R))):t<=n?(c=u.call(this,o,e[R])).value?void 0!==this[o]&&this[o]instanceof Array&&this[o].push(e[R]):a.push({index:i(l,R),error:c.error}):a.push({index:i(l,R),error:_.TYPE_ERROR});return a}.call(this,e,n,1,r,t,"");return o.length?{value:!1,index:o}:{value:!0}}return{value:!1,error:_.TYPE_ERROR}}function i(r,e){return""===r?r+e:r+"-"+e}function l(r,e){return"number"!=typeof e?{value:!1,error:_.TYPE_ERROR}:e>Math.pow(2,1024)||e<-Math.pow(2,1024)?{value:!1,error:_.SIZE_ERROR}:{value:!0}}function c(r,e){return"number"!=typeof e?{value:!1,error:_.TYPE_ERROR}:e>Math.pow(2,128)||e<-Math.pow(2,128)?{value:!1,error:_.SIZE_ERROR}:{value:!0}}function a(r,e){return"number"!=typeof e?{value:!1,error:_.TYPE_ERROR}:e>0x8000000000000000||e<-0x8000000000000000?{value:!1,error:_.SIZE_ERROR}:e%1!=0?{value:!1,error:_.TYPE_ERROR}:{value:!0}}function R(r,e){return"string"!=typeof e?{value:!1,error:_.TYPE_ERROR}:{value:!0}}function s(r,e){return"number"!=typeof e?{value:!1,error:_.TYPE_ERROR}:e>4294967295||e<0?{value:!1,error:_.SIZE_ERROR}:e%1!=0?{value:!1,error:_.TYPE_ERROR}:{value:!0}}function f(r,e){return"number"!=typeof e?{value:!1,error:_.TYPE_ERROR}:e>0x10000000000000000||e<0?{value:!1,error:_.SIZE_ERROR}:e%1!=0?{value:!1,error:_.TYPE_ERROR}:{value:!0}}function h(r,e){return"boolean"!=typeof e?{value:!1,error:_.TYPE_ERROR}:{value:!0}}function v(r,e){return"string"!=typeof e?{value:!1,error:_.TYPE_ERROR}:/^([\w-_]+(?:\.[\w-_]+)*)@((?:[a-z0-9]+(?:-[a-zA-Z0-9]+)*)+\.[a-z]{2,6})$/.test(e)?{value:!0}:{value:!1,error:_.TYPE_ERROR}}function E(r,e){try{return/^1[3-9](\d{9})$/.test(e)?{value:!0}:{value:!1,error:_.TYPE_ERROR}}catch(r){return{value:!1,error:_.TYPE_ERROR}}}t.r(e);var d="_validator_",p="_class_",_={TYPE_ERROR:"type error",SIZE_ERROR:"size error",REQUIRE_ERROR:"require error",LENGTH_MIN_ERRO:"length less than min",LENGTH_MAX_ERRO:"length more than max"},y={INT32:n,INT64:a,DOUBLE:l,FLOAT:c,STRING:R,STRUCT:o,UNINT32:s,UNINT64:f,BOOLEAN:h,EMAIL:v,PHONE:E},O=function(){function r(){this.model={}}return r.prototype.setModel=function(r){if(this.errMsg={},this.initModel){var e=void 0,t=!0;for(var n in this.initModel)try{e=this[d][n],t=!0;for(var o=0;o<e.length;o++)t=t&&this[d][n][o].call(this,n,r[n]);t&&(this[n]=r[n]),void 0!==this[n]&&("object"==typeof this[n]&&null!==this[n]&&"function"==typeof this[n].setModel&&(this[n].setModel({}),this[n]=this[n].getModel()),this.model[n]=this[n])}catch(r){console.log(r)}}return this.errMsg},r.prototype.getModel=function(){return this.model},r.prototype.getArrayModel=function(r){for(var e=[],t=0;t<r.length;t++)"object"==typeof r[t]?r[t]instanceof Array?e.push(this.getArrayModel(r[t])):e.push(r[t].getModel()):e.push(r[t]);return e},r}();function T(r,e,t,n){if(r.value)return!0;var o=void 0;if(r.index){this.errMsg[e]=[];for(var u=0;u<r.index.length;u++)o={type:r.index[u].error,msg:n,index:r.index[u].index},this.errMsg[e].push(o)}else o=void 0!==r.key?{type:r.error,msg:n,key:r.key}:{type:r.error,msg:n},this.errMsg[e]=o;return!1}function g(r,e){var t=r[d]||(r[d]={}),n=r.initModel||(r.initModel={});return n[e]||(n[e]=!1),t[e]||(t[e]=[])}function M(r,e,t,n,o,u,i){void 0===o&&(o=!1),void 0===u&&(u=null),void 0===i&&(i=null),g.call(this,r,e).push(function(r,e){var l;return void 0!==e&&(l=o?n.call(this,r,e,u,i):n.call(this,r,e),T.call(this,l,r,e,t))})}e.default={DecoArray:function(r,e,t){return void 0===e&&(e=null),void 0===t&&(t=1),function(n,o){M.call(this,n,o,e,u,!0,r,t)}},DecoBoolean:function(r){return void 0===r&&(r=null),function(e,t){M.call(this,e,t,r,h)}},DecoDouble:function(r){return void 0===r&&(r=null),function(e,t){M.call(this,e,t,r,l)}},DecoFloat:function(r){return void 0===r&&(r=null),function(e,t){M.call(this,e,t,r,c)}},DecoInt32:function(r){return void 0===r&&(r=null),function(e,t){M.call(this,e,t,r,n)}},DecoInt64:function(r){return void 0===r&&(r=null),function(e,t){M.call(this,e,t,r,a)}},DecoStruct:function(r){return void 0===r&&(r=null),function(e,t){M.call(this,e,t,r,o)}},DecoString:function(r){return void 0===r&&(r=null),function(e,t){M.call(this,e,t,r,R)}},DecoUnInt32:function(r){return void 0===r&&(r=null),function(e,t){M.call(this,e,t,r,s)}},DecoUnInt64:function(r){return void 0===r&&(r=null),function(e,t){M.call(this,e,t,r,f)}},StructType:function(r){return function(e,t){(e[p]||(e[p]={}))[t]=r}},Validator:O,ERROR_TYPE:_,VERI_TYPE:y,DecoRequire:function(r){return void 0===r&&(r=null),function(e,t){var n=g.call(this,e,t);e.initModel[t]=!0,n.push(function(e,t){return void 0===t?T.call(this,{value:!1,error:_.REQUIRE_ERROR},e,t,r):!("string"==typeof t&&(t=(t=t.replace(/^([\s]+)/g,"")).replace(/([\s]+)$/g,"")).length<=0)||T.call(this,{value:!1,error:_.REQUIRE_ERROR},e,t,r)})}},DecoEmail:function(r){return void 0===r&&(r=null),function(e,t){M.call(this,e,t,r,v)}},DecoPhone:function(r){return void 0===r&&(r=null),function(e,t){M.call(this,e,t,r,E)}},DecoMinLength:function(r,e){return void 0===e&&(e=null),function(t,n){g.call(this,t,n).push(function(t,n){try{return n.length>=r||T.call(this,{value:!1,error:_.LENGTH_MIN_ERRO},t,n,e)}catch(r){return T.call(this,{value:!1,error:_.TYPE_ERROR},t,n,e)}})}},DecoMaxLength:function(r,e){return void 0===e&&(e=null),function(t,n){g.call(this,t,n).push(function(t,n){try{return n.length<=r||T.call(this,{value:!1,error:_.LENGTH_MAX_ERRO},t,n,e)}catch(r){return T.call(this,{value:!1,error:_.TYPE_ERROR},t,n,e)}})}}}}]);
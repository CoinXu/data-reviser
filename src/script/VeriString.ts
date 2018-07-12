import {__D_NAME__,__Array_tag__,__ERROR_TYPE__} from "./StaticData"

function VeriString(isArray: boolean, callback: Function) {
  return function (target, key) {
    const map = target[__D_NAME__] || (target[__D_NAME__] = {});
    const arrayTag = target[__Array_tag__] || (target[__Array_tag__] = {});

    arrayTag[key] = isArray;

    map[key] = function (key,  value, index) {
      if(typeof value !== "string"){
        //验证是否为number
        if(callback instanceof Function){
          callback(__ERROR_TYPE__.type_error);
        }else {
          console.log("error: 参数类型为=>" + typeof value);
        }
      }else{
        //条件满足
        if(index === -1) {
          this[key] = value;
        }else{
          this[key][index] = value;
        }
      }
      if(index === -1) {
        this.model[key] = this[key];
      }else{
        this.model[key][index] = this[key][index];
      }
    };
    return;
  }
}

export default VeriString

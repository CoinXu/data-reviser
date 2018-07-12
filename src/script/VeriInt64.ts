import {__D_NAME__,__Array_tag__,__ERROR_TYPE__} from "./StaticData"

function VeriInt64(isArray: boolean, callback: Function) {
  return function (target, key) {
    const map = target[__D_NAME__] || (target[__D_NAME__] = {});
    const arrayTag = target[__Array_tag__] || (target[__Array_tag__] = {});

    arrayTag[key] = isArray;

    map[key] = function (key,  value, index) {
      if(typeof value !== "number"){
        //验证是否为number
        if(callback instanceof Function){
          callback(__ERROR_TYPE__.type_error);
        }
        {
          console.log("error: 参数类型为=>" + typeof value);
        }
      }else{
        if(value > 9223372036854775807 || value < -9223372036854775808){
          //验证是否超过int64范围
          if(callback instanceof Function){
            callback(__ERROR_TYPE__.size_error);
          }else {
            console.log("error: 参数大小超出Int64");
          }
        }else{
          if(value % 1 !== 0){
            //存在小数
            if(callback instanceof Function){
              callback(__ERROR_TYPE__.type_error);
            }else {
              console.log("error: 参数为浮点类型");
            }
          }else {
            //条件满足
            if(index === -1) {
              this[key] = value;
            }else{
              this[key][index] = value;
            }
          }
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

export default VeriInt64

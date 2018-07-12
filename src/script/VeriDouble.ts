import {__D_NAME__,__Array_tag__,__ERROR_TYPE__} from "./StaticData"

function VeriDouble(isArray: boolean, callback: Function) {
  return function (target, key) {
    const map = target[__D_NAME__] || (target[__D_NAME__] = {});
    const arrayTag = target[__Array_tag__] || (target[__Array_tag__] = {});

    arrayTag[key] = isArray;

    map[key] = function (key,value,index) {
      if(typeof value !== "number"){
        //验证是否为number
        if(callback instanceof Function){
          callback(__ERROR_TYPE__.type_error);
        }else {
          console.log("error: 参数类型为=>" + typeof value);
        }
      }else{
        if(value > Math.pow(2,1024) || value < -Math.pow(2,1024)){
          //验证指数位是否超过double范围
          if(callback instanceof Function){
            callback(__ERROR_TYPE__.size_error);
          }else {
            console.log("error: 参数大小超出Double");
          }
        }else{
          if(index === -1) {
            this[key] = value;
          }else{
            this[key][index] = value;
          }
        }
      }
    }

    return;
  }
}

export default VeriDouble

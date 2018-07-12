import {__D_NAME__,__Array_tag__,__ERROR_TYPE__} from "./StaticData"

function VeriStruct(entry: any, isArray: boolean, callback: Function) {
  return function (target,key) {
    const map = target[__D_NAME__] || (target[__D_NAME__] = {});
    const arrayTag = target[__Array_tag__] || (target[__Array_tag__] = {});

    arrayTag[key] = isArray;

    map[key] = function (key,  value, index) {
      // let classType: string = value.constructor.toString().split(" ")[1].split("(")[0];
      // console.log(value)
      if(!(value instanceof entry)){
        //验证对象是否正确
        if(typeof value !== "object") {
          if(callback instanceof Function){
            callback(__ERROR_TYPE__.type_error);
          }else {
            console.log("error: 参数类型为=>" + typeof value);
          }
        }else{
          if(callback instanceof Function){
            callback(__ERROR_TYPE__.type_error);
          }else {
            console.log("error: 对象类型为=>" + entry);
          }
        }
      }else{
        if(index === -1) {
          this[key] = value;
        }else{
          this[key][index] = value;
        }
      }
    }

    return;
  }
}


export default VeriStruct

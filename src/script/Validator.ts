import {__D_NAME__,__Array_tag__} from "./StaticData"

class Validator {
  // private model: T | null;
  // public constructor(value?: T) {
  //   this.model = value;
  // }

  public setModel(model) {
    for (let key in model) {
      try {
        if(this[__Array_tag__][key]){
          if(model[key] instanceof Array){
            for(let i in model[key]){
              this[__D_NAME__][key].call(this, key, model[key][i],i);
            }
          }else{
            console.log("error: 参数类型为=>" + typeof model[key]);
          }
        }else{
          this[__D_NAME__][key].call(this, key, model[key],-1);
        }
      }catch(e){
        console.log("解析Model(" + key + ")字段出现异常=>",e.toString());
      }
    }
  }
  // public get(): T {
  //   return this.model;
  // }
}

export default Validator

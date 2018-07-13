import {__D_NAME__} from "../script/StaticData"
import {Validator as IValidator} from "../inter/decorator"

export class Validator implements IValidator{
  model;
  errmsg;

  public setModel(model) {
    this.model = model;
    this.errmsg = [];
    for (let key in model) {
      try {
        this[__D_NAME__][key].call(this, key, model[key]);
      }catch(e){
        console.log(e);
      }
    }
    return this.errmsg;
  }


  public getModel() {
    let retModel = {};
    for(let key in this.model){
      if(typeof this.model[key] === "object"){
        if(this.model[key] instanceof Array){
          if(this.model[key].length > 0 && typeof this.model[key][0] === "object"){
            retModel[key] = [];
            for(let i in this.model[key]){
              retModel[key][i] = this.model[key][i].getModel();
            }
          }else{
            retModel[key] = this.model[key];
          }
        }else {
          try {
            retModel[key] = this.model[key].getModel();
          } catch (e) {
            console.log(e);
          }
        }
      }else{
        retModel[key] = this.model[key];
      }
    }
    return retModel;
  }
}

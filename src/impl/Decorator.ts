import {__D_NAME__, __ERROR_TYPE__, __VERI_TYPE__} from "../script/StaticData";
import {
  VeriInt32,
  VeriStruct,
  VeriArray,
  VeriDouble,
  VeriFloat,
  VeriInt64,
  VeriString,
  VeriUnInt32,
  VeriUnInt64
} from "./Validators/index";

export function Decorator(type: string, detailType: any = null) {
  return function (target, key) {
    const map = target[__D_NAME__] || (target[__D_NAME__] = {});

    let veriFun;
    switch (type){
      case __VERI_TYPE__.ARRAY:
        veriFun = getVeriFun(detailType);
        break;
      default:
        veriFun = getVeriFun(type);
        break;
    }

    if(type === __VERI_TYPE__.ARRAY){
      map[key] = function (key, value) {
        let ve = VeriArray.call(this,key,value,veriFun);
        dealVeri.call(this,ve,key,value);
      }
    }else {
      map[key] = function (key, value) {
        let ve = veriFun.call(this, key, value);
        dealVeri.call(this,ve,key,value);
      }
    }

    return;
  }
}

function getVeriFun(type: string) {
  let veriFun;
  switch (type){
    case __VERI_TYPE__.INT32:
      veriFun = VeriInt32;
      break;
    case __VERI_TYPE__.STRUCT:
      veriFun = VeriStruct;
      break;
    case __VERI_TYPE__.DOUBLE:
      veriFun = VeriDouble;
      break;
    case __VERI_TYPE__.FLOAT:
      veriFun = VeriFloat;
      break;
    case __VERI_TYPE__.INT64:
      veriFun = VeriInt64;
      break;
    case __VERI_TYPE__.STRING:
      veriFun = VeriString;
      break;
    case __VERI_TYPE__.UNINT32:
      veriFun = VeriUnInt32;
      break;
    case __VERI_TYPE__.UNINT64:
      veriFun = VeriUnInt64;
      break;
    default:
      veriFun = function (key,value) {
        return false;
      }
      break;
  }
  return veriFun;
}


function dealVeri(ve,key,value) {
  if (ve.value) {
    this[key] = value;
  }
  this.model[key] = this[key];
  if(ve.error) {
    this.errmsg.push(ve.error);
  }
}

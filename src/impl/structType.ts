import {__CLASS_TYPE_} from "../script/staticData";

export function structType(classType: object) {
  return function (target, key) {
    const objectType = target[__CLASS_TYPE_] || (target[__CLASS_TYPE_] = {});

    objectType[key] = classType;

    return;
  }
}


/**
 * @date 2018-08-24
 * @author xuchuanping
 * @description
 */

import { factory } from "@/decorator-factory";
import { VALIDATOR_PRIVATE_PROPERTY_NAME } from "@/constants";
import {
  PropertyDecorator, ValidatorDecoratorReturns, ValidatorMessage,
  Validator, ValidatorConstructor
} from "@inter/decorator";

function TypeStructure<T = {}>(Clazz: ValidatorConstructor<T>): PropertyDecorator {
  class ClazzClass extends Clazz {};

  const ins: Validator<T> = new ClazzClass();

  function decorator(target: any, key: string, value: any): ValidatorDecoratorReturns<T> {
    const message: ValidatorMessage<T> = ins.map(value);
    if (message !== null) {
      return message;
    }
    target[key] = ins.get();
    return null;
  }

  return factory(decorator);
}

export default TypeStructure;

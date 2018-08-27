/**
 * @date 2018-08-24
 * @author xuchuanping
 * @description
 */

import { factory } from "@/decorator-factory";
import {
  PropertyDecorator, ReviserDecoratorReturns, ReviserMessage,
  Reviser, ReviserConstructor
} from "@inter/decorator";

function TypeStructure<T = {}>(Clazz: ReviserConstructor<T>): PropertyDecorator {
  class ClazzClass extends Clazz {};

  const ins: Reviser<T> = new ClazzClass();

  function decorator(target: any, key: string, value: any): ReviserDecoratorReturns<{}> {
    const message: ReviserMessage<T> = ins.map(value);
    if (message !== null) {
      return message;
    }
    target[key] = ins.get();
    return null;
  }

  return factory(decorator);
}

export default TypeStructure;

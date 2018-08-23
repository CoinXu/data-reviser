/**
 * @date 2018-08-23
 * @author xuchuanping
 * @description
 */

import {
  PropertyDecorator,
  ValidatorDecorator,
  ValidatorDecoratorHooks
} from "@/inter/decorator";
import { VALIDATOR_PRIVATE_PROPERTY_NAME as PROPERTY_NAME } from "@/constants";

export function factory<T = any>(decorator: ValidatorDecorator): PropertyDecorator {
  return function(target: any, key: string, descriptor?: any): any {
    const hooks: ValidatorDecoratorHooks<T> = target[PROPERTY_NAME] || (target[PROPERTY_NAME] = {});
    const list:  ValidatorDecorator[] = hooks[key] || (hooks[key] = []);

    list.push(decorator);
    return ;
  }
};

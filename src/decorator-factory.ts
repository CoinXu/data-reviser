/**
 * @date 2018-08-23
 * @author xuchuanping
 * @description
 */

import {
  PropertyDecorator,
  ReviserDecorator,
  ReviserDecoratorHooks
} from "@/inter/decorator";
import { REVISER_PRIVATE_PROPERTY_NAME as PROPERTY_NAME } from "@/constants";

export function factory<T = {}>(decorator: ReviserDecorator<T>): PropertyDecorator {
  return function(target: any, key: string, descriptor?: any): any {
    const hooks: ReviserDecoratorHooks<T> = target[PROPERTY_NAME] || (target[PROPERTY_NAME] = {});
    const list: ReviserDecorator<T>[] = hooks[key] || (hooks[key] = []);

    list.push(decorator);
    return ;
  }
};

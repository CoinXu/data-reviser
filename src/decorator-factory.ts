/**
 * @date 2018-08-23
 * @author xuchuanping
 * @description
 */

import {
  PropertyDecorator, ReviserDecorator, ReviserDecoratorHooks,
  ReviserDecoratorStruct, ReviserDecoratorOptions
} from "@/inter/decorator";
import { REVISER_PRIVATE_PROPERTY_NAME as NAME } from "@/constants";

const hasOwnProperty = Object.prototype.hasOwnProperty;

export function factory<T = {}>(decorator: ReviserDecorator<T>, options?: ReviserDecoratorOptions): PropertyDecorator {
  return function(target: any, key: string, descriptor?: any): void {
    const hooks: ReviserDecoratorHooks<T> = hasOwnProperty.call(target, NAME)
      ? target[NAME]
      : (target[NAME] = {});

    const keyHooks: ReviserDecoratorStruct<T> = hooks[key] || (hooks[key] = {
      decorators: [],
      options: {
        required: false
      }
    });

    keyHooks.decorators.push(decorator);

    if (options) {
      for (const propKey in options) {
        if (hasOwnProperty.call(options, propKey)) {
          keyHooks.options[propKey] = options[propKey];
        }
      }
    }
  }
};

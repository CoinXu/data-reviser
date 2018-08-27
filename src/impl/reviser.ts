/**
 * @date 2017-07-17
 * @author zhuoyihan
 * @description 实体类父类
 */

import { REVISER_PRIVATE_PROPERTY_NAME as PROPERTY_NAME } from "@/constants";
import {
  Reviser as IReviser,
  ReviserDecorator,
  ReviserDecoratorReturns,
  ReviserDecoratorHooks,
  ReviserMessage
} from "@inter/decorator"

const hasOwnProperty = Object.prototype.hasOwnProperty;

export class Reviser<T = any> implements IReviser<T> {
  private maps: T;

  public constructor() {
    this.maps = <T>{};
  }

  private getDecoratedProperties(): string[] {
    return Object.keys(this.getDecoratorHooks());
  }

  private getDecoratedValues(): Partial<T> {
    const values: any = {};

    this.getDecoratedProperties().reduce((object, name) => {
      object[name] = this[name];
      return object;
    }, values);

    return values as Partial<T>;
  }

  private getDecoratorHooks(): ReviserDecoratorHooks<T> {
    const hooks: any = this[PROPERTY_NAME] || (this[PROPERTY_NAME] = {});
    return ({ ...hooks }) as ReviserDecoratorHooks<T>;
  }

  public get(): T {
    const hooks: ReviserDecoratorHooks<T> = this.getDecoratorHooks();
    const values: any = this.getDecoratedValues();
    const maps: any = this.maps;
    const data: any = { ...values, ...maps };

    for (const propKey in hooks) {
      if (!hasOwnProperty.call(hooks, propKey)) {
        continue;
      }

      for (const decorator of hooks[propKey]) {
        decorator(maps, propKey, data[propKey]);
      }
    }

    return { ...values, ...maps } as T;
  }

  public set(data: any): ReviserMessage<T> {
    return this.map(data);
  }

  public map(data: any): ReviserMessage<T> {
    const maps: T = this.maps;
    const hooks: ReviserDecoratorHooks<T> = this.getDecoratorHooks();
    const messages: ReviserMessage<T> = {};

    let hasMessage = false;

    for (const propKey in hooks) {
      if (!hasOwnProperty.call(hooks, propKey)) {
        continue;
      }

      for (const decorator of hooks[propKey]) {
        const m: ReviserDecoratorReturns<T> = decorator(maps, propKey, data[propKey]);
        if (m !== null) {
          messages[propKey] = m;
          hasMessage = true;
        }
      }
    }

    return hasMessage ? messages : null;
  }
}

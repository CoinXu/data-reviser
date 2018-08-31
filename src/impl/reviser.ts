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
  private _maps: T;
  private _hooks: ReviserDecoratorHooks<T>;

  public constructor() {
    let hooks: any = {};
    let proto: any = (<any>this).__proto__;

    while (proto !== null) {
      // Keep feature of extends semantics: Override.
      // Do not interchange position between `proto[PROPERTY_NAME]` and `hooks`
      hooks = {
        ...proto[PROPERTY_NAME],
        ...hooks
      };
      proto = proto.__proto__;
    }

    this._maps = <T>{};
    this._hooks = <ReviserDecoratorHooks<T>>hooks;
  }

  private getDecoratedPropertyNames(): string[] {
    return Object.keys(<any>this._hooks);
  }

  private getDecoratedPropertyValues(): Partial<T> {
    const values: any = this.getDecoratedPropertyNames().reduce((object, name) => {
      object[name] = this[name];
      return object;
    }, {});

    return values as Partial<T>;
  }

  public get(): T {
    const hooks: ReviserDecoratorHooks<T> = this._hooks;
    const values: any = this.getDecoratedPropertyValues();
    const maps: any = this._maps;
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
    const maps: T = this._maps;
    const hooks: ReviserDecoratorHooks<T> = this._hooks;
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

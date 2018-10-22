/**
 * @date 2017-07-17
 * @author zhuoyihan
 * @description 实体类父类
 */

import { REVISER_PRIVATE_PROPERTY_NAME as PROPERTY_NAME } from "@/constants";
import { PrimitiveTypes, getPrimitiveType } from "@impl/utils";
import {
  Reviser as IReviser, ReviserDecorator, ReviserDecoratorReturns,
  ReviserDecoratorHooks, ReviserMessage, ReviserDecoratorStruct
} from "@inter/decorator"

const hasOwnProperty = Object.prototype.hasOwnProperty;

export class Reviser<T = any> implements IReviser<T> {
  private _maps: T;
  private _defaults: T;
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

  private getDecoratedPropertyValues(): T {
    const values: any = this.getDecoratedPropertyNames().reduce((object, name) => {
      object[name] = this[name];
      return object;
    }, {});

    return <T>values;
  }

  private getDecoratedPropertyDefaultValues(): T {
    const hooks: ReviserDecoratorHooks<T> = this._hooks;
    const data: any = this.getDecoratedPropertyValues();
    const maps: any = { ...data };

    for (const propKey in hooks) {
      if (!hasOwnProperty.call(hooks, propKey)) {
        continue;
      }

      const struct: ReviserDecoratorStruct<T> = hooks[propKey];
      for (const decorator of struct.decorators) {
        decorator(maps, propKey, data[propKey], struct.options);
      }
    }

    return <T>maps;
  }

  public get(defaults = false): T {
    if (defaults && !this._defaults) {
      this._defaults = this.getDecoratedPropertyDefaultValues();
    }

    if (defaults) {
      return <T>{
        ...(<any>this._defaults),
        ...(<any>this._maps)
      };
    }

    return { ...(<any>this._maps) };
  }

  public set(data: any): ReviserMessage<T> {
    return this.map(data);
  }

  public map(data: any): ReviserMessage<T> {
    const type: string = getPrimitiveType(data);

    if (type !== PrimitiveTypes.Object && type !== PrimitiveTypes.Array) {
      throw new TypeError("Reviser#map expected an Object or an Array but got " + type);
    }

    const maps: T = this._maps;
    const hooks: ReviserDecoratorHooks<T> = this._hooks;
    const messages: ReviserMessage<T> = {};

    let hasMessage = false;

    for (const propKey in hooks) {
      if (!hasOwnProperty.call(hooks, propKey)) {
        continue;
      }

      const struct: ReviserDecoratorStruct<T> = hooks[propKey];
      for (const decorator of struct.decorators) {
        const m: ReviserDecoratorReturns<T> = decorator(maps, propKey, data[propKey], struct.options);
        if (m !== null) {
          messages[propKey] = m;
          hasMessage = true;
        }
      }
    }

    return hasMessage ? messages : null;
  }
}

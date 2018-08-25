/**
 * @date 2017-07-17
 * @author zhuoyihan
 * @description 实体类父类
 */

import { VALIDATOR_PRIVATE_PROPERTY_NAME as PROPERTY_NAME } from "@/constants";
import {
  Validator as IValidator,
  ValidatorDecorator,
  ValidatorDecoratorReturns,
  ValidatorDecoratorHooks,
  ValidatorMessage
} from "@inter/decorator"

const hasOwnProperty = Object.prototype.hasOwnProperty;

export class Validator<T = any> implements IValidator<T> {
  private maps: T;

  public constructor() {
    this.maps = <T>{};
  }

  /**
   * Alias of Validator#map
   * @deprecated
   */
  public setModel(data: any): ValidatorMessage<T> {
    return this.map(data);
  }

  /**
   * Alias of Validator#get
   * @deprecated
   */
  public getModel(): T {
    return this.get();
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

  private getDecoratorHooks(): ValidatorDecoratorHooks<T> {
    const hooks: any = this[PROPERTY_NAME] || (this[PROPERTY_NAME] = {});
    return ({ ...hooks }) as ValidatorDecoratorHooks<T>;
  }

  public get(): T {
    const hooks: ValidatorDecoratorHooks<T> = this.getDecoratorHooks();
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

  public set(data: any): ValidatorMessage<T> {
    return this.map(data);
  }

  public map(data: any): ValidatorMessage<T> {
    const maps: T = this.maps;
    const hooks: ValidatorDecoratorHooks<T> = this.getDecoratorHooks();
    const messages: ValidatorMessage<T> = {};

    let hasMessage = false;

    for (const propKey in hooks) {
      if (!hasOwnProperty.call(hooks, propKey)) {
        continue;
      }

      for (const decorator of hooks[propKey]) {
        const m: ValidatorDecoratorReturns<T> = decorator(maps, propKey, data[propKey]);
        if (m !== null) {
          messages[propKey] = m;
          hasMessage = true;
        }
      }
    }

    return hasMessage ? messages : null;
  }
}

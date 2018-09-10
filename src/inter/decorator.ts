/**
 * @date 2017-07-17
 * @author zhuoyihan
 * @description 接口类
 */

/**
 * Define Reviser message
 */
type ReviserMessageType = string | null;

type ReviserPartialMessageType<T> = {
  [P in keyof T]?: ReviserMessageType;
};

export type ReviserDecoratorReturns<T> = ReviserMessageType | ReviserPartialMessageType<T>;

type ReviserPartialMessage<T> = {
  [P in keyof T]?: ReviserDecoratorReturns<T>;
};

export type ReviserMessage<T> = ReviserPartialMessage<T> |  null;

/**
 * Define class Reviser
 */
export interface Reviser<T> {
  get(): T;
  set(model: any): ReviserMessage<T>;
  map(model: any): ReviserMessage<T>;
};

export interface ReviserConstructor<T> {
  new(): Reviser<T>
}

export interface PropertyDecorator {
  (target: any, key: string, descriptor?: any): any
};

/**
 * Define Reviser Decorator
 */
export interface ReviserDecoratorOptions {
  required: boolean;
};

export interface ReviserDecorator<T> {
  (target: any, key: string, value: any, options: ReviserDecoratorOptions): ReviserDecoratorReturns<T>;
};

export interface ReviserDecoratorStruct<T> {
  decorators: ReviserDecorator<T>[];
  options: ReviserDecoratorOptions
};

export type ReviserDecoratorHooks<T> = {
  [P in keyof T]?: ReviserDecoratorStruct<T>;
};

export interface ReviserMessageData<T = any> {
  key: string;
  value: T;
};

export interface Enum {
  enum: string;
  value?: number
}

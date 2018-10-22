/**
 * @date 2018-08-23
 * @author xuchuanping
 * @description For developer test at browser.
 */

import { expect, assert } from "chai";
import { ReviserMessage } from "@inter/decorator";
import { Reviser, TypeInt32, TypeArray, TypeArrayStruct, Required, ToInt32 } from "@/index";

class Foo extends Reviser {
  @TypeInt32()
  @Required()
  foo = 0;
}

class Bar extends Reviser {
  @TypeArrayStruct(Foo)
  foo = [];
  @TypeArray([Required(), TypeInt32(), ToInt32])
  bar = 0;
}

const foo = new Foo();
const bar = new Bar();

(window as any).foo = foo;
(window as any).bar = bar;

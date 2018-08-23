/**
 * @date 2018-08-23
 * @author xuchuanping
 * @description For developer test at browser.
 */

import * as Reviser from "@/index";
import { Validator, DecoRequire, DecoInt32 } from "@/index";
import { PropertyDecorator } from "@inter/decorator";
import { factory } from "@/decorator-factory";

const TestDecoratorToSet: string = "TestDecoratorToSet";
const TestDecorator: PropertyDecorator = factory(function(target: any, key: string, value: any): any {
  target[key] = TestDecoratorToSet;
});

class M extends Validator<any> {
  @TestDecorator
  str = "";
};

const m = new M();
m.map({ str: 1 });

const data = m.get();
console.log('data', data);

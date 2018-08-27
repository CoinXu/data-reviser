/**
 * @date 2018-08-24
 * @author xuchuanping
 * @description Translate value be a string type.
 */

import { factory } from "@/decorator-factory";
import { PropertyDecorator, ReviserMessage } from "@inter/decorator";

function decorator(target: any, key: string, value: any): null {
  target[key] = String(value).valueOf();
  return null;
}

const DecoToString: PropertyDecorator = factory(decorator);

export default DecoToString;

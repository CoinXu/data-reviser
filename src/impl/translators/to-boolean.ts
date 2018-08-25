/**
 * @date 2018-08-25
 * @author xuchuanping
 * @description Translate value be a boolean type.
 */

import { factory } from "@/decorator-factory";
import { PropertyDecorator, ValidatorMessage } from "@inter/decorator";

function decorator(target: any, key: string, value: any): null {
  target[key] = Boolean(value).valueOf();
  return null;
}

const DecoToBoolean: PropertyDecorator = factory(decorator);

export default DecoToBoolean;

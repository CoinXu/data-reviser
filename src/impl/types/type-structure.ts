/**
 * @date 2018-08-24
 * @author xuchuanping
 * @description
 */

import { factory } from "@/decorator-factory";
import { Validator } from "@impl/Validator";
import { VALIDATOR_PRIVATE_PROPERTY_NAME } from "@/constants";
import {
  PropertyDecorator, ValidatorDecoratorReturns, ValidatorDecoratorHooks
} from "@inter/decorator";

// function TypeStructure(Clazz: Validator, message?: string): PropertyDecorator {
//   function decorator(target: any, key: string, value: any): ValidatorDecoratorReturns<{}> {
//     // const hooks: ValidatorDecoratorHooks<Clazz> = Clazz.prototype[VALIDATOR_PRIVATE_PROPERTY_NAME];

//   }

//   return factory(decorator);
// }

// export default TypeStructure;

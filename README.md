# Features
1. Validate data type and data structure.
2. Translate data type.

# Build Setup
```bash
yarn install    # Dependecies
yarn run dev    # Dev
yarn run build  # Build
yarn run test   # Test
```

# Installation
```bash
npm install param-veri --registry=http://npm.100.com
# or
yarn add param-veri --registry=http://npm.100.com
```

# Usage

### Basic Usage
```js
import { Validator, DecoInt32, ToInt32 } from 'param-veri';

class M extends Validator {
  @ToInt32
  @DecoInt32()
  num = 1;
};

const m = new M();
const message = m.set({ num: '123'});

console.log(message);  // { num: { type: string, message: string }}
console.log(m.get());  // { num: 123 }
```

### Inherit
```js
class N extends M {
  @ToInt32
  str = '';
};

const n = new N();
const message = m.set({ str: 123 });

console.log(message);  // null
console.log(m.get());  // { num: 1, str: '123'}
```

More example see test case.

# API documentation

### Interface

#### IParamWrongMsg
```ts
interface IParamWrongMsg {
  type: string,
  msg?: string,
  index?: string,
  key?: object
}
```

### class Validator
Base class. Your class must extends of this if your want use decorators in this library.
#### #setModel(data: object): object
`deprecated`

#### #getModel(): object
`deprecated`

#### #get(): object
Get values that proccessed by decorators.

#### #set(data: object): object | null
Upgrade model through data. Will return object that contains messages
if occur error other wish null.

#### #map(data: object): object
Alais of `set` method.

## Decorators

### Types
+ @TypeBoolean(message?: string)
+ @TypeDouble(message?: string)
+ @TypeEmail(message?: string)
+ @TypeFloat(message?: string)
+ @TypeInt32(message?: string)
+ @TypeInt64(message?: string)
+ @TypePhone(message?: string)
+ @TypeString(message?: string)
+ @TypeStruct(message?: string)
+ @TypeUnInt32(message?: string)
+ @TypeUnInt64(message?: string)

### Translators
+ @ToBoolean
+ @ToDouble
+ @ToFloat
+ @ToInt32
+ @ToInt64
+ @ToString
+ @ToUnInt32
+ @ToUnInt64

### Validators
+ @DecoMaxLength(message?: string)
+ @DecoMinLength(message?: string)
+ @DecoRequired(message?: string)

### Will remove at next version
+ @DecoBoolean(message: string) `deprecated`
+ @DecoDouble(message: string) `deprecated`
+ @DecoFloat(message: string) `deprecated`
+ @DecoInt32(message: string) `deprecated`
+ @DecoInt64(message: string) `deprecated`
+ @DecoStruct(message: string) `deprecated`
+ @DecoString(message: string) `deprecated`
+ @DecoUnInt32(message: string) `deprecated`
+ @DecoUnInt64(message: string) `deprecated`
+ @StructType(base: Validator) `deprecated`
+ @DecoRequire(message: string) `deprecated`
+ @DecoEmail(message: string) `deprecated`
+ @DecoPhone(message: string) `deprecated`
+ @DecoMinLength(limit: number, message: string) `deprecated`
+ @DecoMaxLength(limit: number, message: string) `deprecated`

### Removed
+ @DecoArray(type: VERI_TYPE, message?: string, deep: number)

# For contributors
TODO

# Licence
[MIT](https://opensource.org/licenses/MIT)

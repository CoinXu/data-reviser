# Features
1. Validate data type and data structure.
2. Translate data type.

# Build Setup
``` bash
# Dependecies
yarn install

# Dev
yarn run dev

# Build
yarn run build

# Test
yarn run test
```

# Installation
```
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

# API documentation
### Constatns

#### VERI_TYPE
```ts
enum VERI_TYPE = {
  INT32,
  INT64,
  DOUBLE,
  FLOAT,
  STRING,
  STRUCT,
  UNINT32,
  UNINT64,
  BOOLEAN,
  EMAIL,
  PHONE
};
```

#### ERROR_TYPE
```ts
enum ERROR_TYPE = {
  TYPE_ERROR,
  SIZE_ERROR,
  REQUIRE_ERROR,
  LENGTH_MIN_ERRO
  LENGTH_MAX_ERRO,
}
```

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
### Data Type & Structure validators

+ @DecoArray(type: VERI_TYPE, message?: string, deep: number)
+ @DecoBoolean(message: string)
+ @DecoDouble(message: string)
+ @DecoFloat(message: string)
+ @DecoInt32(message: string)
+ @DecoInt64(message: string)
+ @DecoStruct(message: string)
+ @DecoString(message: string)
+ @DecoUnInt32(message: string)
+ @DecoUnInt64(message: string)
+ @StructType(base: Validator)
+ @DecoRequire(message: string)
+ @DecoEmail(message: string)
+ @DecoPhone(message: string)
+ @DecoMinLength(limit: number, message: string)
+ @DecoMaxLength(limit: number, message: string)

### Data Type Translators

+ @ToDouble
+ @ToFloat
+ @ToInt32
+ @ToInt64
+ @ToString

# For developer

TODO

# Licence
[MIT](https://opensource.org/licenses/MIT)

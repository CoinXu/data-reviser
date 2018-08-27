[![Build Status](https://www.travis-ci.org/CoinXu/reviser.svg?branch=master)](https://www.travis-ci.org/CoinXu/reviser)
[![npm version](https://badge.fury.io/js/data-reviser.svg)](https://badge.fury.io/js/data-reviser)
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
npm install data-reviser
# or
yarn add data-reviser
```

# Usage

### Basic Usage
```js
import { Reviser, TypeInt32, ToInt32 } from 'data-reviser';

class M extends Reviser {
  @ToInt32
  @TypeInt32()
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
TODO

### class Reviser
Base class. Your class must extends of this if your want use decorators in this library.

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

# For contributors
TODO

# Licence
[MIT](https://opensource.org/licenses/MIT)

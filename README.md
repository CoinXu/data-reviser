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

## Basic Usage
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

## Inherit
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

More example see [test case](./test/index.ts).

# API documentation

## Interface
TODO

## class Reviser
Basic class. Your class must extends of this if your want use decorators in this library.

### #get(): object
Get values that proccessed by decorators.

### #set(data: object): object | null
Upgrade model through data. Will return object that contains messages
if occur error other wish null.

### #map(data: object): object
Alais of `set` method.

# Decorators

## Types

### @TypeBoolean(template?: string)
Params for template:
+ key: string
+ value: any
+ type: string

Example:
```js
@TypeBoolean('{{key}} expected a Boolean but got {{type}}: {{value}}');
```

### @TypeDouble(message?: string | object)
Params for template:
+ type: type error.
  + key: string
  + value: any
  + type: string

+ gt: great than max value.
  + key: string
  + value: number
  + limit: number - number of max value

+ lt: less than min value.
  + key: string
  + value: number
  + limit: number - number of min value

Example:
```js
@TypeDouble('not a double value')
@TypeDouble({ type: 'expected a Number but got {{type}}' })
@TypeDouble({ gt: 'type double must less than {{limit}} but got {{value}}' })
@TypeDouble({ lt: 'type double must great than {{limit}} but got {{value}}' })

// or
@TypeDouble({
  type: 'expected a Number but got {{type}}',
  gt: 'type double must less than {{limit}} but got {{value}}',
  lt: 'type double must great than {{limit}} but got {{value}}'
})
```

### @TypeEmail(template?: string | object)
Params for template:
+ type: type error.
  + key: string
  + value: any
  + type: string

+ pattern: pattern error.
  + key: string
  + value: string

### @TypeFloat(template?: string | object)
See [@TypeDouble](#@typedouble)

### @TypeInt32(template?: string | object)
See [@TypeDouble](#@typedouble)

### @TypeInt64(template?: string | object)
See [@TypeDouble](#@typedouble)

### @TypePhone(template?: string | object)
Params for template:
+ type: type error.
  + key: string
  + value: any
  + type: string

+ empty: zero length.
  + key: string
  + value: string

### @TypeString(template?: string)
See [@TypeBoolean](#@typeboolean)

### @TypeStruct(Clazz: Reviser)
Example:
```js
import { Reviser, TypeString, TypeStruct } from 'data-reviser';

class M extends Reviser {
  @TypeString("Property {{key}} expected String but got {{type}}")
  foo = "";
};

class N extends Reivser {
  @TypeStruct(M)
  bar = {};
};
```
### @TypeUnInt32(template?: string | object)
See [@TypeDouble](#@typedouble)

### @TypeUnInt64(template?: string | object)
See [@TypeDouble](#@typedouble)

## Translators
+ @ToBoolean
+ @ToDouble
+ @ToFloat
+ @ToInt32
+ @ToInt64
+ @ToString
+ @ToUnInt32
+ @ToUnInt64

## Validators
### @DecoMaxLength(template?: string | object)
Params for template:
+ type: type error.
  + key: string
  + value: any
  + type: string

+ gt: great than max length
  + key: string
  + value: string
  + limit: number

### @DecoMinLength(template?: string | object)
See [@DecoMaxLength](#@decomaxlength)

### @DecoRequired(template?: string | object)
Params for template:
+ type: type error.
  + key: string
  + value: any
  + type: string

+ empty: zero length
  + key: string
  + value: any

# For contributors
TODO

# Licence
[MIT](https://opensource.org/licenses/MIT)

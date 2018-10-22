
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

### TypeArrayStruct(Clazz: Reviser, tepmlate?: string)
Params for template:
+ type: type error.
  + key: string
  + value: any
  + type: string

```js
class N extends Reviser {
  @TypeInt32()
  p = 1;
};

class M extends Reviser {
  @TypeArrayStruct(N)
  n = [];
}
```

### TypeArray(decorators?: PropertyDecorator[], template?: string)
Params for template:
+ type: type error.
  + key: string
  + value: any
  + type: string

```js
class M extends Reviser {
  @TypeArray()
  p = [];

  @TypeArray([Required(), TypeInt32()])
  @Required()
  m = [];

  @TypeArray([], "got data type: {{type}}")
  n = [];
};
```

### TypeBoolean(template?: string)
Params for template:
+ key: string
+ value: any
+ type: string

Example:
```js
TypeBoolean('{{key}} expected a Boolean but got {{type}}: {{value}}');
```

### TypeDouble(message?: string | object)
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
TypeDouble('not a double value')
TypeDouble({ type: 'expected a Number but got {{type}}' })
TypeDouble({ gt: 'type double must less than {{limit}} but got {{value}}' })
TypeDouble({ lt: 'type double must great than {{limit}} but got {{value}}' })

// or
TypeDouble({
  type: 'expected a Number but got {{type}}',
  gt: 'type double must less than {{limit}} but got {{value}}',
  lt: 'type double must great than {{limit}} but got {{value}}'
})
```

### TypeEmail(template?: string | object)
Params for template:
+ type: type error.
  + key: string
  + value: any
  + type: string

+ pattern: pattern error.
  + key: string
  + value: string

### TypeFloat(template?: string | object)
See [TypeDouble](#typedouble)

### TypeInt32(template?: string | object)
See [TypeDouble](#typedouble)

### TypeInt64(template?: string | object)
See [TypeDouble](#typedouble)

### TypePhone(template?: string | object)
Params for template:
+ type: type error.
  + key: string
  + value: any
  + type: string

+ empty: zero length.
  + key: string
  + value: string

### TypeString(template?: string)
See [TypeBoolean](#typeboolean)

### TypeStruct(Clazz: Reviser)
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
### TypeUnInt32(template?: string | object)
See [TypeDouble](#typedouble)

### TypeUnInt64(template?: string | object)
See [TypeDouble](#typedouble)

## Translators
+ ToBoolean
+ ToDouble
+ ToFloat
+ ToInt32
+ ToInt64
+ ToString
+ ToUnInt32
+ ToUnInt64

Translator example:
```js
class M extends Reviser {
  @ToInt32
  m = 0;

  @ToBoolean
  b = false;
}
```

## Validators
### MaxLength(limit: number, template?: string | object)
Params for template:
+ type: type error.
  + key: string
  + value: any
  + type: string

+ gt: great than max length
  + key: string
  + value: string
  + limit: number

### Max(limit: number, template?: string | object)
Params for template:
+ type: type error.
  + key: string
  + value: any
  + type: string

+ gt: great than max
  + key: string
  + value: string
  + limit: number

### MinLength(template?: string | object)
See [MaxLength](#maxlength)

### Min(limit: number, template?: string | object)
Params for template:
+ type: type error.
  + key: string
  + value: any
  + type: string

+ lt: great than max
  + key: string
  + value: string
  + limit: number

### Required(template?: string | object)
Params for template:
+ type: type error.
  + key: string
  + value: any
  + type: string

+ empty: zero length
  + key: string
  + value: any

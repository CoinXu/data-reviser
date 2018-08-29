# v0.0.13
### Fixed
1. Messate template parser bug.

```js
// do
const str = parse('key is {{key}}', {});
console.log(str);
// previous: 'key is '
// current: 'key is {{key}}'
```

# v0.0.12
### Fixed
1. Messate template parser bug.

# v0.0.11
### Replace class name Validator to Reviser
### Add decorators

#### Translators
+ @ToBoolean
+ @ToDouble
+ @ToFloat
+ @ToInt32
+ @ToInt64
+ @ToString
+ @ToUnInt32
+ @ToUnInt64

#### types
+ @TypeBoolean
+ @TypeDouble
+ @TypeEmail
+ @TypeFloat
+ @TypeInt32
+ @TypeInt64
+ @TypePhone
+ @TypeString
+ @TypeStruct
+ @TypeUnInt32
+ @TypeUnInt6

#### validators
+ @DecoMaxLength
+ @DecoMinLength
+ @DecoRequired

# v0.0.10
### Add get, set, map to class Validator
+ map(data: any): object | null
+ set(data: any): object | null
+ get(): object

### Add decorators for tanslate data type.
+ ToString
+ ToInt32
+ ToInt64
+ ToFloat
+ ToDouble

# v0.0.9
+ 修复没有默认值无法验证问题
+ 修复babel编译条件下，没有默认值属性被设置为readOnly导致出错问题

# v0.0.8
+ 修复继承导致子类属性也验证问题


# v0.0.9
+ 修复没有默认值无法验证问题
+ 修复babel编译条件下，没有默认值属性被设置为readOnly导致出错问题

# v0.0.8
+ 修复继承导致子类属性也验证问题

# v0.0.19
## Fixed
1.  `TypeStruct` and `TypeArrayStruct`: Create new instance in each valid.

# v0.0.16
## Breaking changes
1. All of decorators in this library will ignore non-required property while pass a non-required value.

## Reviser#get
Add a boolean param named defaults. default `false`. Will return property default value while `true`.
```js
class M extends Reviser {
	@ToBoolean
	n = 1;
}
const m = new M();
console.log(m.get())     // {}
console.log(m.get(true)) // { n: true }
```

# v0.0.15
### Fixed
1. Fix properties confusion bug at mutiple class extend same class.

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

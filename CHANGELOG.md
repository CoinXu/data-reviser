# v0.1.0
## Validator类名替换为Reviser
## 增加装饰器函数

### Translators
+ @ToBoolean
+ @ToDouble
+ @ToFloat
+ @ToInt32
+ @ToInt64
+ @ToString
+ @ToUnInt32
+ @ToUnInt64

### types
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

### validators
+ @DecoMaxLength
+ @DecoMinLength
+ @DecoRequired

# v0.0.10
## Validator类增加 get, set, map方法
+ map(data: any): object | null
+ set(data: any): object | null
+ get(): object

## 增加数据类型转换装饰器
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

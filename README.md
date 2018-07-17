# paramveri

> check ajax param

## Build Setup

``` bash
# install dependencies
npm install

# 开发测试运行，localhost:80
npm run dev

# 构建发布
npm run build
```


## 项目结构
```
src----inter:定义接口
 |-----impl:接口实现
         |-----validators: 验证器
         |-----Decorators: 装饰器
                    |--------TypeDecorators: 验证参数类型装饰器
                    |--------DecoRequire.ts: 验证参数是否必须
                    |--------index.ts: 装饰器入口
                    |--------StructType: 配合struct类型验证使用装饰器
         |-----Validator.ts: 所有实体类父类
 |-----script
         |-----index.js: 总入口
         |-----staticData: 全局静态变量
 |-----page:开发使用，测试页面
 |-----entry:开发使用，实体类
 |-----router:开发使用，路由
```

## 安装与使用
### 安装
```
npm install paramveri --registry=http://npm.100.com
或者
yarn add paramveri --registry=http://npm.100.com
```
### 使用
可参考src/page与src/entry的测试用例

#### 验证装饰器
+ `@decoInt32(errMsg:string)`： 检测修饰的值是否为合法的int32
+ `@decoInt64(errMsg:string)`:  检测修饰的值是否为合法的int64
+ `@decoDouble(errMsg:string)`:  检测修饰的值是否为合法的double
+ `@decoFloat(errMsg:string)`:  检测修饰的值是否为合法的float
+ `@decoString(errMsg:string)`:  检测修饰的值是否为合法的string
+ `@decoStruct(errMsg:string)`:  检测修饰的值是否为合法的struct
+ `@decoUnInt32(errMsg:string)`:  检测修饰的值是否为合法的unsign int32
+ `@decoUnInt64(errMsg:string)`:  检测修饰的值是否为合法的unsign int64
+ `@decoBoolean(errMsg:string)`:  检测修饰的值是否为合法的boolean
+ `@decoArray(arrayType:string, errMsg:string)`:  检测修饰的值是否为合法的array

```

errMsg：自定义错误信息，默认为空
arrayType: 数组项类型,参考VERI_TYPE

```

#### require装饰器
+ `@DecoRequire(errMsg:string)`: 检测修饰的值为require

```

errMsg：自定义错误信息，默认为空

```

#### 实体装饰器
+ `@structType(class)`: 配合@decoStruct使用，用于声明struct参数格式

#### Validator
+ `setModel`: 设置model，返回错误信息,参考IErrMsg
+ `getModel`: 返回Model

eg:
```ts
import paramVeri from "../script/index";
import Test1ObjEntry from "./Test1ObjEntry";

// 测试用实体类
class Test1Entry extends paramVeri.Validator{

  @paramVeri.DecoRequire("require")
  @paramVeri.DecoInt32("num is wrong")
  num1: number = 1;

  @paramVeri.DecoInt64("发生错误")
  num64: number = 1;

  @paramVeri.DecoUnInt32("error",)
  unnum32: number = 1;

  @paramVeri.DecoUnInt64("")
  unnum64: number = 1;

  @paramVeri.DecoDouble("double is require",)
  double: number = 1.0;

  @paramVeri.DecoFloat("发生错误")
  float: number = 1.0;

  @paramVeri.DecoString("")
  str: string = "demo";

  @paramVeri.DecoBoolean("error")
  boo: boolean = false;

  @paramVeri.DecoArray(paramVeri.VERI_TYPE.INT32,"")
  numarr: Array<any> = [];

  @paramVeri.DecoStruct("error")
  @paramVeri.StructType(Test1ObjEntry)
  obj: Test1ObjEntry = new Test1ObjEntry();

}
```


#### 静态变量与接口
+ `VERI_TYPE`: 参数类型

```js
VERI_TYPE = {
  INT32: "int32",
  INT64: "int64",
  DOUBLE: "double",
  FLOAT: "float",
  STRING: "string",
  STRUCT: "struct",
  UNINT32: "unsign int32",
  UNINT64: "unsign int64",
  BOOLEAN: "boolean",
  ARRAY: "array"
};
```
+ `ERROR_TYPE`: 错误类型

```js
ERROR_TYPE = {
  TYPE_ERROR: "type error",
  SIZE_ERROR: "size error",
  REQUIRE_ERROR: "require error"
};
```

+ ``: 错误信息

```ts
IErrMsg {
  type: string,
  msg?: string,
  index?: Array<number>
}
```
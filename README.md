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

# 测试
npm run test
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
test: 测试用例
publish: 发布的包以及typings所在
```

## 安装与使用
### 安装
```
npm install param-veri --registry=http://npm.100.com
或者
yarn add param-veri --registry=http://npm.100.com
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
+ `@decoArray(arrayType:string, errMsg:string，level: number)`:  检测修饰的值是否为合法的array

```

errMsg：自定义错误信息，默认为空
arrayType: 数组项类型,参考VERI_TYPE
level: 数组维度，默认为1

```

#### require装饰器
+ `@DecoRequire(errMsg:string)`: 检测修饰的值为require,注：require装饰器需放在验证装饰器下方

```

errMsg：自定义错误信息，默认为空

```
eg:
```ts
  @paramVeri.DecoInt32("num is wrong")
  @paramVeri.DecoRequire("require")
  num1: number = 1;
```

#### 实体装饰器
+ `@structType(class)`: 配合@decoStruct使用，用于声明struct参数格式

#### Validator
+ `setModel(model: object)`: 设置model，返回错误信息

```ts
//返回值
{
    key1: IParamWrongMsg,
    key2: IParamWrongMsg,
    key3: [IParamWrongMsg,IParamWrongMsg]
}

```

+ `getModel`: 返回Model

eg:
```js
let data = {
    num1: 10,
    num64: 64,
    unnum32: 100,
    unnum64: 6400,
    double: 1.11,
    float: 1.1,
    str: "test",
    numarr: [1,2,3,4],
    boo: true,
    obj: {
        num: 11
    }
};
let obj = new test1ObjEntry();
obj.setModel(data.obj);
jQuery.extend(data,{
    obj: obj
})
let entry = new test1Entry();
let errmsg = entry.setModel(data);
let model = entry.getModel();
```

eg:
```ts
import paramVeri from "../script/index";
import Test1ObjEntry from "./Test1ObjEntry";

// 测试用实体类
class Test1Entry extends paramVeri.Validator{

  @paramVeri.DecoInt32("num is wrong")
  @paramVeri.DecoRequire("require")
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
  ARRAY
};
```
+ `ERROR_TYPE`: 错误类型

```js
enum ERROR_TYPE = {
  TYPE_ERROR,
  SIZE_ERROR,
  REQUIRE_ERROR
};
```

+ `IParamWrongMsg`: 错误信息

```ts
interface IParamWrongMsg {
  type: string,
  msg?: string,
  index?: string
}
```
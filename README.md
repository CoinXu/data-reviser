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
publish: 发布的包所在
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
+ `@decoEmail(errMsg:string)`:  检测修饰的值是否为合法的email
+ `@decoPhone(errMsg:string)`:  检测修饰的值是否为合法的phone
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

#### 长度装饰器
+ `@DecoMaxLength(size, errMsg)`: 声明参数最大长度
+ `@DecoMinLength(size, errMsg)`: 声明参数最小长度

```ts
  @paramVeri.DecoMaxLength(4,"length wrong")
  @paramVeri.DecoMinLength(2,"length wrong")
  str: string = "demo";
```

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
   mail: "2959581@qq.com",
   phone: 13561127191,
   numarr: [
     [[1,1],[1,1]],
     [[2,2],[2,2]],
   ],
   boo: true,
   obj: {
     obj1: {
       num: 11
     }
   }
 };
 let entry = new test1Entry();
 let errmsg = entry.setModel(data);
 let model = entry.getModel();
 console.log(model,errmsg);
```

eg:
```ts
import paramVeri from "../script/index";
import Test1ObjEntry from "./Test1ObjEntry";

// 测试用实体类
class Test1Entry extends paramVeri.Validator{


  @paramVeri.DecoInt32("wrong")
  @paramVeri.DecoRequire("require")
  num1: number = 1;

  @paramVeri.DecoInt64("wrong")
  @paramVeri.DecoRequire()
  num64: number = 1;

  @paramVeri.DecoUnInt32("wrong")
  unnum32: number = 1;

  @paramVeri.DecoUnInt64("wrong")
  unnum64: number = 1;

  @paramVeri.DecoDouble("wrong")
  double: number = 1.0;

  @paramVeri.DecoFloat("wrong")
  float: number = 1.0;

  @paramVeri.DecoMaxLength(4,"length wrong")
  @paramVeri.DecoMinLength(2,"length wrong")
  @paramVeri.DecoString("wrong")
  str: string = "demo";

  @paramVeri.DecoBoolean("wrong")
  boo: boolean = false;

  @paramVeri.DecoEmail("wrong")
  mail: string = "";

  @paramVeri.DecoPhone("wrong")
  phone: number = null;

  @paramVeri.DecoArray(paramVeri.VERI_TYPE.INT32,"wrong",3)
  numarr: Array<any> = [];

  @paramVeri.DecoStruct("wrong")
  @paramVeri.StructType(Test1ObjEntry)
  obj: object = {};

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
  ARRAY,
  EMAIL,
  PHONE
};
```
+ `ERROR_TYPE`: 错误类型

```js
enum ERROR_TYPE = {
  TYPE_ERROR,
  SIZE_ERROR,
  REQUIRE_ERROR,
  LENGTH_MIN_ERRO
  LENGTH_MAX_ERRO,
};
```

+ `IParamWrongMsg`: 错误信息

```ts
/**
 * 错误信息
 *
 * @param {string} type - 错误类型
 * @param {string} msg - 用户自定义错误信息
 * @param {string} index - 若为数组情况下，返回错误数据index, 若数组维度大于1， 以-分割
 * @param {IParamWrongMsg} key - 若为object情况下，返回错误数据对象
 */
interface IParamWrongMsg {
  type: string,
  msg?: string,
  index?: string,
  key?: object
}
```

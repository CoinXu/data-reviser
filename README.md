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

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).


## 项目结构
```
src----inter:定义接口
 |-----impl:接口实现
         |-----validators: 验证器
         |-----Decorators: 装饰器
 |-----script
         |-----index.js: 入口
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
```
1、装饰器
@decoInt32(errMsg:string,isRequire:boolean)
@decoDouble(errMsg:string,isRequire:boolean)
@decoFloat(errMsg:string,isRequire:boolean)
@decoInt64(errMsg:string,isRequire:boolean)
@decoString(errMsg:string,isRequire:boolean)
@decoStruct(errMsg:string,isRequire:boolean)
@decoUnInt32(errMsg:string,isRequire:boolean)
@decoUnInt64(errMsg:string,isRequire:boolean)
@decoBoolean(errMsg:string,isRequire:boolean)
@decoArray(arrayType: string,errMsg:string,isRequire:boolean)
errMsg：自定义错误信息，默认为空
isRequire：说明是否必须，默认为false
arrayType: 数组项类型,参考staticData.VERI_TYPE



2、
@structType(class)
装饰器配合@decoStruct，用于声明struct参数格式
eg:
@decoStruct("error",true)
@structType(Test1ObjEntry)
obj: test1ObjEntry = new test1ObjEntry();

3、
Validator
实体类父类，包装了setModel，getModel方法
setModel:设置model，返回错误信息{type: 错误类型（参考ERROR_TYPE），msg：自定义错误信息，index： 若为数组，指定数组下标}
getModel:返回Model

4、
静态变量
VERI_TYPE:参数类型
ERROR_TYPE:错误类型


```

注意：发布后export在ParamVeri中,eg:
```js
import {ParamVeri} from "paramveri";

export class objEntry extends ParamVeri.Validator{
  @ParamVeri.decoInt32("",true)
  num: number = 1;
}

```

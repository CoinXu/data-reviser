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
1、
@decorator(param,secondparam)
装饰器，param为验证的类型，包括：
VERI_TYPE = {
  INT32: "int32",
  INT64: "int64",
  DOUBLE: "double",
  FLOAT: "float",
  STRING: "string",
  STRUCT: "struct",
  UNINT32: "unsign int32",
  UNINT64: "unsign int64",
  ARRAY: "array"
};
secondparam只有在类型为VERI_TYPE.ARRAY的情况下才需要，用于声明数组内数据类型

2、
@structType(class)
装饰器配合@decorator使用，只有在类型为VERI_TYPE.STRUCT条件下才使用，用于声明struct参数格式
eg:
@decorator(VERI_TYPE.STRUCT)
@structType(test1ObjEntry)
obj: test1ObjEntry = new test1ObjEntry();

3、
Validator
实体类父类，包装了setModel，getModel方法
setModel:设置model，返回错误信息
getModel:返回Model

4、
staticData
包含各种静态变量
VERI_TYPE:参数类型
ERROR_TYPE:错误类型


```

注意：发布后export在ParamVeri中,eg:
```js
import {ParamVeri} from "paramveri";

export class objEntry extends ParamVeri.Validator{
  @ParamVeri.decorator(ParamVeri.VERI_TYPE.INT32)
  num: number = 1;
}

```

# git commit 规范

## 模版

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

## Type

- docs: 文档变动
- feat: 新特性
- fix: 修复 bug
- perf: 性能提升
- refactor: 重构（bug 修复、新增特性、代码优化等）
- style: 代码风格变化（空白符、格式化、添加分号等），不影响功能。
- test: 增加测试用例或修复测试用例 bug

## Scope

- build
- core
- reviser
- decorator

## Subject

一句话简介，结尾不用加句号，该句应该是一个动宾结构。如：
“搜索学生名称不能得到正确结果的异常已修复”就没有“修复搜索学生名称不能正确得到结果的异常”明了。

## Body

与 subject 一样也是动宾结构的描述，body 中需要写明具体做了什么事情，以列表的形式展现。
如有必要，请写明该次修改与上一次相比的优势在什么地方。

## Footer

描述该 commit 解决哪个 issue。

## 示例

```
refactor(build): 重构编译逻辑，使编译过程配置更清晰、删减无用代码。

调整如下：
- 修改编译目录、配置文件目录
- 重新配置ts配置
- 重新配置测试代码目录
- 重写测试用例

PR Close #2
```

# 创建 pull request 时填写的信息

目前没有更细的化分，与[commit message](./COMMIT_TEMPLATE.md)一样即可。

# 合并 commit

每次 commit 之前，需要执行`git pull origin master`以确保当前分支与 master 保持最新。
此时会自动产生一条 commit，内容大约如下：

```
Merge branch 'master' of https://code.yy.com/edu100FE/hippo-course into fix-34
```

该条 commit 与代码无关，所以应该合并，合并操作文档见：
[https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History](https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History)

# 删除合并分支产生的commit message
由于gitlab目前没有`squash and merge`合并选项，所以需要手工操作。__只有Master角色才能执行该操作__
设需要合并到master的分支名为`fix-to-merge`，在gitlab上创建一个PR后通知Master用户。
Master用户执行如下操作：

(1) 在本地创建`fix-to-merge`分支
```bash
git fetch origin
git checkout -b fix-to-merge origin/fix-to-merge
```
(2) 合并master代码到`fix-to-merge`
```bash
git merge master
```
(3) 合并更新
```bash
git checkout master
# squash 只能压缩没有push到master上的commit，master分支不允许强制push
git merge --no-ff fix-to-merge
git rebase -i HEAD~1
git push origin master
```

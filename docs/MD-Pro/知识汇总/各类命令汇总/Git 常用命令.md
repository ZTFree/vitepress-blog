# Git 常用命令


## add

- 提交修改到暂存区

```cmd
# 提交单文件修改
git add demo.txt
# 提交所有修改
git add .
```



## branch

- 分支查看、创建、删除

```cmd
# 所有分支查看
branch
# 分支创建
branch dev
# 分支删除(若分支未合并会报错)
branch -d dev
# 强制分支删除(分支未合也并不会报错)
branch -D branch
```

- 修改当前分支名

```powershell
git branch -m bname
# 强制修改
git branch -M bname
```



## checkout

- 分支切换

```cmd
# 切换分支
checkout dev
# 创建并切换分支
checkout -b dev
```

- 撤销工作区修改(未跟踪过的文件撤销无效)

```cmd
# 单文件撤销
checkout --demo.txt
# 全撤销
checkout .
```



## clone

- 克隆远程仓库至本地

```cmd
git clone origin-url
# 更改克隆下来的目录名
git clone origin-url mydir
```




## commit

- 暂存区内容提交到本地仓库

```cmd
commit -m "xxx"
```



## config

- 配置个人信息

```cmd
# 配置全局个人信息
git config --global user.name "Your Name"
git config --global user.email "email@example.com"

# 配置仓库个人信息
git config user.name "Your Name"
git config user.email "email@example.com"
```

- 设置创建仓库默认分支

```
git config --global init.defaultBranch 分支名
```



## diff

- 查看工作区修改

```cmd
# 查看所有修改
git diff
# 查看单文件修改
git diff demo.txt
```



## init

- 本地仓库初始化

```cmd
git init
```



## log

- 查看过去版本信息

```cmd
# 查看过去版本信息
git log
# 查看过去版本信息(单行形式)
git log --prety=oneline
# 查看过去3个版本信息
git log -3
```



## merge

- 合并分支

```cmd
# 当前分支将目标分支归纳合并
git merge dev
```



## pull

```cmd
git pull origin origin-branch:local-branch
```



## push

- 推送至远程仓库

```cmd
# 将本地仓库推送至指定远程仓库指定分支(并设为默认推送):-u表示若远程仓库无该分支则创建对应分支
git push -u origin dev
# 将本地仓库推送至远程仓库(已经配置远程仓库与分支)
git push 
# 强制推送
git push --force
```




## reflog

- 查看用户版本操作记录

```cmd
git reflog
```




## remote

- 远程仓库查看、添加、删除

```cmd
# 查看所有已添加的远程仓库
remote 
# 查看所有已添加的远程仓库及其地址
remote -v
# 添加远程仓库联系
remote add origin origin-url
# 移除远程仓库联系
remote rm origin
```



## reset

- 版本切换

```cmd
# 切换到当前版本的前1个版本
git reset --hard HEAD^
# 切换到当前版本的前2个版本
git reset --hard HEAD^^
# 切换到当前版本的前10个版本
git reset --head HEAD~10
# 切换到hash id对应的版本
git reset --head ab12f
```



## restore

- 撤销工作区修改

```cmd
# 单文件撤销
git restore demo.txt
# 全撤销
git restore .
```

- 撤销暂存区修改

```cmd
# 单文件撤销
git restore --staged demo.txt
# 全撤销
git restore --staged .
```



## rm

- 执行”删除文件“修改

```cmd
git rm demo.txt
```



## status

- 查看工作区与暂存区状态

```cmd
# 完整信息
git status
# 简略信息
git status -s
```




## switch

- 分支创建、切换

```cmd
# 分支切换（若远程存在则基于远程创建并切换，若没有则报错）
git switch dev
# 分支创建并切换
git switch -c dev
```





# 其它

## ssh-keygen

- ssh密钥生成

```cmd
ssh-keygen -t rsa -C "your email"
```



## git命令简写

- 修改用户/用户名下的`.gitconfig`文件

  ```
  [alias]
  	st = status -s
  	cmt = commit -m
  	radd = remote add
  	rrm = remote rm
  ```






# 未整理

## stash

- 储藏

```
git stash 
git stash list
git stash apply
git stash pop
git stash drop
```



## cherry

```
git cherry pick
```



## tag

```
git tag
```



## clean

```
git clean -df
```



## .gitignore书写格式

```

```









  





git pull = git fetch + git merge

# cmmitlint

- 全局安装

```
npm install -g commitizen cz-conventional-changelog
```



- 首次安装键入命令

```
echo { "path": "cz-conventional-changelog" }
```

- 执行cz

```
git cz
```



## 相关报错

- 若执行cz时，提示`The config file at "C:\Users\Zen\.czrc" contains invalid charset, expect utf8`，则将对应文件编码修改为utf8解决


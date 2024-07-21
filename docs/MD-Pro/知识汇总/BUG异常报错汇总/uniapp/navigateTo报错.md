# navigateTo报错：navigateTo:fail Navigation cancelled from "xxx" to "xxx" with a new navigation.

## 一、问题描述

- uniapp项目使用navigateTo Api进行路由跳转，跳转成功，但是仍有报错信息



 ## 二、产生原因

- 未知



## 三、解决办法

- 使用uni.addInterceptor对navigateTo进行拦截操作

```js
uni.addInterceptor('navigateTo', {
	fail(err) {
		return false
	}
})
```


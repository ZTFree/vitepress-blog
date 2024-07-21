# easycom组件模式导入uview失败

## 一、问题描述

- 按照uview官方文档配置easycom配置项，到了组件中无法自带导入uview组件

```json
// pages.json
{
	"easycom": {
		"^u-(.*)": "uview-ui/components/u-$1/u-$1.vue"
	},
	// ...
}
```



 ## 二、产生原因

- autoscan自动扫描组件（默认开启）需要符合`components/组件名称/组件名称.vue`格式，显然node_modules下的uview组件库路径不符合要求，需要用custom字段定义规则
- uview官网配置的easycom规则未在custom对象中，使用不当导致uview组件库无法自动导入



## 三、解决办法

```json
// pages.json
{
    "easycom": {
        "custom": {
            "^u-(.*)": "uview-ui/components/u-$1/u-$1.vue"
        }
    },
    // ...
}
```

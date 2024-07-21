# unplugin-vue-setup-extend-plus

## 功能

为.vue文件的setup语法糖的script标签设置name属性，即设置组件名

## 使用

### 安装

```powershell
pnpm i unplugin-vue-setup-extend-plus -D
```



### 配置

```ts
// vite.config.ts
import vueSetupExtend from 'unplugin-vue-setup-extend-plus/vite'

export default defineConfig({
  plugins: [
    vueSetupExtend({
      enableAutoExpose: true
    })
  ],
})
```

```vue
// .vue
<script setup name="xxx">
	// code
</script>
```



## 后记

Vue 3.3+ 的`defineOptions`不止可以设置name，还可以做更多事情。

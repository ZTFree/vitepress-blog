# [fail]路由router-view无法显示

## 一、问题描述

- 项目打包后用live-server运行，发现\<router-view>无法正常渲染

 ## 二、产生原因

- 开发模式下，路由`history`模式能正常显示
- 生产模式下，路由`history`模式需要后端配合才能正常显示

## 三、解决办法

将生成模式路由模式改为`hash`模式

- .env.production

```
VITE_ROUTER_MODE = hash
```

- router/index.js

```js
import 'vue/dist/vue.esm-bundler'
import {
  createRouter,
  createWebHistory,
  createWebHashHistory
} from 'vue-router'

// 根据状态改变路由模式
const historyMode =
  import.meta.env.VITE_ROUTER_MODE === 'hash' ? createWebHashHistory : createWebHistory

console.log(
  import.meta.env.VITE_ROUTER_MODE);

const router = createRouter({
  history: historyMode(
    import.meta.env.BASE_URL),
  routes: [{
    path: '/',
    name: 'root',
    component: () => import('@/views/RootView.vue')
  }]
})

export default router
```


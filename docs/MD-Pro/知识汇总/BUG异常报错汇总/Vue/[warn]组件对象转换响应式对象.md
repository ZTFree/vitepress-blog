# [warn]组件对象转换响应式对象

## 一、问题描述

1. 使用ref代理组件对象

   ```vue
   <template>
     <div class="test">
       <el-button-group>
           <el-button type="primary" size="default" @click="activeComponent=DriveTest">drive.js</el-button>
           <el-button type="primary" size="default" @click="activeComponent=WangeditorTest">wangeditor</el-button>
       </el-button-group>
       
       <component :is="activeComponent" />
   
     </div>
   </template>
   
   <script setup>
   import {ref} from 'vue'
   import DriveTest from '@/components/DriveTest.vue'
   import WangeditorTest from '@/components/WangeditorTest.vue'
   
   const activeComponent = ref()
   </script>
   ```

2. 点击按钮更改组件对象时，warn信息如下

[Vue warn]: Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.

翻译：我们收到了一个组件，它被做成了一个响应对象。这可能会导致不必要的性能开销，应该通过将组件标记为' markRaw '或使用' shallowRef '而不是' ref '来避免。



 ## 二、产生原因

- `ref`代理组件对象可能会导致不必要的性能开销，应该通过将组件标记为`markRaw`或使用`shallowRef `而不是`ref`

## 三、解决办法

- 将`ref`替换为使用`shallowRef`

```vue
<script setup>
import {shallowRef} from 'vue'
import DriveTest from '@/components/DriveTest.vue'
import WangeditorTest from '@/components/WangeditorTest.vue'

const activeComponent = shallowRef()
</script>
</template>
```
















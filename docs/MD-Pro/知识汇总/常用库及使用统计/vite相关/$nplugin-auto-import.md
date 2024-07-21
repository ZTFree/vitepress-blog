# unplugin-auto-import

```ts
// vite.config.ts
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    AutoImport({
      dts: 'src/types/auto-imports.d.ts',
      imports: ['vue', 'vue-router', 'pinia'],
      include: [/\.[tj]sx?$/, /\.vue$/, /\.md$/],
      eslintrc: {
        enabled: true,	// 首次生成要后改为false
        filepath: './.eslintrc-auto-import.json',	// 文件生成地址
        globalsPropValue: true
      }
    })
  ]
})


```



## 相关报错

### Cannot find name ‘ref’

- 报错原因：auto-imports.d.ts文件未被识别
- 解决方案

```json
// tsconfig.json
{
  "include": [
    "src/types/auto-imports.d.ts",
    "src/**/*.ts",
    "src/**/*.d.ts",
    "src/**/*.tsx",
    "src/**/*.vue",
  ]
}
```
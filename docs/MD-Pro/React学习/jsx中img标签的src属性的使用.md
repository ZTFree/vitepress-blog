# jsx中img标签的src属性的使用

## 问题

在jsx组件中，img标签赋予src属性值后，发现图片加载失败，无法显示

```jsx
function MyPic() {

    return (
        <>
            <img src="../assets/pic01.jpg" alt="pic01" />
        </>
    )
}
```



## 原因

jsx文件中不支持通过图片地址赋予src属性来引入图片资源



## 解决

### import引入图片资源

```jsx
import pic01 from '../assets/pic01.jpg'

function MyPic() {

    return (
        <>
            <img src={pic01} alt="pic01" />
        </>
    )
}

export default MyPic
```


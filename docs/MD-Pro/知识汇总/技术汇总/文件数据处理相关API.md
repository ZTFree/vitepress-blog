## 文件数据处理相关API

### Blob

表示不可变的原始数据的类文件对象，可以按文本、二进制、ReadableStream等来读取

- 构造函数

```javascript
const obj = {name:'jack'}
const blob = new Blob([JSON.stringify(obj)],{type:'application/json'})
```

- 实例属性：size、type（MIME）
- 实例方法

- arrayBuffer：返回promise，兑现为Blob内容二进制格式的ArrayBuffer
- text：返回promise，兑现为Blob内容UTF-8的字符串
- stream：返回能读取Blob内容的ReadableStream
- slice：对Blob字节范围进行分片，返回新的Blob



## File

是一种特殊的Blob，可在任意可使用Blob的上下文使用File，并支持文件上传

- 实例属性

- lastModified：最后修改时间
- name：文件名
- webkitRelativePath：相对URL路径

- 实例方法：继承Blob



## ArrayBuffer

表示通用的原始二进制数据缓冲区,是字节数组

- 构造函数

```javascript
const buffer = new ArrayBuffer(8);
console.log(buffer.byteLength);
// Expected output: 8
```

- 实例方法

- slice：类似Blob



## FileReader

运行异步读取File或Blob对象的内容

- 实例属性

- error：读取时发送的错误
- readyState：当前读取状态
- result：文件的内容。在文件读取完毕后才有效。

- 实例方法

- abort：中止读取
- readAs***：读取文件，返回文件的***格式数据

- ArrayBuffer（二进制）、DataURL（data:URL）、Text（字符串：编码可选）

- 使用onXxx或addEventListener与removeEventListener注册

- abort：中止
- error：错误
- load：读取成功完成
- loadend：读取完成，无论成败
- loadstart：读取开始
- progress：读取时定期触发（进度相关）



## URL

用于解析，构造，规范化和编码 URL

- 静态方法

- createObjectURL：放回内容为blob链接的字符串
- revokeObjectURL：销毁createObjectURL创建的URL实例



## ReadableStream（了解）

表示可读的字节数据流，fetch的res.body为该类型



## MIME（了解）

媒体类型，描述内容的格式
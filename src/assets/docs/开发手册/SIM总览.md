## Modules

<dl>
<dt><a href="#SIM(base)">SIM(base)</a></dt>
<dd><p>sdk实例，对外暴露的接口</p>
</dd>
<dt><a href="#SIM(message)">SIM(message)</a></dt>
<dd><p>sdk实例，对外暴露的接口</p>
</dd>
</dl>

<a name="SIM(base)"></a>

## SIM(base)
sdk实例，对外暴露的接口


* [SIM(base)](#SIM(base))
    * [~init(config, [onSuccess], [onFail])](#SIM(base)..init)
    * [~login(loginInfo, [onSuccess], [onFail])](#SIM(base)..login)
    * [~logout([onSuccess], [onFail])](#SIM(base)..logout)
    * [~testOnLine([delay])](#SIM(base)..testOnLine)
    * [~cancelUpload(uploadId, [onSuccess], [onFail])](#SIM(base)..cancelUpload)
    * [~addEventListener(event, callback)](#SIM(base)..addEventListener)
    * [~removeEventListener([event], callback)](#SIM(base)..removeEventListener)

<a name="SIM(base)..init"></a>

### SIM(base)~init(config, [onSuccess], [onFail])
sdk初始化


| Param | Type | Description |
| --- | --- | --- |
| config | <code>object</code> | webscoket初始化 |
| config.serverip | <code>string</code> | 服务器ip |
| config.apiBaseUrl | <code>string</code> | http接口域名 |
| [config.ossServer] | <code>string</code> | 文件服务器 |
| [config.ossDir] | <code>string</code> | 文件路径 |
| [config.debug] | <code>string</code> | 调试开关 |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

**Example**  
```js
window.SIM.init({
  serverip: 'ws://localhost:3000/test',
  apiBaseUrl: 'http://10.86.59.77:8000/',
  debug: true,
}, (e) => {
  console.log('init ok: ', e);
}, (err) => {
  console.log('init err: ', err);
});
```
<a name="SIM(base)..login"></a>

### SIM(base)~login(loginInfo, [onSuccess], [onFail])
登录

| Param | Type | Description |
| --- | --- | --- |
| loginInfo | <code>object</code> | 登陆信息 |
| loginInfo.appId | <code>string</code> | appId,由IM平台提供 |
| loginInfo.userId | <code>string</code> | 用户ID |
| loginInfo.userSig | <code>string</code> | 加密串，由APP服务端根据APp私钥生成 |
| loginInfo.relatedUsers | <code>array</code> | 关联的账号信息 |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

**Example**  
```js
window.SIM.login({
  appId: '1',
  userId: '111111',
  userSig: '98odisaifhqop34i9jflskadjf90a8d0f9dfgjsldkjlsfdghoisldfgsdfg=sfgksfdi',
  relatedUsers: [{"appId":"1","userId","A_300001"}],  //关联的账号信息
  isForce: false,
}, (e) => {
  console.log('login ok: ', e);
}, (err) => {
  console.log('login err: ', err);
});
```
<a name="SIM(base)..logout"></a>

### SIM(base)~logout([onSuccess], [onFail])
登出

| Param | Type | Description |
| --- | --- | --- |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

**Example**  
```js
window.SIM.logout((e) =>{
  console.log('logout: ', e);
}, (err) => {
  console.log('logout err: ', err);
});
```
<a name="SIM(base)..testOnLine"></a>

### SIM(base)~testOnLine([delay])
校验链接情况


| Param | Type | Description |
| --- | --- | --- |
| [delay] | <code>number</code> | 延迟，防抖用 |

<a name="SIM(base)..uploadFile"></a>

### SIM(base)~uploadFile(args, [onSuccess], [onFail]) ⇒ <code>string</code>
上传图片
  

| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数 |
| args.file | <code>object</code> | 文件 |
| args.progress | <code>object</code> | 进度回调 |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 错误回调 |

**Example**  
```js
window.SIM.uploadFile({
  file: this.file,
  progress: (p) => {
    console.log('progress', p);
  }
}, (data) => {
// data数据结构：
// data: {
//  format: 0, // 文件格式，0 - TEXT，1 - DOC，2 - EXCEL，3 - 图片，4 - PDF，5 - PPT，6 - 压缩包，7 - HTML，8 - MP4，9 - MP3，10 - 思维导图，11 - AI，12 - PSD，
//  size: 100, // 文件大小，单位：字节
//  downUrl: '', // 下载地址
//  filename: '', // 文件名
// }
   console.log('uploadFile ok', data);
}, (err) => {
  console.log('uploadFile err', err);
});
```
<a name="SIM(base)..uploadImg"></a>

### SIM(base)~uploadImg(args, [onSuccess], [onFail]) ⇒ <code>string</code>
上传图片
 

| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数 |
| args.img | <code>object</code> | 文件 |
| args.progress | <code>object</code> | 进度回调 |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 错误回调 |

**Example**  
```js
window.SIM.uploadImg({
  img: this.imgFile,
  progress: (p) => {
    console.log('progress', p);
  }
}, (data) => {
  console.log('uploadImg ok', data);
}, (err) => {
  console.log('uploadImg err', err);
});
```
<a name="SIM(base)..cancelUpload"></a>

### SIM(base)~cancelUpload(uploadId, [onSuccess], [onFail])
取消上传


| Param | Type | Description |
| --- | --- | --- |
| uploadId | <code>string</code> | 上传或消息id，uploadXX和sendXX类接口返回 |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 错误回调 |

**Example**  
```js
window.SIM.cancelUpload(this.uploadId, (data) => {
  console.log('cancelUpload ok', data);
}, (err) => {
  console.log('cancelUpload err', err);
});
```
<a name="SIM(base)..addEventListener"></a>

### SIM(base)~addEventListener(event, callback)
事件注册


| Param | Type | Description |
| --- | --- | --- |
| event | <code>string</code> | 事件名字. 'msg'-新消息, 'msgChange'-消息变更, 'connectChange'-状态变更, 'notice'-通知 |
| callback | <code>function</code> | 回调函数 |

**Example**  
```js
window.SIM.addEventListener('msg', (msg) => {
  console.log('新消息: ', msg);
});
```
<a name="SIM(base)..removeEventListener"></a>

### SIM(base)~removeEventListener([event], callback)
事件取消



| Param | Type | Description |
| --- | --- | --- |
| [event] | <code>string</code> | 事件名字. 'msg'-新消息, 'connectChange'-状态变更, 'notice'-通知 |
| callback | <code>function</code> | 回调函数 |

**Example**  
```js
window.SIM.removeEventListener()
```
<a name="SIM(message)"></a>

## SIM(message)
sdk实例，对外暴露的接口


* [SIM(message)](#SIM(message))
    * [~sendMsg(msg, [onSuccess], [onFail])](#SIM(message)..sendMsg) ⇒ <code>string</code>
    * [~sendText(msg, [onSuccess], [onFail])](#SIM(message)..sendText) ⇒ <code>string</code>
    * [~sendImg(msg, [onSuccess], [onFail])](#SIM(message)..sendImg)
    * [~sendFile(msg, [onSuccess], [onFail])](#SIM(message)..sendFile) ⇒ <code>string</code>
    * [~readMsg(msg, [onSuccess], [onFail])](#SIM(message)..readMsg)
    * [~revocationMsg(msg, [onSuccess], [onFail])](#SIM(message)..revocationMsg)
    * [~fetchMsgReadState(msg, [onSuccess], [onFail])](#SIM(message)..fetchMsgReadState)
    * [~deleteMsg(msg, [onSuccess], [onFail])](#SIM(message)..deleteMsg)
    * [~sendAVEvent(args)](#SIM(message)..sendAVEvent)
    * [~getOfflineMsg(args, [onSuccess], [onFail])](#SIM(message)..getOfflineMsg)

<a name="SIM(message)..sendMsg"></a>

### SIM(message)~sendMsg(msg, [onSuccess], [onFail]) ⇒ <code>string</code>
发送消息


| Param | Type | Description |
| --- | --- | --- |
| msg | <code>object</code> | 消息对象 |
| msg.message | <code>string</code> | 消息内容 |
| msg.type | <code>string</code> | 消息类型，0-文本，1-图片，2-语音，3-视频，4-文件，8-合并转发，10-音视频, 11-表情,10000-自定义消息 |
| msg.receiver | <code>string</code> | 接收者 |
| msg.chatType | <code>number</code> | 会话类型，0-个人，1-群 |
| msg.securityType | <code>number</code> | 安全类型，0-普通，1-密聊 |
| msg.cross | <code>number</code> | 是否跨域，0-不跨域，1-跨域 |
| [msg.domain] | <code>string</code> | 消息扩展 |
| [msg.groupType] | <code>string</code> | 群组类型 |
| [msg.id] | <code>string</code> | 消息id，重发消息时必须 |
| [msg.time] | <code>string</code> | 消息time，重发消息时选填 |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

**Example**  
```js
// 各消息通用字段
let baseMsg = {
  receiver: 'c0005', // 接收者
  chatType: 1, // 会话类型
  securityType: 0, // 安全类型
  cross: 0, // 是否跨域
  domain: { // 消息的扩展字段，非必须
    reply: { // 引用回复
      ancestor: '3ffb81783fb4c1779610566761fda0a4', // 祖先id，查询整个楼时使用
      replyId: '9610566761fda0a43ffb81783fb4c177', // 回复的那条消息id
      abstract: '[图片]', // 消息摘要，非文本类消息转文本，例如：图片消息-》[图片]
    }
  }
}
// 文本消息（支持@、回复）
let textMsg = {
  ...baseMsg,
  type: 0,
  message:  {
    text: '@aaa',
    isAt: true, // 是否@消息
    members: ['A_200001'], // isAt为true时必填，@所有人时填入群id。
  }
}
// 图片消息（支持回复）
let imgMsg = {
  ...baseMsg,
  type: 1,
  message:  { // message具体属性可以从uploadImg()接口成功回调获取
    format: 0, // 图片类型
    imageList: [{
      type: 0, // 原图
      url: 'http://ctdfs.geely.com/...', // 图片地址
      size: 100000, // 大小（字节）
      height: 1000, // 高
      width: 1000, // 宽
    }, {
      type: 1, // 大图
      url: 'http://ctdfs.geely.com/...', // 图片地址
      size: 10000, // 大小（字节）
      height: 720, // 高
      width: 720, // 宽
    }, {
      type: 2, // 缩略图
      url: 'http://ctdfs.geely.com/...', // 图片地址
      size: 1000, // 大小（字节）
      height: 198, // 高
      width: 198, // 宽
    }],
  },
}
// 文件消息（支持回复）
let fileMsg = {
  ...baseMsg,
  type: 4,
  message:  { // message具体属性可以从uploadFile()接口成功回调获取
    format: 0, // 格式
    size: 100, // 大小，单位：字节
    filename: 'test.txt', // 文件名
    downUrl: 'http://ctdfs.geely.com/...', // 下载地址
  },
}
// 合并转发（支持回复）
let mergeMsg = {
  ...baseMsg,
  type: 8,
  message:  {
    title: "群聊会话记录", // 标题
    content: "辅导辅导辅导费是多少的西红柿", // 摘要
    ids: ["sfsfsdheoh23jdgjofdgg", "fesfjoejfojeo33r3"], // 消息id数组
  },
}

// 发送消息
window.SIM.sendMsg(textMsg, (e) => {
  console.log('sendMsg end', e);
}, (err) => {
  console.log('sendMsg err', err);
});
```
<a name="SIM(message)..sendText"></a>

### SIM(message)~sendText(msg, [onSuccess], [onFail]) ⇒ <code>string</code>
发送文本消息
 

| Param | Type | Description |
| --- | --- | --- |
| msg | <code>object</code> | 消息对象 |
| msg.text | <code>string</code> | 消息内容 |
| [msg.isAt] | <code>boolean</code> | 是否为at消息 |
| [msg.members] | <code>array</code> | at列表 |
| msg.receiver | <code>string</code> | 接收者 |
| msg.chatType | <code>number</code> | 会话类型，0-个人，1-群 |
| msg.securityType | <code>number</code> | 安全类型，0-普通，1-密聊 |
| msg.cross | <code>number</code> | 是否跨域，0-不跨域，1-跨域 |
| [msg.domain] | <code>string</code> | 消息扩展 |
| [msg.id] | <code>string</code> | 消息id，重发消息时必须 |
| [msg.time] | <code>string</code> | 消息time，重发消息时选填 |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

**Example**  
```js
window.SIM.sendText({
  text: '@aaa',
  isAt: true,
  members: ['A_200001']
  receiver: 'G_000001',
  chatType: 1,
  securityType: 0
  cross: 0
}, (e) => {
  console.log('sendText end', e);
}, (err) => {
  console.log('sendText err', err);
});
```
<a name="SIM(message)..sendImg"></a>

### SIM(message)~sendImg(msg, [onSuccess], [onFail])
发送图片


| Param | Type | Description |
| --- | --- | --- |
| msg | <code>object</code> | 参数 |
| msg.img | <code>object</code> | 图片 |
| msg.progress | <code>object</code> | 进度回调 |
| msg.receiver | <code>string</code> | 接收者 |
| msg.chatType | <code>number</code> | 会话类型，0-个人，1-群 |
| msg.securityType | <code>number</code> | 安全类型，0-普通，1-密聊 |
| msg.cross | <code>number</code> | 是否跨域，0-不跨域，1-跨域 |
| [msg.domain] | <code>string</code> | 消息扩展 |
| [msg.id] | <code>string</code> | 消息id，重发消息时必须 |
| [msg.time] | <code>string</code> | 消息time，重发消息时选填 |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 错误回调 |

**Example**  
```js
window.SIM.sendImg({
  img: this.imgFile,
  progress: (p) => {
    console.log('sendImg progress', p);
  },
  receiver: 'A_200022',
  chatType: 0,
  securityType: 0,
  cross: 0,
}, (e) => {
  console.log('sendImg end', e);
}, (err) => {
  console.log('sendImg err', err);
});
```
<a name="SIM(message)..sendFile"></a>

### SIM(message)~sendFile(msg, [onSuccess], [onFail]) ⇒ <code>string</code>
发送文件
 

| Param | Type | Description |
| --- | --- | --- |
| msg | <code>object</code> | 参数 |
| msg.file | <code>object</code> | 文件 |
| msg.progress | <code>object</code> | 进度回调 |
| msg.receiver | <code>string</code> | 接收者 |
| msg.chatType | <code>number</code> | 会话类型，0-个人，1-群 |
| msg.securityType | <code>number</code> | 安全类型，0-普通，1-密聊 |
| msg.cross | <code>number</code> | 是否跨域，0-不跨域，1-跨域 |
| [msg.domain] | <code>string</code> | 消息扩展 |
| [msg.id] | <code>string</code> | 消息id，重发消息时必须 |
| [msg.time] | <code>string</code> | 消息time，重发消息时选填 |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 错误回调 |

**Example**  
```js
window.SIM.sendFile({
  file: this.file,
  progress: (p) => {
    console.log('sendFile progress', p);
  },
  receiver: 'A_200022',
  chatType: 0,
  securityType: 0,
  cross: 0,
}, (e) => {
  console.log('sendFile end', e);
}, (err) => {
  console.log('sendFile err', err);
});
```
<a name="SIM(message)..readMsg"></a>

### SIM(message)~readMsg(msg, [onSuccess], [onFail])
已读消息


| Param | Type | Description |
| --- | --- | --- |
| msg | <code>object</code> | 读的消息对象 |
| msg.id | <code>string</code> | 消息id |
| msg.securityType | <code>number</code> | 安全类型，0-普通，1-密聊 |
| msg.cross | <code>number</code> | 是否跨域，0-不跨域，1-跨域 |
| msg.chatType | <code>number</code> | 会话类型，0-个人，1-群 |
| msg.sender | <code>string</code> | 消息发送方 |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

**Example**  
```js
window.SIM.readMsg(msg, (res) => {
  console.log('readMsg成功：', res);
}, (err) => {
  console.log('readMsg失败：', err);
});
```
<a name="SIM(message)..revocationMsg"></a>

### SIM(message)~revocationMsg(msg, [onSuccess], [onFail])
撤回消息
 

| Param | Type | Description |
| --- | --- | --- |
| msg | <code>object</code> | 撤回的消息对象 |
| msg.id | <code>string</code> | 消息id |
| msg.securityType | <code>number</code> | 安全类型，0-普通，1-密聊 |
| msg.chatType | <code>number</code> | 接收方类型，0-个人，1-群 |
| msg.cross | <code>number</code> | 是否跨域，0-不跨域，1-跨域 |
| msg.receiver | <code>string</code> | 接收者 |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

**Example**  
```js
window.SIM.revocationMsg(msg, (e) => {
  console.log('revocationMsg end', e);
}, (err) => {
  console.log('revocationMsg err', err);
});
```
<a name="SIM(message)..fetchMsgReadState"></a>

### SIM(message)~fetchMsgReadState(msg, [onSuccess], [onFail])
主动拉取的消息信息


| Param | Type | Description |
| --- | --- | --- |
| msg | <code>object</code> | 主动拉取的消息对象 |
| msg.id | <code>string</code> | 消息id |
| msg.securityType | <code>number</code> | 安全类型，0-普通，1-密聊 |
| msg.cross | <code>number</code> | 是否跨域，0-不跨域，1-跨域 |
| msg.receiver | <code>string</code> | 接收者 |
| msg.chatType | <code>number</code> | 接收方类型，0-个人，1-群 |
| msg.msgType | <code>number</code> | 消息类 |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

**Example**  
```js
window.SIM.fetchMsgReadState(msg, (e) => {
  console.log('revocationMsg end', e);
}, (err) => {
  console.log('revocationMsg err', err);
});
```
<a name="SIM(message)..deleteMsg"></a>

### SIM(message)~deleteMsg(msg, [onSuccess], [onFail])
删除消息


| Param | Type | Description |
| --- | --- | --- |
| msg | <code>object</code> | 删除的消息对象 |
| msg.id | <code>string</code> | 消息id |
| msg.securityType | <code>number</code> | 安全类型，0-普通，1-密聊 |
| msg.cross | <code>number</code> | 是否跨域，0-不跨域，1-跨域 |
| msg.receiver | <code>string</code> | 接收者 |
| msg.chatType | <code>number</code> | 接收方类型，0-个人，1-群 |
| [msg.delType] | <code>number</code> | 删除类型，0-删除自己的（只影响自己），1-删除所有人（影响所有人） |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

**Example**  
```js
window.SIM.deleteMsg(msg, (e) => {
  console.log('msg end', e);
}, (err) => {
  console.log('msg err', err);
});
```
<a name="SIM(message)..sendAVEvent"></a>

### SIM(message)~sendAVEvent(args)
发送音频事件


| Param | Type |
| --- | --- |
| args | <code>object</code> | 

**Example**  
```js
window.SIM.sendAVEvent(args, (e) => {
  console.log('msg end', e);
}, (err) => {
  console.log('msg err', err);
});
```
<a name="SIM(message)..getOfflineMsg"></a>

### SIM(message)~getOfflineMsg(args, [onSuccess], [onFail])
获取离线消息


| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> |  |
| [args.lastMsgTime] | <code>number</code> | 上次同步时间 |
| args.loginTime | <code>number</code> | 登陆时间 |
| args.queryType | <code>number</code> | 查询类型，0单聊，1群聊，2指令 |
| args.queryType | <code>string</code> | 后台消息id，最开始一条id |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

**Example**  
```js
window.SIM.getOfflineMsg({
  loginTime: new Date().getTime(),
  queryType: 0
}, (e) => {
  console.log('getOfflineMsg end', e);
}, (err) => {
  console.log('getOfflineMsg err', err);
});
```

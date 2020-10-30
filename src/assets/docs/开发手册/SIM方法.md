## Modules

<dl>
<dt><a href="#SIM(chat)">SIM(chat)</a></dt>
<dd><p>sdk实例，对外暴露的接口</p>
</dd>
<dt><a href="#SIM(friend)">SIM(friend)</a></dt>
<dd><p>sdk实例，对外暴露的接口</p>
</dd>
<dt><a href="#SIM(group)">SIM(group)</a></dt>
<dd><p>sdk实例，对外暴露的接口</p>
</dd>
<dt><a href="#SIM(group)">SIM(group)</a></dt>
<dd><p>sdk实例，对外暴露的接口</p>
</dd>
<dt><a href="#SIM(message)">SIM(message)</a></dt>
<dd><p>sdk实例，对外暴露的接口</p>
</dd>
<dt><a href="#SIM(user)">SIM(user)</a></dt>
<dd><p>sdk实例，对外暴露的接口</p>
</dd>
</dl>

## SIM(chat)
sdk实例，对外暴露的接口

* [SIM(chat)](#SIM(chat))
    * [~setChatSession(args, [onSuccess], [onFail])](#SIM(chat)..setChatSession) ⇒ <code>void</code>
    * [~getChatInfo(args, [onSuccess], [onFail])](#SIM(chat)..getChatInfo) ⇒ <code>void</code>
    * [~getChatSessionList(args, [onSuccess], [onFail])](#SIM(chat)..getChatSessionList) ⇒ <code>void</code>
    * [~getAllChat(args, [onSuccess], [onFail])](#SIM(chat)..getAllChat) ⇒ <code>void</code>
    * [~initMessageCount(args, [onSuccess], [onFail])](#SIM(chat)..initMessageCount) ⇒ <code>void</code>
    * [~deleteChat(args, [onSuccess], [onFail])](#SIM(chat)..deleteChat)
    * [~destroyChat(args, [onSuccess], [onFail])](#SIM(chat)..destroyChat)
    * [~getBoxChatSession([onSuccess], [onFail])](#SIM(chat)..getBoxChatSession)
    * [~ChatListItem](#SIM(chat)..ChatListItem) : <code>object</code>

<a name="SIM(chat)..setChatSession"></a>

### SIM(chat)~setChatSession(args, [onSuccess], [onFail]) ⇒ <code>void</code>
设置会话

| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数对象 |
| args.chatId | <code>sting</code> | 会话id(单聊为好友账号，群聊为群id)(1-32位) |
| args.securityType | <code>number</code> | 安全类型0普通，1私聊 |
| args.chatType | <code>number</code> | 聊天类型,0单聊，1群聊，2订阅号，10订阅号盒子 |
| [args.isTop] | <code>number</code> | 是否置顶：0否，1是 |
| [args.notDisturb] | <code>number</code> | 是否免打扰：0否，1是 |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(chat)..getChatInfo"></a>

### SIM(chat)~getChatInfo(args, [onSuccess], [onFail]) ⇒ <code>void</code>
获取单个会话信息

| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数对象 |
| args.chatId | <code>sting</code> | 会话id(单聊为好友账号，群聊为群id)(1-32位) |
| args.securityType | <code>number</code> | 安全类型0普通，1私聊 |
| args.chatType | <code>number</code> | 聊天类型,0单聊，1群聊，2订阅号，10订阅号盒子 |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(chat)..getChatSessionList"></a>

### SIM(chat)~getChatSessionList(args, [onSuccess], [onFail]) ⇒ <code>void</code>
获取会话列表(分页)

| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数对象 |
| [args.chatName] | <code>string</code> | 会话名称 |
| [args.securityType] | <code>number</code> | 安全类型0普通，1私聊 |
| [args.isTop] | <code>number</code> | 是否置顶：0否，1是 |
| [args.notDisturb] | <code>number</code> | 是否免打扰：0否，1是 |
| [args.page] | <code>number</code> | 页号(1-99999999), 默认为1 |
| [args.size] | <code>number</code> | 每页行数(1-100), 默认为100 |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(chat)..getAllChat"></a>

### SIM(chat)~getAllChat(args, [onSuccess], [onFail]) ⇒ <code>void</code>
获取所有会话

| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> |  |
| args.sessionLevel | <code>number.&lt;(0\|1)&gt;</code> | 0 会获取到盒子内容，1 获取盒子内部列表 如果不传，则获取不到盒子 |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(chat)..initMessageCount"></a>

### SIM(chat)~initMessageCount(args, [onSuccess], [onFail]) ⇒ <code>void</code>
初始化会话消息统计数

| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数对象 |
| args.chatId | <code>sting</code> | 会话id(单聊为好友账号，群聊为群id)(1-32位) |
| args.chatType | <code>sting</code> | 聊天类型,0单聊，1群聊，2订阅号，10订阅号盒子 |
| args.securityType | <code>sting</code> | 安全类型0普通，1私聊 |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(chat)..deleteChat"></a>

### SIM(chat)~deleteChat(args, [onSuccess], [onFail])
删除会话(设置不可见)

| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数对象 |
| args.chatId | <code>sting</code> | 会话id(单聊为好友账号，群聊为群id)(1-32位) |
| args.chatType | <code>sting</code> | 聊天类型,0单聊，1群聊，2订阅号，10订阅号盒子 |
| args.securityType | <code>sting</code> | 安全类型0普通，1私聊 |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(chat)..destroyChat"></a>

### SIM(chat)~destroyChat(args, [onSuccess], [onFail])
删除会话(彻底删除)

| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数对象 |
| args.chatId | <code>sting</code> | 会话id(单聊为好友账号，群聊为群id)(1-32位) |
| args.chatType | <code>sting</code> | 聊天类型,0单聊，1群聊，2订阅号，10订阅号盒子 |
| args.securityType | <code>sting</code> | 安全类型0普通，1私聊 |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(chat)..getBoxChatSession"></a>

### SIM(chat)~getBoxChatSession([onSuccess], [onFail])
初始化盒子信息

| Param | Type | Description |
| --- | --- | --- |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(chat)..ChatListItem"></a>

### SIM(chat)~ChatListItem : <code>object</code>
会话列表项

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | 后台ID |
| appId | <code>string</code> | // todo |
| account | <code>string</code> | 账号 |
| sessionId | <code>string</code> | 会话ID |
| sessionName | <code>string</code> | 会话名称 |
| avatar | <code>string</code> | 会话头像 |
| sessionType | <code>number.&lt;(0\|1\|2\|10)&gt;</code> | 会话类型 0单聊，1群聊，2订阅号，10订阅号盒子 |
| groupType | <code>number.&lt;(0\|1)&gt;</code> | 是否为群聊 |
| toppingTimeLong | <code>string</code> | // todo |
| isTop | <code>number.&lt;(0\|1)&gt;</code> | 是否置顶 |
| securityType | <code>number.&lt;(0\|1)&gt;</code> | 安全类型 |
| notDisturb | <code>number.&lt;(0\|1)&gt;</code> | 是否免打扰 |
| isShow | <code>number.&lt;(0\|1)&gt;</code> | 是否显示 |
| createTime | <code>string</code> | 创建时间 |
| updateTime | <code>string</code> | 修改时间 |
| isAt | <code>number.&lt;(0\|1)&gt;</code> | 是否有At消息 |
| lastMsg | <code>MsgItem</code> | 最后一条消息 |
| messageCount | <code>number</code> | 消息未读数量 |
| invalid | <code>number.&lt;(0\|1)&gt;</code> | 是否可用 |
| cross | <code>number.&lt;(0\|1)&gt;</code> | 是否跨域 |

<a name="SIM(friend)"></a>

## SIM(friend)
sdk实例，对外暴露的接口


* [SIM(friend)](#SIM(friend))
    * [~addBlackList(args, [onSuccess], [onFail])](#SIM(friend)..addBlackList) ⇒ <code>void</code>
    * [~checkBlackList(args, [onSuccess], [onFail])](#SIM(friend)..checkBlackList) ⇒ <code>void</code>
    * [~deleteBlackList(args, [onSuccess], [onFail])](#SIM(friend)..deleteBlackList) ⇒ <code>void</code>
    * [~getBlackList(args, [onSuccess], [onFail])](#SIM(friend)..getBlackList) ⇒ <code>void</code>
    * [~friendApply(args, [onSuccess], [onFail])](#SIM(friend)..friendApply) ⇒ <code>void</code>
    * [~friendApplyAck(args, [onSuccess], [onFail])](#SIM(friend)..friendApplyAck) ⇒ <code>void</code>
    * [~getFriendApplyList(args, [onSuccess], [onFail])](#SIM(friend)..getFriendApplyList) ⇒ <code>void</code>
    * [~checkFriend(args, [onSuccess], [onFail])](#SIM(friend)..checkFriend) ⇒ <code>void</code>
    * [~deleteFriend(args, [onSuccess], [onFail])](#SIM(friend)..deleteFriend) ⇒ <code>void</code>
    * [~deleteAllFriend([onSuccess], [onFail])](#SIM(friend)..deleteAllFriend) ⇒ <code>void</code>
    * [~setFriendNote(args, [onSuccess], [onFail])](#SIM(friend)..setFriendNote) ⇒ <code>void</code>
    * [~getFriendList(args, [onSuccess], [onFail])](#SIM(friend)..getFriendList) ⇒ <code>void</code>

<a name="SIM(friend)..addBlackList"></a>

### SIM(friend)~addBlackList(args, [onSuccess], [onFail]) ⇒ <code>void</code>
添加黑名单

```
window.SIM.addBlackList({
  userId: 'A_000001',
}, (e) => {
  console.log('addBlackList: ', e);
}, (err) => {
  console.log('addBlackList: ', err);
});  
```


| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数 |
| args.blackAccount | <code>string</code> | 黑名单用户id |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(friend)..checkBlackList"></a>

### SIM(friend)~checkBlackList(args, [onSuccess], [onFail]) ⇒ <code>void</code>
校验黑名单


| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数 |
| args.blackAccount | <code>string</code> | 黑名单用户id |
| args.checkType | <code>string</code> | 0单向校验,1双向校验 |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(friend)..deleteBlackList"></a>

### SIM(friend)~deleteBlackList(args, [onSuccess], [onFail]) ⇒ <code>void</code>
删除黑名单


| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数 |
| args.blackAccount | <code>string</code> | 黑名单用户id |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(friend)..getBlackList"></a>

### SIM(friend)~getBlackList(args, [onSuccess], [onFail]) ⇒ <code>void</code>
获取黑名单列表


| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数 |
| [args.page] | <code>string</code> | 页号(1-99999999), 默认为1 |
| [args.size] | <code>string</code> | 每页行数(1-100), 默认为100 |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(friend)..friendApply"></a>

### SIM(friend)~friendApply(args, [onSuccess], [onFail]) ⇒ <code>void</code>
添加好友申请


| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数 |
| args.toAccount | <code>string</code> | 好友用户账号 |
| [args.reqDesc] | <code>string</code> | 申请理由(1-100位) |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(friend)..friendApplyAck"></a>

### SIM(friend)~friendApplyAck(args, [onSuccess], [onFail]) ⇒ <code>void</code>
确认好友申请


| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数 |
| args.fromAccount | <code>string</code> | 好友用户账号 |
| args.type | <code>string</code> | 类型0拒绝，1接受 |
| [args.reason] | <code>string</code> | 理由(1-100位) |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(friend)..getFriendApplyList"></a>

### SIM(friend)~getFriendApplyList(args, [onSuccess], [onFail]) ⇒ <code>void</code>
我的好友申请列表


| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数 |
| args.type | <code>number</code> | 类型0我申请的，1被申请的，2申请和被申请的 |
| [args.page] | <code>number</code> | 页号(1-99999999), 默认为1 |
| [args.size] | <code>number</code> | 每页行数(1-100), 默认为100 |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(friend)..checkFriend"></a>

### SIM(friend)~checkFriend(args, [onSuccess], [onFail]) ⇒ <code>void</code>
校验好友


| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数 |
| args.friendAccount | <code>sting</code> | 好友用户账号 |
| args.checkType | <code>number</code> | 0单向校验,1双向校验 |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(friend)..deleteFriend"></a>

### SIM(friend)~deleteFriend(args, [onSuccess], [onFail]) ⇒ <code>void</code>
删除好友


| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数 |
| args.friendAccount | <code>sting</code> | 好友用户账号 |
| args.type | <code>number</code> | 类型0单向，1双向 |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(friend)..deleteAllFriend"></a>

### SIM(friend)~deleteAllFriend([onSuccess], [onFail]) ⇒ <code>void</code>
删除所有好友


| Param | Type | Description |
| --- | --- | --- |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(friend)..setFriendNote"></a>

### SIM(friend)~setFriendNote(args, [onSuccess], [onFail]) ⇒ <code>void</code>
设置好友备注


| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数 |
| args.friendAccount | <code>sting</code> | 好友用户账号 |
| args.note | <code>sting</code> | 备注(1-64位) |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(friend)..getFriendList"></a>

### SIM(friend)~getFriendList(args, [onSuccess], [onFail]) ⇒ <code>void</code>
获取好友列表信息


| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数 |
| [args.page] | <code>number</code> | 页号(1-99999999), 默认为1 |
| [args.size] | <code>number</code> | 每页行数(1-100), 默认为100 |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(group)"></a>

## SIM(group)
sdk实例，对外暴露的接口


* [SIM(group)](#SIM(group))
    * [~setGroupAtallToggle](#SIM(group)..setGroupAtallToggle)
    * [~setGroupInvitedToggle](#SIM(group)..setGroupInvitedToggle)
    * [~getGroupIntro](#SIM(group)..getGroupIntro)
    * [~createGroup(config, [onSuccess], [onFail])](#SIM(group)..createGroup)
    * [~createEventGroup(config, [onSuccess], [onFail])](#SIM(group)..createEventGroup)
    * [~createEventExplain(args, [onSuccess], [onFail])](#SIM(group)..createEventExplain)
    * [~getEventExplainById(args, [onSuccess], [onFail])](#SIM(group)..getEventExplainById)
    * [~getGroupEventExplainByGroupId(args, [onSuccess], [onFail])](#SIM(group)..getGroupEventExplainByGroupId)
    * [~getEventExplainHistory(args, [onSuccess], [onFail])](#SIM(group)..getEventExplainHistory)
    * [~searchEventExplain(args, [onSuccess], [onFail])](#SIM(group)..searchEventExplain)
    * [~dismissGroup(args, [onSuccess], [onFail])](#SIM(group)..dismissGroup)
    * [~getAllUserGroup(args, [onSuccess], [onFail])](#SIM(group)..getAllUserGroup) ⇒ <code>void</code>
    * [~modifyGroup(args, [onSuccess], [onFail])](#SIM(group)..modifyGroup)
    * [~setGroupNotice(args, [onSuccess], [onFail])](#SIM(group)..setGroupNotice)
    * [~getGroupDetail(args, [onSuccess], [onFail])](#SIM(group)..getGroupDetail)
    * [~getGroupDetailList(args, [onSuccess], [onFail])](#SIM(group)..getGroupDetailList)
    * [~searchGroups(args, [onSuccess], [onFail])](#SIM(group)..searchGroups) ⇒ <code>void</code>
    * [~changeGroupOwner(args, [onSuccess], [onFail])](#SIM(group)..changeGroupOwner)
    * [~getGroupManagers(args, [onSuccess], [onFail])](#SIM(group)..getGroupManagers)
    * [~getGroupMemberIds(args, [onSuccess], [onFail])](#SIM(group)..getGroupMemberIds)
    * [~getGroupMemberList(args, [onSuccess], [onFail])](#SIM(group)..getGroupMemberList)
    * [~deleteGroupMember(args, [onSuccess], [onFail])](#SIM(group)..deleteGroupMember)
    * [~quitGroup(args, [onSuccess], [onFail])](#SIM(group)..quitGroup)
    * [~setGroupMemberRole(args, [onSuccess], [onFail])](#SIM(group)..setGroupMemberRole)
    * [~searchGroupByName(args, [onSuccess], [onFail])](#SIM(group)..searchGroupByName)
    * [~searchEsGroupByName(args, [onSuccess], [onFail])](#SIM(group)..searchEsGroupByName)

<a name="SIM(group)..setGroupAtallToggle"></a>

### SIM(group)~setGroupAtallToggle
切换@All的设置


| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数 |
| args.groupType | <code>Number</code> | 群组类型 |
| args.groupId | <code>string</code> | 群id |
| args.toggle | <code>number</code> | @All的设置 |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(group)..setGroupInvitedToggle"></a>

### SIM(group)~setGroupInvitedToggle
切换@更改邀请群成员的设置


| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数 |
| args.groupType | <code>Number</code> | 群组类型 |
| args.groupId | <code>string</code> | 群id |
| args.toggle | <code>number</code> | 邀请群成员的设置 |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(group)..getGroupIntro"></a>

### SIM(group)~getGroupIntro
获取群组简要信息
 

| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数 |
| args.groupType | <code>Number</code> | 群组类型 |
| args.groupId | <code>string</code> | 群组id |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(group)..createGroup"></a>

### SIM(group)~createGroup(config, [onSuccess], [onFail])
创建群组


| Param | Type | Description |
| --- | --- | --- |
| config | <code>object</code> | 群组设置 |
| config.type | <code>number</code> | 群组类型，0-群组，1-讨论组 |
| config.name | <code>string</code> | 群组名称 |
| config.members | <code>array</code> | 群成员数组 |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(group)..createEventGroup"></a>

### SIM(group)~createEventGroup(config, [onSuccess], [onFail])
创建事件群


| Param | Type | Description |
| --- | --- | --- |
| config | <code>object</code> | 群组设置 |
| config.name | <code>string</code> | 群组名称 |
| config.members | <code>array</code> | 群成员数组 |
| [config.text] | <code>sting</code> | 文字说明（0-1000） |
| [config.imageInfo] | <code>array</code> | 图片数组 |
| [config.fileInfo] | <code>array</code> | 文件数组 |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(group)..createEventExplain"></a>

### SIM(group)~createEventExplain(args, [onSuccess], [onFail])
创建事件说明


| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数 |
| args.groupType | <code>Number</code> | 群组类型 |
| args.groupId | <code>string</code> | 群id |
| [args.text] | <code>sting</code> | 文字说明（0-1000） |
| [args.imageInfo] | <code>array</code> | 图片数组 |
| [args.fileInfo] | <code>array</code> | 文件数组 |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(group)..getEventExplainById"></a>

### SIM(group)~getEventExplainById(args, [onSuccess], [onFail])
根据id获取事件说明
 

| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数 |
| args.id | <code>string</code> | 事件说明id |
| args.groupType | <code>string</code> | 事件类型 |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(group)..getGroupEventExplainByGroupId"></a>

### SIM(group)~getGroupEventExplainByGroupId(args, [onSuccess], [onFail])
获取事件群id最新事件说明


| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数 |
| args.groupType | <code>Number</code> | 群组类型 |
| args.groupId | <code>string</code> | 群id |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(group)..getEventExplainHistory"></a>

### SIM(group)~getEventExplainHistory(args, [onSuccess], [onFail])
获取事件说明历史


| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数 |
| args.groupType | <code>Number</code> | 群组类型 |
| args.groupId | <code>string</code> | 事件群id |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(group)..searchEventExplain"></a>

### SIM(group)~searchEventExplain(args, [onSuccess], [onFail])
搜索事件说明


| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数对象 |
| args.groupType | <code>Number</code> | 群组类型 |
| args.groupId | <code>sting</code> | 群组ID |
| args.text | <code>sting</code> | 要搜索的关键字 |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(group)..dismissGroup"></a>

### SIM(group)~dismissGroup(args, [onSuccess], [onFail])
解散群组


| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数 |
| args.groupType | <code>Number</code> | 群组类型 |
| args.groupId | <code>String</code> | 群组id |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(group)..getAllUserGroup"></a>

### SIM(group)~getAllUserGroup(args, [onSuccess], [onFail]) ⇒ <code>void</code>
获取加入的所有群组


| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数 |
| args.typeArr | <code>array</code> | 群组类型数组,0私密群，1公开群，2讨论组，3事件群(默认[0,1,2,3]查询所有) |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(group)..modifyGroup"></a>

### SIM(group)~modifyGroup(args, [onSuccess], [onFail])
设置群组详情


| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数 |
| args.groupType | <code>Number</code> | 群组类型 |
| args.groupId | <code>string</code> | 群组id |
| [args.groupName] | <code>object</code> | 群组姓名 |
| [args.avatar] | <code>string</code> | 群头像 |
| [args.isReview] | <code>string</code> | 修改群申请是否需要审批(1需要审核，0不需要审核) |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(group)..setGroupNotice"></a>

### SIM(group)~setGroupNotice(args, [onSuccess], [onFail])
设置群公告


| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数 |
| args.groupId | <code>string</code> | 群id |
| args.notice | <code>string</code> | 群组公告(0-5000) |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(group)..getGroupDetail"></a>

### SIM(group)~getGroupDetail(args, [onSuccess], [onFail])
获取群组详情


| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数 |
| args.groupType | <code>Number</code> | 群组类型 |
| args.groupId | <code>string</code> | 群组id |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(group)..getGroupDetailList"></a>

### SIM(group)~getGroupDetailList(args, [onSuccess], [onFail])
批量获取群组详情


| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数 |
| args.groupType | <code>Number</code> | 群组类型 |
| args.groupId | <code>string</code> | 群组id |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(group)..searchGroups"></a>

### SIM(group)~searchGroups(args, [onSuccess], [onFail]) ⇒ <code>void</code>
搜索群组


| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数对象 |
| args.groupName | <code>sting</code> | 群组名称(0-50) |
| args.typeArr | <code>array</code> | 群组类型 |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(group)..changeGroupOwner"></a>

### SIM(group)~changeGroupOwner(args, [onSuccess], [onFail])
转让群主

| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数 |
| args.groupType | <code>Number</code> | 群组类型 |
| args.groupId | <code>string</code> | 群组id |
| args.newOwnerId | <code>string</code> | 新群主id |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(group)..getGroupManagers"></a>

### SIM(group)~getGroupManagers(args, [onSuccess], [onFail])
获取群组管理员


| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数 |
| args.groupType | <code>Number</code> | 群组类型 |
| args.groupId | <code>string</code> | 群组id |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(group)..getGroupMemberIds"></a>

### SIM(group)~getGroupMemberIds(args, [onSuccess], [onFail])
获取群组成员ID集合


| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数 |
| args.groupType | <code>string</code> | 群组类型 |
| args.groupId | <code>string</code> | 群组id |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(group)..getGroupMemberList"></a>

### SIM(group)~getGroupMemberList(args, [onSuccess], [onFail])
获取群组成员


| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数 |
| args.groupType | <code>number</code> | 群组类型 |
| args.groupId | <code>string</code> | 群组id |
| [args.page] | <code>string</code> | 分页获取群组成员，-1-获取全部 |
| [args.size] | <code>string</code> | 每页数量 |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(group)..deleteGroupMember"></a>

### SIM(group)~deleteGroupMember(args, [onSuccess], [onFail])
踢人


| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数 |
| args.groupType | <code>number</code> | 群组类型 |
| args.groupId | <code>string</code> | 群组id |
| args.members | <code>array</code> | 用户id数组 |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(group)..quitGroup"></a>

### SIM(group)~quitGroup(args, [onSuccess], [onFail])
退出群组


| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数 |
| args.groupId | <code>string</code> | 群组id |
| args.groupType | <code>string</code> | 群组类型 |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(group)..setGroupMemberRole"></a>

### SIM(group)~setGroupMemberRole(args, [onSuccess], [onFail])
修改群成员角色


| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数 |
| args.groupType | <code>number</code> | 群组类型 |
| args.groupId | <code>string</code> | 群组id |
| args.members | <code>string</code> | 成员id |
| args.type | <code>string</code> | 1设置管理员，2取消管理员 |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(group)..searchGroupByName"></a>

### SIM(group)~searchGroupByName(args, [onSuccess], [onFail])
搜索


| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数 |
| args.text | <code>sting</code> | 关键字 |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(group)..searchEsGroupByName"></a>

### SIM(group)~searchEsGroupByName(args, [onSuccess], [onFail])
搜索


| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数 |
| args.text | <code>string</code> | 关键字 |
| args.index | <code>number</code> | 索引 |
| args.size | <code>number</code> | 行数 |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(group)"></a>

## SIM(group)
sdk实例，对外暴露的接口


* [SIM(group)](#SIM(group))
    * [~setGroupAtallToggle](#SIM(group)..setGroupAtallToggle)
    * [~setGroupInvitedToggle](#SIM(group)..setGroupInvitedToggle)
    * [~getGroupIntro](#SIM(group)..getGroupIntro)
    * [~createGroup(config, [onSuccess], [onFail])](#SIM(group)..createGroup)
    * [~createEventGroup(config, [onSuccess], [onFail])](#SIM(group)..createEventGroup)
    * [~createEventExplain(args, [onSuccess], [onFail])](#SIM(group)..createEventExplain)
    * [~getEventExplainById(args, [onSuccess], [onFail])](#SIM(group)..getEventExplainById)
    * [~getGroupEventExplainByGroupId(args, [onSuccess], [onFail])](#SIM(group)..getGroupEventExplainByGroupId)
    * [~getEventExplainHistory(args, [onSuccess], [onFail])](#SIM(group)..getEventExplainHistory)
    * [~searchEventExplain(args, [onSuccess], [onFail])](#SIM(group)..searchEventExplain)
    * [~dismissGroup(args, [onSuccess], [onFail])](#SIM(group)..dismissGroup)
    * [~getAllUserGroup(args, [onSuccess], [onFail])](#SIM(group)..getAllUserGroup) ⇒ <code>void</code>
    * [~modifyGroup(args, [onSuccess], [onFail])](#SIM(group)..modifyGroup)
    * [~setGroupNotice(args, [onSuccess], [onFail])](#SIM(group)..setGroupNotice)
    * [~getGroupDetail(args, [onSuccess], [onFail])](#SIM(group)..getGroupDetail)
    * [~getGroupDetailList(args, [onSuccess], [onFail])](#SIM(group)..getGroupDetailList)
    * [~searchGroups(args, [onSuccess], [onFail])](#SIM(group)..searchGroups) ⇒ <code>void</code>
    * [~changeGroupOwner(args, [onSuccess], [onFail])](#SIM(group)..changeGroupOwner)
    * [~getGroupManagers(args, [onSuccess], [onFail])](#SIM(group)..getGroupManagers)
    * [~getGroupMemberIds(args, [onSuccess], [onFail])](#SIM(group)..getGroupMemberIds)
    * [~getGroupMemberList(args, [onSuccess], [onFail])](#SIM(group)..getGroupMemberList)
    * [~deleteGroupMember(args, [onSuccess], [onFail])](#SIM(group)..deleteGroupMember)
    * [~quitGroup(args, [onSuccess], [onFail])](#SIM(group)..quitGroup)
    * [~setGroupMemberRole(args, [onSuccess], [onFail])](#SIM(group)..setGroupMemberRole)
    * [~searchGroupByName(args, [onSuccess], [onFail])](#SIM(group)..searchGroupByName)
    * [~searchEsGroupByName(args, [onSuccess], [onFail])](#SIM(group)..searchEsGroupByName)

<a name="SIM(group)..setGroupAtallToggle"></a>

### SIM(group)~setGroupAtallToggle
切换@All的设置


| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数 |
| args.groupType | <code>Number</code> | 群组类型 |
| args.groupId | <code>string</code> | 群id |
| args.toggle | <code>number</code> | @All的设置 |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(group)..setGroupInvitedToggle"></a>

### SIM(group)~setGroupInvitedToggle
切换@更改邀请群成员的设置


| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数 |
| args.groupType | <code>Number</code> | 群组类型 |
| args.groupId | <code>string</code> | 群id |
| args.toggle | <code>number</code> | 邀请群成员的设置 |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(group)..getGroupIntro"></a>

### SIM(group)~getGroupIntro
获取群组简要信息


| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数 |
| args.groupType | <code>Number</code> | 群组类型 |
| args.groupId | <code>string</code> | 群组id |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(group)..createGroup"></a>

### SIM(group)~createGroup(config, [onSuccess], [onFail])
创建群组


| Param | Type | Description |
| --- | --- | --- |
| config | <code>object</code> | 群组设置 |
| config.type | <code>number</code> | 群组类型，0-群组，1-讨论组 |
| config.name | <code>string</code> | 群组名称 |
| config.members | <code>array</code> | 群成员数组 |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(group)..createEventGroup"></a>

### SIM(group)~createEventGroup(config, [onSuccess], [onFail])
创建事件群


| Param | Type | Description |
| --- | --- | --- |
| config | <code>object</code> | 群组设置 |
| config.name | <code>string</code> | 群组名称 |
| config.members | <code>array</code> | 群成员数组 |
| [config.text] | <code>sting</code> | 文字说明（0-1000） |
| [config.imageInfo] | <code>array</code> | 图片数组 |
| [config.fileInfo] | <code>array</code> | 文件数组 |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(group)..createEventExplain"></a>

### SIM(group)~createEventExplain(args, [onSuccess], [onFail])
创建事件说明
 

| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数 |
| args.groupType | <code>Number</code> | 群组类型 |
| args.groupId | <code>string</code> | 群id |
| [args.text] | <code>sting</code> | 文字说明（0-1000） |
| [args.imageInfo] | <code>array</code> | 图片数组 |
| [args.fileInfo] | <code>array</code> | 文件数组 |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(group)..getEventExplainById"></a>

### SIM(group)~getEventExplainById(args, [onSuccess], [onFail])
根据id获取事件说明


| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数 |
| args.id | <code>string</code> | 事件说明id |
| args.groupType | <code>string</code> | 事件类型 |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(group)..getGroupEventExplainByGroupId"></a>

### SIM(group)~getGroupEventExplainByGroupId(args, [onSuccess], [onFail])
获取事件群id最新事件说明


| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数 |
| args.groupType | <code>Number</code> | 群组类型 |
| args.groupId | <code>string</code> | 群id |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(group)..getEventExplainHistory"></a>

### SIM(group)~getEventExplainHistory(args, [onSuccess], [onFail])
获取事件说明历史


| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数 |
| args.groupType | <code>Number</code> | 群组类型 |
| args.groupId | <code>string</code> | 事件群id |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(group)..searchEventExplain"></a>

### SIM(group)~searchEventExplain(args, [onSuccess], [onFail])
搜索事件说明


| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数对象 |
| args.groupType | <code>Number</code> | 群组类型 |
| args.groupId | <code>sting</code> | 群组ID |
| args.text | <code>sting</code> | 要搜索的关键字 |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(group)..dismissGroup"></a>

### SIM(group)~dismissGroup(args, [onSuccess], [onFail])
解散群组


| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数 |
| args.groupType | <code>Number</code> | 群组类型 |
| args.groupId | <code>String</code> | 群组id |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(group)..getAllUserGroup"></a>

### SIM(group)~getAllUserGroup(args, [onSuccess], [onFail]) ⇒ <code>void</code>
获取加入的所有群组


| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数 |
| args.typeArr | <code>array</code> | 群组类型数组,0私密群，1公开群，2讨论组，3事件群(默认[0,1,2,3]查询所有) |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(group)..modifyGroup"></a>

### SIM(group)~modifyGroup(args, [onSuccess], [onFail])
设置群组详情


| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数 |
| args.groupType | <code>Number</code> | 群组类型 |
| args.groupId | <code>string</code> | 群组id |
| [args.groupName] | <code>object</code> | 群组姓名 |
| [args.avatar] | <code>string</code> | 群头像 |
| [args.isReview] | <code>string</code> | 修改群申请是否需要审批(1需要审核，0不需要审核) |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(group)..setGroupNotice"></a>

### SIM(group)~setGroupNotice(args, [onSuccess], [onFail])
设置群公告

| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数 |
| args.groupId | <code>string</code> | 群id |
| args.notice | <code>string</code> | 群组公告(0-5000) |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(group)..getGroupDetail"></a>

### SIM(group)~getGroupDetail(args, [onSuccess], [onFail])
获取群组详情


| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数 |
| args.groupType | <code>Number</code> | 群组类型 |
| args.groupId | <code>string</code> | 群组id |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(group)..getGroupDetailList"></a>

### SIM(group)~getGroupDetailList(args, [onSuccess], [onFail])
批量获取群组详情


| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数 |
| args.groupType | <code>Number</code> | 群组类型 |
| args.groupId | <code>string</code> | 群组id |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(group)..searchGroups"></a>

### SIM(group)~searchGroups(args, [onSuccess], [onFail]) ⇒ <code>void</code>
搜索群组


| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数对象 |
| args.groupName | <code>sting</code> | 群组名称(0-50) |
| args.typeArr | <code>array</code> | 群组类型 |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(group)..changeGroupOwner"></a>

### SIM(group)~changeGroupOwner(args, [onSuccess], [onFail])
转让群主
 

| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数 |
| args.groupType | <code>Number</code> | 群组类型 |
| args.groupId | <code>string</code> | 群组id |
| args.newOwnerId | <code>string</code> | 新群主id |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(group)..getGroupManagers"></a>

### SIM(group)~getGroupManagers(args, [onSuccess], [onFail])
获取群组管理员
 

| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数 |
| args.groupType | <code>Number</code> | 群组类型 |
| args.groupId | <code>string</code> | 群组id |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(group)..getGroupMemberIds"></a>

### SIM(group)~getGroupMemberIds(args, [onSuccess], [onFail])
获取群组成员ID集合


| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数 |
| args.groupType | <code>string</code> | 群组类型 |
| args.groupId | <code>string</code> | 群组id |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(group)..getGroupMemberList"></a>

### SIM(group)~getGroupMemberList(args, [onSuccess], [onFail])
获取群组成员
 

| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数 |
| args.groupType | <code>number</code> | 群组类型 |
| args.groupId | <code>string</code> | 群组id |
| [args.page] | <code>string</code> | 分页获取群组成员，-1-获取全部 |
| [args.size] | <code>string</code> | 每页数量 |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(group)..deleteGroupMember"></a>

### SIM(group)~deleteGroupMember(args, [onSuccess], [onFail])
踢人


| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数 |
| args.groupType | <code>number</code> | 群组类型 |
| args.groupId | <code>string</code> | 群组id |
| args.members | <code>array</code> | 用户id数组 |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(group)..quitGroup"></a>

### SIM(group)~quitGroup(args, [onSuccess], [onFail])
退出群组


| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数 |
| args.groupId | <code>string</code> | 群组id |
| args.groupType | <code>string</code> | 群组类型 |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(group)..setGroupMemberRole"></a>

### SIM(group)~setGroupMemberRole(args, [onSuccess], [onFail])
修改群成员角色
 

| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数 |
| args.groupType | <code>number</code> | 群组类型 |
| args.groupId | <code>string</code> | 群组id |
| args.members | <code>string</code> | 成员id |
| args.type | <code>string</code> | 1设置管理员，2取消管理员 |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(group)..searchGroupByName"></a>

### SIM(group)~searchGroupByName(args, [onSuccess], [onFail])
搜索


| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数 |
| args.text | <code>sting</code> | 关键字 |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(group)..searchEsGroupByName"></a>

### SIM(group)~searchEsGroupByName(args, [onSuccess], [onFail])
搜索
 

| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数 |
| args.text | <code>string</code> | 关键字 |
| args.index | <code>number</code> | 索引 |
| args.size | <code>number</code> | 行数 |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(message)"></a>

## SIM(message)
sdk实例，对外暴露的接口


* [SIM(message)](#SIM(message))
    * [~getMsgListAndCdMsgById](#SIM(message)..getMsgListAndCdMsgById)
    * [~getVedioMsgListAtOneMinute](#SIM(message)..getVedioMsgListAtOneMinute) ⇒ <code>Promise</code>
    * [~getMessageListById(args)](#SIM(message)..getMessageListById)
    * [~searchMsg(query)](#SIM(message)..searchMsg) ⇒ <code>Promise</code>
    * [~getMsgReadData(query)](#SIM(message)..getMsgReadData) ⇒ <code>Promise</code>
    * [~getReplyList(args)](#SIM(message)..getReplyList)
    * [~getMessageDetails(args)](#SIM(message)..getMessageDetails)
    * [~signMessage(args)](#SIM(message)..signMessage)
    * [~unSignMessage(args)](#SIM(message)..unSignMessage)
    * [~getSignList(args)](#SIM(message)..getSignList)

<a name="SIM(message)..getMsgListAndCdMsgById"></a>

### SIM(message)~getMsgListAndCdMsgById
获取指定区间内消息和被指令修改的消息

| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数 |
| args.chatId | <code>object</code> | 单聊传接收方账号，群聊传群id(1-32位) |
| args.chatType | <code>number</code> | 类型 0单聊，1群聊，2订阅号 |
| args.securityType | <code>number</code> | 安全类型，0普通，1密聊 |
| [args.msgId] | <code>string</code> | 消息id |
| [args.rows] | <code>number</code> | 获取数量 |
| [args.direct] | <code>number</code> | 类型 0向下拉，1向上拉，2定位前后 |

<a name="SIM(message)..getMessageListById"></a>

### SIM(message)~getMessageListById(args)
获取指定id前或后的消息


| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数 |
| args.chatId | <code>object</code> | 单聊传接收方账号，群聊传群id(1-32位) |
| args.chatType | <code>number</code> | 类型 0单聊，1群聊，2订阅号 |
| args.securityType | <code>number</code> | 安全类型，0普通，1密聊 |
| [args.msgId] | <code>string</code> | 消息id |
| [args.rows] | <code>number</code> | 获取数量 |
| [args.direct] | <code>number</code> | 类型 0向下拉，1向上拉，2定位前后 |

<a name="SIM(message)..searchMsg"></a>

### SIM(message)~searchMsg(query) ⇒ <code>Promise</code>
历史记录搜索


| Param | Type | Description |
| --- | --- | --- |
| query | <code>object</code> | 参数 |
| query.chatId | <code>number</code> | 单聊传接收方账号，群聊传群id(1-32位) |
| query.chatType | <code>number</code> | 类型 0单聊，1群聊，2订阅号 |
| query.securityType | <code>number</code> | 安全类型，0普通，1密聊 |
| [query.msgId] | <code>string</code> | 消息id |
| [query.searchName] | <code>string</code> | 搜索文字 |
| query.rows | <code>number</code> | 获取数量 |
| query.type | <code>number</code> | 搜索类型 0全部，1文件，2图片及视频 |

<a name="SIM(message)..getMsgReadData"></a>

### SIM(message)~getMsgReadData(query) ⇒ <code>Promise</code>
历史记录搜索


| Param | Type | Description |
| --- | --- | --- |
| query | <code>object</code> | 参数 |
| query.isRead | <code>number</code> | 状态 0未读，1已读. |
| query.msgId | <code>string</code> | 消息id. |

<a name="SIM(message)..getReplyList"></a>

### SIM(message)~getReplyList(args)
获取回复列表


| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数 |
| args.msgId | <code>string</code> | 消息id |
| args.chatType | <code>string</code> | 类型 0单聊，1群聊，2订阅号 |

<a name="SIM(message)..getMessageDetails"></a>

### SIM(message)~getMessageDetails(args)
获取消息详情


| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数 |
| args.msgIds | <code>string</code> | 消息id数组 |
| args.chatType | <code>string</code> | 类型 0单聊，1群聊，2订阅号 |

<a name="SIM(message)..signMessage"></a>

### SIM(message)~signMessage(args)
标记消息


| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数 |
| args.msgId | <code>string</code> | 消息id数组 |
| args.chatId | <code>object</code> | 单聊传接收方账号，群聊传群id(1-32位) |
| args.chatType | <code>number</code> | 类型 0单聊，1群聊，2订阅号 |
| args.securityType | <code>number</code> | 安全类型，0普通，1密聊 |

<a name="SIM(message)..unSignMessage"></a>

### SIM(message)~unSignMessage(args)
取消标记消息
 

| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数 |
| args.msgId | <code>string</code> | 消息id数组 |
| args.chatId | <code>object</code> | 单聊传接收方账号，群聊传群id(1-32位) |
| args.chatType | <code>number</code> | 类型 0单聊，1群聊，2订阅号 |
| args.securityType | <code>number</code> | 安全类型，0普通，1密聊 |

<a name="SIM(message)..getSignList"></a>

### SIM(message)~getSignList(args)
获取标记列表


| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数 |
| args.chatId | <code>object</code> | 单聊传接收方账号，群聊传群id(1-32位) |
| args.chatType | <code>number</code> | 类型 0单聊，1群聊，2订阅号 |
| args.securityType | <code>number</code> | 安全类型，0普通，1密聊 |
| [args.signDate] | <code>number</code> | 标记时间戳 |
| [args.rows] | <code>number</code> | 条数 |

<a name="SIM(user)"></a>

## SIM(user)
sdk实例，对外暴露的接口


* [SIM(user)](#SIM(user))
    * [~getPersonalData(args, [onSuccess], [onFail])](#SIM(user)..getPersonalData)
    * [~setPersonalData(args)](#SIM(user)..setPersonalData)
    * [~getMultiPersonalData(args)](#SIM(user)..getMultiPersonalData)
    * [~fetchMultiPersonalData(args)](#SIM(user)..fetchMultiPersonalData)

<a name="SIM(user)..getPersonalData"></a>

### SIM(user)~getPersonalData(args, [onSuccess], [onFail])
拉取用户资料


| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 参数对象 |
| args.userId | <code>string</code> | 目标账号(1-32位) |
| [onSuccess] | <code>function</code> | 成功回调 |
| [onFail] | <code>function</code> | 失败回调 |

<a name="SIM(user)..setPersonalData"></a>

### SIM(user)~setPersonalData(args)
设置资料


| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 资料信息 |
| args.userNickname | <code>string</code> | 昵称(1-50位) |
| args.gender | <code>number</code> | 性别0男性，1女性 |
| args.avatar | <code>string</code> | 头像URL路径(1-500位) |
| args.birthday | <code>string</code> | 生日（时间戳） |
| args.location | <code>string</code> | 所在地(16位) |
| args.selfSignature | <code>string</code> | 个性签名(1-500位) |
| args.allowType | <code>number</code> | 加好友验证方式0允许任何人添加自己为好友,1需要经过自己确认才能添加自己为好友,2不允许任何人添加自己为好友 |
| args.language | <code>string</code> | 语言(1-32位) |
| args.msgSettings | <code>number</code> | 消息设置(置0表示接收消息，置1则不接收消息) |
| args.adminForbidType | <code>number</code> | 管理员禁止加好友标识0允许加好友,1禁止该用户发起加好友请求 |
| args.definition | <code>string</code> | 自定义字段内容(1-500位) |

<a name="SIM(user)..getMultiPersonalData"></a>

### SIM(user)~getMultiPersonalData(args)
批量获取账号信息


| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 资料信息 |
| args.userIds | <code>string</code> | 用户id数组 |

<a name="SIM(user)..fetchMultiPersonalData"></a>

### SIM(user)~fetchMultiPersonalData(args)
批量获取账号信息(post方式)


| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | 资料信息 |
| args.userIds | <code>string</code> | 用户id数组 |


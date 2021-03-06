# 闪布 SDK

## 文档地址： ```https://developer.sammbo.com/imsdk-doc/```

## 文档/菜单维护地址：  ```https://developer.sammbo.com/thunbu-assets/```

# 闪布IM SDK 产品介绍V1.0

# 产品概述
## 闪布IM简介
* 闪布云 IM 即时通讯服务基于线上办公协同平台—闪布的 IM 技术底层能力，致力于打造让工作没有距离的办公场景，并以此为基础向外衍生，提供多行业、多领域、多场景的一整套即时通讯基础能力。企业可以从自身的场景与需求出发，通过闪布云IM SDK在不同的应用端口极速搭建即时通讯产品，快速实现私信、群聊、消息通知、群组管理等一系列需求。闪布云IM为针对企业不同阶段不同场景的不同需求，提供了全方位的组件，组件包括Android、iOS、Windows、Mac、Web 等，开发者利用这些组件和能力可以快捷地构建高速且稳定的即时通讯产品。
## 架构~~~~图
## 功能介绍
### 全球部署
闪布为满足线上办公协同的无距离感、全覆盖效果，已在全国的各个区域部署了服务器，针对高需求的海外用户，也已针对各大洲的区域分别在新加坡、法兰克福等地做了相应的部署，结合闪布独创的同构混合云，闪布IM SDK提供了全链路、安全高效的通信服务，让企业无后顾之忧，为业务添砖加瓦
全球接入加速点分布如下：
中国：
### 单聊
可以与好友进行普通1V1的聊天，消息类型支持：文字、表情、表情包、图片、视频等，同时支持对消息做删除、撤回、复制、搜索、置顶会话等能力，详情可见：IM 单聊消息文档
### 群聊
支持最高500人的多人聊天服务，适用于应用内聊天、企业通讯、项目管理、临时会议等场景，根据不同形式与要求的群聊，闪布IM也将持续开放不同的群组类型，满足企业需求，详情可见： IM 群组消息文档
### 群管理
群聊除了基础的即时通信功能之外，闪布 IM SDK同时提供了群组管理。可针对业务需求设置群公告、批量添加或删除成员、转让群主、设置或取消群管理员，详细可见 IM 群组管理文档。
### 本地化部署
闪布IM SDK后台部署可定制化，支持将IM模块的后台独立部署在企业本地或闪布云生态中，满足企业各方需求。

## 接入流程图

# 应用场景
## 办公协同
* 闪布IM SDK起始于闪布线上办公协同平台的基础，深挖企业办公协同的痛点，可满足企业办公线上交流、远程办公的日程所需，可实现点对点聊天、群聊等模式，支持文字、图片、表情、视频等多种消息体，做到实时收发消息，高效触达，有效提升用户回复率
* 示例场景：线上办公、企业内部通信
* 推荐功能：设置群管理员、发布群公告

## 线上社交
* 闪布IM SDK支持多种类丰富的消息体且提供在线离线两种状态的消息触达，支持多端口，让沟通零距离
* 示例场景：陌生人社交、相亲角
* 推荐功能：表情包、撤回

## 客服系统
* 闪布 IM SDK 满足企业在官网、应用内等端口的线上咨询平台的搭建，针对不同的客服反馈机制，可支持一对一的服务反馈与多对多的协商沟通渠道，提升企业服务质量，有效降低沟通成本
* 示例场景：一对一咨询、多方协商
* 推荐功能：单聊、群聊

## 线上教育
* 闪布 IM SDK 提供群聊互动能力，群聊支持2000人，轻松实现文字、语音、图片、表情包等多消息类型，管理灵活，轻松打造良好的群聊管理；
* 示例场景：老师家长学生多人群聊
* 推荐功能：表情包、撤回

## 团购商城
* 闪布 IM SDK 可支持社区团购类线上商城的商家咨询、客服咨询等需求，且不在 商城 之外建立并行的用户体系，与现有业务体系能够实现完美融合
* 示例场景：商品咨询、售后处理
* 推荐功能：单聊、图片表情包

# 业务功能
## 单聊
* 指两个用户可与好友进行一对一聊天，在支持单聊消息的同时，闪布IM SDK也可提供消息的权限控制与扩展能力，企业可实时获取历史记录、多终端同步等能力
* 可以与好友进行普通1V1的聊天，消息类型支持：文字、表情、表情包、图片、视频等，同时支持对消息做删除、撤回、复制、搜索、置顶会话等能力。
### 字段说明

| 功能                   | 描述               |
| ----------------------- | --------------------- |
| 文字消息 | 消息是普通文本   |
| 表情消息 | 消息是默认表情与自带表情包  |
| 图片消息 | 消息内容为图片的 URL 地址、尺寸、图片大小等信息，最大支持大小为20M的图片 |
| 视频消息| 消息内容为语音文件的URL地址、时长、大小、格式等信息，最大支持大小为20M的视频 |
| 消息可复制 | 可通过各终端设置选择文本、表情类消息体进行复制 |
| 消息体可删除| 可将所需的消息进行选中删除|
| 可在单聊会话中添加群聊| 可根据实际情况在单聊会话中选择添加其他用户创建群聊会话 |
| 设置会话置顶/取消会话置顶| 可根据实际情况将会话置顶与会话列表或取消置顶 |
| 多端同步| 可支持IM在多端同步使用并展示|
| 其他| 闪布已有功能将逐步开放至SDK|

## 群聊
* 指多个用户可在同一个群组中进行多人聊天，并在支持单聊消息功能的同时提供群主、管理员角色，增加多场景聊天需求的可行性
* 可以与好友进行多人聊天，消息类型支持：文字、表情、表情包、图片、视频等，同时支持对消息做删除、撤回、复制、搜索、置顶会话等能力。
### 字段说明
| 功能                   | 描述               |
| ----------------------- | --------------------- |
| 文字消息 | 消息是普通文本   |
| 表情消息 | 消息是默认表情与自带表情包  |
| 图片消息 | 消息内容为图片的 URL 地址、尺寸、图片大小等信息，最大支持大小为20M的图片 |
| 视频消息| 消息内容为语音文件的URL地址、时长、大小、格式等信息，最大支持大小为20M的视频 |
| 消息可复制 | 可通过各终端设置选择文本、表情类消息体进行复制 |
| 消息体可删除| 可将所需的消息进行选中删除|
| 设置会话置顶/取消会话置顶| 可根据实际情况将会话置顶与会话列表或取消置顶 |
| 查找聊天内容| 支持云端消息记录，可随时查看群聊历史信息 |
| 多端同步| 可支持IM在多端同步使用并展示|
| 其他| 闪布已有功能将逐步开放至SDK|

## 群组管理
* 闪布 IM SDK 针对群聊提供了多种权限操作，可针对不同的场景、不同的人数以及不同的角色进行相应的群聊设置
### 字段说明
| 功能                   | 描述               |
| ----------------------- | --------------------- |
| 设置群名称 | 支持独立设置群聊名称  |
| 设置群公告 | 支持根据不同时期不同团队添加、修改群公告通知  |
| 设置群管理员 | 支持设置群管理员 |
| 解除管理员| 支持群主解除管理员权限 |
| 查看群成员列表|支持查看群组成员列表 |
| 添加群成员| 支持群主设置添加成员的权限，添加时也可以选填邀请理由|
| 删除群成员| 支持群主与管理员单独/批量删除群成员 |
| 消息置顶 | 支持群主转让群主角色至群组其他成员 |
| 解散群| 支持群主解散群聊会话|
| 其他| 闪布已有功能将逐步开放至SDK|

# 使用边界
## 消息
| 功能         | 边界       |
| ----------- | -----------|
| 文字 | 支持最大5000字符 |
| 其他 | 闪布已有功能将逐步开放至SDK |

## 群组管理
| 功能         | 边界       |
| ----------- | -----------|
| 群组成员 | 最高支持群组同时存在500人 |
| 邀请群组成员 | 单次最多支持邀请50个成员 |
| 设置群名称 | 支持最大长度64字符 |
| 设置群公告| 支持最大长度1024个字符 |
| 批量设置管理员|单次最多支持10人 |
| 批量解除管理员| 单次最多支持10人|
| 其他| 闪布已有功能将逐步开放至SDK|





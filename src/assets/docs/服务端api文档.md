**服务端 API 文档 > 接口概述**

## 以下参数需要放在 Http Request Header 中


| 参数  | 数据类型 |                      说明                      |  
| :-----: | :-------: | :--------: |  
| appId |   String |  闪布对接平台分配的 appId  |  
| token |   String | 闪布服务端 api 接口认证凭证，通过 api 接口获取 |  


token作为闪布api接口的认证凭证，有效时间为24h，第三方应用应自己维护有效性，在过期时重新获取

---
&emsp;


## REST API

###### 获取管理员权限

闪布提供的 API 接口需要权限才能访问，该api接口用于获取闪布的token，下面介绍获取 token 的方式。

---

| 方式 |                   路径 |
| ---- | ---------------------: |
| post | /fcWeb/imsdk/app/token |

---

###### Request Headers



| 参数 | 数据类型 |                  说明 |
| ---- | -------: |---------------------: |
| appId | String | 闪布对接平台分配的 appId|

###### Request Body

| 参数  | 数据类型 |                   说明 |
| ----  | -------:| ---------------------: |
| currentTime     | String |当前UTC时间戳，从1970年1月1日0点0 分0 秒开始到现在的秒数|
| verifySignature |  String |验证签名|

###### Response Body

| 参数  | 数据类型 |                   说明 |
| ----  | -------:| ---------------------: |
| code     | int |返回状态码，200000表示成功|
| message |  String |错误原因|
| data |  String |数据对象|

下面是data对象数据结构

| 参数  | 数据类型 |                   说明 |
| ----  | -------:| ---------------------: |
| token     | String |闪布服务端 api 接口认证凭证|
| expires |  String |token 有效时间|

请求示例

```html
   String currentTime = String.valueOf(System.currentTimeMillis()/1000);
   Map<String,String> map = new TreeMap<>();
   map.put("appId", sdkappid);
   map.put("currentTime", currentTime);
   String requestParams = JSONObject.toJSONString(map);
   String verifySignature = RSAUtils.sign(requestParams.getBytes("UTF-8"), privateKey);
   map.put("verifySignature",verifySignature);
   String result = HttpUtil.doPost(tokenUrl, map,null,sdkappid);
   JSONObject obj = JSONObject.parseObject(result);
   int code = (Integer)obj .get("code");
   if(200000 == code){
       JSONObject data = (JSONObject) obj.get("data");
       String token = (String)data.get("token");
       String key = "appId:token:"+sdkappid;
       if(StringUtils.isNotEmpty(result)){
          redisService.set(key,token,1000*60*60*12);
       }
       return token;
    }else{
       return null;
    }
		
```

&emsp;

&emsp;



###### 注册用户（单个）

闪布提供的 API 接口用于账号注册

---

| 方式 |                   路径 |
| ---- | ---------------------: |
| post | /fcWeb/imsdk/app/user |

---

###### Request Headers



| 参数 | 数据类型 |                  说明 |
| ---- | -------: |---------------------: |
| appId | String | 闪布对接平台分配的 appId|
| token | String | 闪布 api 接口认证凭证 |

###### Request Body

| 参数  | 数据类型 |                   说明 |
| ----  | -------:| ---------------------: |
| userName     | String |用户姓名，最大长度50字符，可设置为空字符串|
| avatar |  String |头像URL路径，最大长度500字符，可设置为空字符串|

###### Response Body

| 参数  | 数据类型 |                   说明 |
| ----  | -------:| ---------------------: |
| code     | int |返回状态码，200000表示成功|
| message |  String |错误原因|
| data |  String |数据对象|

下面是data对象数据结构

| 参数  | 数据类型 |                   说明 |
| ----  | -------:| ---------------------: |
| userId     | String |用户账号，闪布用户的唯一账号|
| userName |  String |用户姓名|

请求示例

```html
   UserInfo userInfo = new UserInfo();
   Map<String,String> map = new TreeMap<>();
   map.put("userName",userName);
   map.put("avatar",avatar);
   String result = HttpUtil.doPost(userUrl, map,token,sdkappid);
   JSONObject obj = JSONObject.parseObject(result);
   int code = (Integer)obj .get("code");
   if(200000 == code){
      JSONObject data = (JSONObject) obj.get("data");
      String userId = (String)data.get("userId");
      userInfo.setUserId(userId);
      userInfo.setUserName(userName);
   }
   return userInfo;	
		
```

&emsp;

&emsp;

###### 获取userSig

userSig用于客户端sdk交互的唯一凭证
---

| 方式 |                   路径 |
| ---- | ---------------------: |
| post | /fcWeb/imsdk/app/userSig |

---

###### Request Headers



| 参数 | 数据类型 |                  说明 |
| ---- | -------: |---------------------: |
| appId | String | 闪布对接平台分配的 appId|
| token | String | 闪布 api 接口认证凭证 |

###### Request Body

| 参数  | 数据类型 |                   说明 |
| ----  | -------:| ---------------------: |
| userId     | String |用户账号，闪布用户的唯一账号|
| terminalCode |  String |登录的客户端，同端会进行互踢，0.app端 1.pc端，web端 2.车机端|

###### Response Body

| 参数  | 数据类型 |                   说明 |
| ----  | -------:| ---------------------: |
| code     | int |返回状态码，200000表示成功|
| message |  String |错误原因|
| data |  String |数据对象|

下面是data对象数据结构

| 参数  | 数据类型 |                   说明 |
| ----  | -------:| ---------------------: |
| userSig     | String |im通讯凭证|

请求示例

```html
   String token = tokenService.getToken();
   String userSig = "";
   Map<String,String> map = new TreeMap<>();
   map.put("userId",userId);
   map.put("terminalCode",terminalCode);
   String result = HttpUtil.doPost(userSigUrl, map,token,sdkappid);
   JSONObject obj = JSONObject.parseObject(result);
   int code = (Integer)obj .get("code");
   if(200000 == code){
      JSONObject data = (JSONObject) obj.get("data");
      userSig = (String) data.get("userSig");
   }
   return userSig;
		
```

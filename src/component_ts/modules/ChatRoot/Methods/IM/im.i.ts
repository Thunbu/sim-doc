export interface IMGetUsersData {
    userIds: string[]
}
export interface IMGetUsersDataItem {
    avatar: string,
    createTime: string,
    userNickname: string,
    nicknamePy: string,
    userStatus: number,
    userId: string
}
export interface IMGetChatSessionListParams {
    sessionLevel?: 0|1,
    lastPullTime?: number
}
export interface IMGetChatSessionInfoParams {
    chatId: string,
    securityType: 0|1,
    chatType: 0|1,
}
export interface IMGetMessageInterface {
    appId: string
    chatType: 0|1
    command: number
    cross: boolean
    domain: any
    groupType: 0|1
    id: string
    isAdminDelete: boolean
    isRevocation: boolean
    isSelfDelete: boolean
    message: any
    offlinePush: boolean
    offlinePushInfo: any
    pAll: number
    pReaded: number
    readed: boolean
    readedFlag: boolean
    receiver: string
    replyCount: number
    securityType: 0|1
    sender: string
    sign: boolean
    terminal: "0"|"1"
    time: number
    type: MessageTypeEnum
    userId: string
    varStatus: number
}
export interface IMGetChatSessionItem {
    account: string
    appId: string
    avatar: string
    createTime: string
    cross: 0|1
    id: string
    invalid: 0|1
    isShow: 0|1
    isTop: 0|1
    lastMsg: IMGetMessageInterface,
    messageCount: number
    notDisturb: 0|1
    securityType: 0|1
    sessionId: string
    sessionLevel: 0|1
    sessionName: string
    sessionType: 0|1
    toppingTimeLong: string
    unreadFirstPacketId: string
    updateTime: string
}

export type MessageTypeEnum = 0|1|2|3|4|5;
export type MessageItemInterface = {
    id: string,
    chatId: string,
    time: string|number,
    chatType: 0|1,
    receiverId: string,
    state: -1|0|1,
    isDelete: boolean,
    type: MessageTypeEnum,
    message: any,
    domain: any,
    sender: string,
};
export interface IMSendMessageBaseTypes<T, D = any> {
    securityType: 0|1,
    receiver: string,
    chatType: 0|1,
    cross: 0|1,
    type: MessageTypeEnum,
    id: string,
    time: number,
    message: T,
    domain: D
}
export type IMSendMessageTypes<T = any, D = any> = IMSendMessageBaseTypes<T, D>;

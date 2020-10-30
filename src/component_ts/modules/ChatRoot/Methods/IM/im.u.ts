import {
    IMGetChatSessionItem,
    IMGetMessageInterface,
    IMGetUsersDataItem,
    IMSendMessageTypes,
    MessageItemInterface
} from "./im.i";
import {SendMsgMetaType} from "../../Store/Action/message.a";
import {UserInterface} from "../../Store/Types/users.t";
import {ChatItemInterface} from "../../Store/Types/chatList.t";
import {formatChatViewTime} from "../index";

export const SendMsgDataJoinToRealData = (
    Data: IMSendMessageTypes,
    params: SendMsgMetaType,
    sender: string,
    status: MessageItemInterface["state"]
): MessageItemInterface => {
    return {
        id: Data.id,
        chatId: Data.receiver,
        time: Data.time,
        chatType: Data.chatType,
        receiverId: Data.receiver,
        sender: sender,
        state: status,
        isDelete: false,
        type: Data.type,
        message: Data.message,
        domain: Data.domain
    }
}
export const SendMsgMetaDataJoinToRealData = (params: SendMsgMetaType): IMSendMessageTypes => {
    return {
        securityType: 0,
        receiver: params.receiver,
        chatType: params.chatType,
        cross: 0,
        type: params.type,
        id: window.SIM.utils.getGuid(4),
        time: new Date().getTime(),
        message: {
            text: params.content,
        },
        domain: {},
    };
}
export const IMGetMessageJoinToLocal = (params: IMGetMessageInterface): MessageItemInterface => {
    return {
        id: params.id,
        chatId: params.sender,
        time: params.time,
        chatType: params.chatType,
        receiverId: params.receiver,
        sender: params.sender,
        state: 1,
        isDelete: false,
        type: params.type,
        message: params.message,
        domain: params.domain
    }
}

export const IMUserMessageJoinToLocal = (params: IMGetUsersDataItem): UserInterface => {
    return {
        avatar: params.avatar,
        name: params.userNickname,
        id: params.userId,
    }
}
export const IMChatSessionInfoJoinToLocal = (ChatList: IMGetChatSessionItem): ChatItemInterface => {
    return {
        avatar: ChatList.avatar,
        name: ChatList.sessionName,
        time: formatChatViewTime(ChatList.updateTime),
        news: '',
        id: ChatList.sessionId,
    }
}

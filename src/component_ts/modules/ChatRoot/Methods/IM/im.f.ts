import {
    IMGetChatSessionInfoParams,
    IMGetChatSessionItem,
    IMGetChatSessionListParams,
    IMGetUsersData,
    IMGetUsersDataItem, IMSendMessageTypes,
    MessageItemInterface,
} from "./im.i";


export const IM_GetMultiPersonalData = (params: IMGetUsersData): Promise<IMGetUsersDataItem[]> => {
    return new Promise<IMGetUsersDataItem[]>((resolve, reject) => {
        window.SIM.getMultiPersonalData(params, resolve, reject);
    });
}

export const IM_GetChatSessionList = (params: IMGetChatSessionListParams): Promise<IMGetChatSessionItem[]> => {
    return new Promise<IMGetChatSessionItem[]>((resolve, reject) => {
        window.SIM.getAllChat(params, resolve, reject);
    });
}
export const IM_GetChatSessionInfo = (params: IMGetChatSessionInfoParams): Promise<IMGetChatSessionItem> => {
    return new Promise<IMGetChatSessionItem>((resolve, reject) => {
        window.SIM.getChatInfo(params, resolve, reject);
    });
}

export const IM_SendMessage = (params: IMSendMessageTypes): Promise<any> => {
    return new Promise<MessageItemInterface>((resolve, reject) => {
        window.SIM.sendMsg(params, resolve, reject);
    });
}

import {
    __DefaultSDKHTTPLocation,
    __DefaultWSLocation,
    __IMLoginAppId,
    __IMLoginAppVersion,
    __IMLoginTerminal
} from "../../config";
import {IMGetChatSessionInfoParams, IMGetMessageInterface} from "./im.i";
import {IMChatSessionInfoJoinToLocal, IMGetMessageJoinToLocal, IMUserMessageJoinToLocal} from "./im.u";
import {UPDATE_USER_MESSAGE, UserInterface} from "../../Store/Types/users.t";
import {DefaultUser} from "../../Store/Data/users.data";
import {IM_GetChatSessionInfo, IM_GetMultiPersonalData} from "./im.f";
import {ADD_MESSAGE_TO_CHAT, ADD_MESSAGE_TO_MAP} from "../../Store/Types/message.t";
import {UPDATE_CHAT_ITEM} from "../../Store/Types/chatList.t";

export interface SIMLoginParams {
    appId: string,
    terminal: string,
    userId: string,
    account: string,
    userSig: string,
    appversion: string,
    isForce: boolean
}

export const InitSIM = <T = any>(): Promise<T> => {
    return new Promise((resolve, reject) => {
        window.SIM.init({
            serverip: __DefaultWSLocation,
            apiBaseUrl: __DefaultSDKHTTPLocation,
            debug: false
        }, resolve, reject);
    });
}

export const LoginSIM = <T = any>(userId: string, userSig: string): Promise<T> => {
    const LoginObject: SIMLoginParams = {
        appId: __IMLoginAppId,
        terminal: __IMLoginTerminal,
        userId: userId,
        account: userId,
        userSig: userSig,
        appversion: __IMLoginAppVersion,
        isForce: true
    }
    return new Promise((resolve, reject) => {
        window.SIM.login(LoginObject, resolve, reject);
    });
}
export const FetchUserMessage = (userIds: string[]): Promise<UserInterface[]> => {
    const store = window.$store;
    return new Promise((resolve, reject) => {
        IM_GetMultiPersonalData({
            userIds: userIds
        }).then((res) => {
            resolve(res.map((item) => {
                const userMsg = IMUserMessageJoinToLocal(item);
                store.dispatch({ type: UPDATE_USER_MESSAGE, data: {msg: userMsg, id: userMsg}});
                return userMsg;
            }));
        }).catch(reject);
    })
}

export const GetUserInfo = (userId: string): UserInterface => {
    const store = window.$store;
    const userMap = store.getState().Users.UserMap;
    const userMsg = userMap[userId];
    if (userMsg) {
        return userMsg;
    } else {
        FetchUserMessage([userMsg.id]);
        return DefaultUser;
    }
}
export const CheckChatStatus = (chatId: string, chatType: IMGetChatSessionInfoParams['chatType']) => {
    const store = window.$store;
    const { list, listMap } = store.getState().ChatList;
    if (!(listMap[chatId] && list.indexOf(chatId) > -1)) {
        IM_GetChatSessionInfo({
            chatId: chatId,
            chatType: chatType,
            securityType: 0
        }).then((res) => {
            const chatMsg = IMChatSessionInfoJoinToLocal(res);
            store.dispatch({ type: UPDATE_CHAT_ITEM, data: chatMsg });
        });
    }
}

export const OnGetNewMessage = (msg: IMGetMessageInterface): void => {
    const store = window.$store;
    const Msg = IMGetMessageJoinToLocal(msg);
    GetUserInfo(Msg.sender);
    CheckChatStatus(Msg.chatId, Msg.chatType);
    store.dispatch({ type: ADD_MESSAGE_TO_MAP, data: Msg });
    store.dispatch({ type: ADD_MESSAGE_TO_CHAT, data: {chatId: Msg.chatId, messageId: Msg.id}});
};
export const ListenSIMEvents = () => {
    window.SIM.addEventListener('msg', (msg: IMGetMessageInterface) => {
        OnGetNewMessage(msg);
    });
    window.SIM.addEventListener('notice', (res: any) => {
        console.log('notice: ', res);
    });
    window.SIM.addEventListener('msgChange', (res: any) => {
        console.log('msgChange: ', res);
    });
    window.SIM.addEventListener('connectChange', (status: any) => {
        console.log('connectChange: ', status);
    });
}

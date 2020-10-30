import {StoreDispatchHandle, StoreStatesTypes} from "../../Store/store.i";
import {ChangeActiveChat} from "../../Store/Action/chatList.a";
import {ChatItemInterface} from "../../Store/Types/chatList.t";
import {MessageItemInterface} from "../../Methods/IM/im.i";


export interface ChatListUseStoreStatesTypes {
    ChatList: string[],
    activeChat: string,
    GetChatItemByKey: (key: string) => ChatItemInterface,
    GetChatLastMsg(chatId: string): MessageItemInterface|undefined
}
export interface ChatListUseStoreActionsTypes {
    ChangeActiveChat: (activeChat: ChatItemInterface) => void,
}
export type ChatListUseStoreInterface = ChatListUseStoreStatesTypes & ChatListUseStoreActionsTypes;

export interface ChatListComponentPropsInterface extends ChatListUseStoreInterface {

}
export interface ChatListComponentStatesInterface {

}

export const ChatListUseStoreStates = (state: StoreStatesTypes): ChatListUseStoreStatesTypes => ({
    ChatList: state.ChatList.list,
    activeChat: state.ChatList.active,
    GetChatItemByKey: (key) => state.ChatList.listMap[key],
    GetChatLastMsg: (chatId: string) => {
        const chatMsgList = state.Message.ChatMessageList[chatId];
        if (chatMsgList) {
            return state.Message.MessageMap[chatMsgList.slice(-1)[0]];
        }
    }
});
export const ChatListUseStoreActions = (dispatch: StoreDispatchHandle): ChatListUseStoreActionsTypes => ({
    ChangeActiveChat: (activeChat: ChatItemInterface) => ChangeActiveChat(dispatch, activeChat)
});

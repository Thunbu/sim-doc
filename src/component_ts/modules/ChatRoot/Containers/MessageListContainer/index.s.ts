import {StoreDispatchHandle, StoreStatesTypes} from "../../Store/store.i";
import {ChatItemInterface} from "../../Store/Types/chatList.t";
import {UserInterface} from "../../Store/Types/users.t";
import {CurrentUserInterface} from "../../Store/Types/system.t";
import {MessageItemInterface} from "../../Methods/IM/im.i";

export interface MessageListUseStoreStatesInterface {
    GetChatMessagesByChatId: (id: string) => string[],
    GetMessageById: (id: string) => MessageItemInterface,
    CurrentUser: CurrentUserInterface,
    GetUserInfo(userId: string): UserInterface
}
export interface MessageListUseStoreActionsInterface {

}
export type MessageListUseStorePropsInterface = MessageListUseStoreStatesInterface & MessageListUseStoreActionsInterface;

export interface MessageListContainerPropsInterface extends MessageListUseStorePropsInterface {
    chat: ChatItemInterface
}
export interface MessageListContainerStateInterface {

}

export const MessageListContainerUseStoreStates = (state: StoreStatesTypes): MessageListUseStoreStatesInterface => ({
    GetMessageById: (id: string) => state.Message.MessageMap[id],
    GetChatMessagesByChatId: (id: string) => state.Message.ChatMessageList[id],
    CurrentUser: state.System.CurrentUser,
    GetUserInfo: (userId: string) => state.ChatList.listMap[userId]
});
export const MessageListContainerUseStoreActions = (dispatch: StoreDispatchHandle): MessageListUseStoreActionsInterface => ({

})

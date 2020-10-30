import {StoreDispatchHandle, StoreStatesTypes} from "../../Store/store.i";
import {ChatItemInterface} from "../../Store/Types/chatList.t";

export interface MessageMainUseStoreStatesInterface {
    ActiveChat: string,
    GetChatItemByKey: (key: string) => ChatItemInterface
}
export interface MessageMainUseStoreActionsInterface {

}
export type MessageMainUseStoreInterface = MessageMainUseStoreStatesInterface & MessageMainUseStoreActionsInterface;

export interface MessageMainPropsInterface extends MessageMainUseStoreInterface {

}
export interface MessageMainStateInterface {

}


export const MessageMainUseStoreStates = (state: StoreStatesTypes): MessageMainUseStoreStatesInterface => ({
    ActiveChat: state.ChatList.active,
    GetChatItemByKey: (key: string) => state.ChatList.listMap[key]
});
export const MessageMainUseStoreActions = (dispatch: StoreDispatchHandle): MessageMainUseStoreActionsInterface => ({

});

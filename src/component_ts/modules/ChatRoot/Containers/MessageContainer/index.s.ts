import {ChatItemInterface} from "../../Store/Types/chatList.t";
import {StoreDispatchHandle, StoreStatesTypes} from "../../Store/store.i";
import {SendMessage, SendMsgMetaType} from "../../Store/Action/message.a";
import {CurrentUserInterface} from "../../Store/Types/system.t";


export interface MessageContainerUseStoreStateProps {
    CurrentUser: CurrentUserInterface
}
export interface MessageContainerUseStoreActionProps {
    SendMessage(params: SendMsgMetaType): void
}
export type MessageContainerUseStoreProps = MessageContainerUseStoreActionProps & MessageContainerUseStoreStateProps;

export interface MessageContainerPropsInterface extends MessageContainerUseStoreProps{
    ChatItem: ChatItemInterface
}

export const MessageContainerUseStoreStates = (state: StoreStatesTypes): MessageContainerUseStoreStateProps => ({
    CurrentUser: state.System.CurrentUser
});
export const MessageContainerUseStoreActions = (dispatch: StoreDispatchHandle): MessageContainerUseStoreActionProps => ({
    SendMessage: (params: SendMsgMetaType) => SendMessage(dispatch, params)
});

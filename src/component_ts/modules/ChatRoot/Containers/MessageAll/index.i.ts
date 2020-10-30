import {StoreDispatchHandle, StoreStatesTypes} from "../../Store/store.i";
import {UserInterface} from "../../Store/Types/users.t";
import {DefaultUser} from "../../Store/Data/users.data";
import {CurrentUserInterface} from "../../Store/Types/system.t";
import {MessageItemInterface} from "../../Methods/IM/im.i";

export interface MessageAllUseStoreStateInterface {
    CurrentUser: CurrentUserInterface,
    GetUserInfo(userId: string): UserInterface
}
export interface MessageAllUseStoreActionInterface {

}
export type MessageAllUseStoreInterface = MessageAllUseStoreActionInterface & MessageAllUseStoreStateInterface;

export interface MessageAllPropsInterface extends MessageAllUseStoreInterface {
    list: MessageItemInterface[],
}
export interface MessageAllStateInterface {

}

export const MessageAllUseStoreAction = (dispatch: StoreDispatchHandle): MessageAllUseStoreActionInterface => ({

});
export const MessageAllUseStoreState = (state: StoreStatesTypes): MessageAllUseStoreStateInterface => ({
    CurrentUser: state.System.CurrentUser,
    GetUserInfo: (userId: string) => state.Users.UserMap[userId] || DefaultUser,
});

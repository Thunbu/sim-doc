import {StoreDispatchHandle, StoreStatesTypes} from "../../Store/store.i";
import {UpdateCurrentUserInfo} from "../../Store/Action/system.a";
import {UpdateCurrentUserParams} from "../../Store/Types/system.t";
import {IMGetChatSessionItem} from "../../Methods/IM/im.i";
import {SetChatListByResponse} from "../../Store/Action/chatList.a";

export interface MainUseStoreStateTypes {
    UserIMID: string,
    UserSig: string
}
export interface MainUseStoreActionTypes {
    UpdateCurrentUserInfo(params: UpdateCurrentUserParams): void,
    SetChatListByResponse(params: IMGetChatSessionItem[]): void
}
export type MainUseStoreTypes = MainUseStoreStateTypes & MainUseStoreActionTypes;

export interface MainState {
}
export interface MainProps extends MainUseStoreTypes {
}

export const MainStoreProps = (state: StoreStatesTypes): MainUseStoreStateTypes => ({
    UserIMID: state.System.CurrentUser.IMID,
    UserSig: state.System.CurrentUser.sig,
});

export const MainStoreAction = (dispatch: StoreDispatchHandle): MainUseStoreActionTypes => ({
    UpdateCurrentUserInfo: (params: UpdateCurrentUserParams) => UpdateCurrentUserInfo(dispatch, params),
    SetChatListByResponse: (params: IMGetChatSessionItem[]) => SetChatListByResponse(dispatch, params),
});

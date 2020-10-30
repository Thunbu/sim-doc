import {StoreDispatchHandle, StoreStatesTypes} from "../../Store/store.i";
import {MenuDataItem} from "../../Store/Types/system.t";

export interface ChatOuterUseStoreStateMapTypes {
    Containers: MenuDataItem[]
}
export interface ChatOuterUseStoreActionsMapTypes {

}

export type ChatOuterUseStoreTypes = ChatOuterUseStoreActionsMapTypes & ChatOuterUseStoreStateMapTypes;
export interface ChatOuterPropsTypes extends ChatOuterUseStoreTypes {

}
export interface ChatOuterStateTypes {

}

export const ChatOuterUseStoreStateMap = (state: StoreStatesTypes): ChatOuterUseStoreStateMapTypes => ({
    Containers: state.System.Containers
});
export const ChatOuterUseStoreActionsMap = (dispatch: StoreDispatchHandle): ChatOuterUseStoreActionsMapTypes => ({

});

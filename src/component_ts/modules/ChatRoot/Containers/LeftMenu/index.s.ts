import {StoreDispatchHandle, StoreStatesTypes} from "../../Store/store.i";
import {MenuDataItem, TabContainers} from "../../Store/Types/system.t";
import {UpdateActiveContainer} from "../../Store/Action/system.a";

export interface LeftMenuInheritStoreStates {
   Containers: MenuDataItem[],
   ActiveContainer: TabContainers,
   CurrentUserAvatar: string
}
export interface LeftMenuUseStoreActions {
   UpdateActiveContainer: (containerId: TabContainers) => void;
}
export type LeftMenuInheritByReducer = LeftMenuInheritStoreStates & LeftMenuUseStoreActions;

export interface LeftMenuProps extends LeftMenuInheritByReducer {

}

export const LeftMenuStoreState = (state: StoreStatesTypes): LeftMenuInheritStoreStates => ({
   Containers: state.System.Containers,
   ActiveContainer: state.System.active,
   CurrentUserAvatar: state.System.CurrentUser.avatar
});
export const LeftMenuStoreAction = (dispatch: StoreDispatchHandle): LeftMenuUseStoreActions => ({
   UpdateActiveContainer: (containerId: TabContainers) => UpdateActiveContainer(dispatch, { containerId })
});

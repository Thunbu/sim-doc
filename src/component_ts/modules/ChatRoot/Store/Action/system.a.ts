import {
    UPDATE_ACTIVE_CONTAINER, UPDATE_CURRENT_USER,
    UpdateActiveContainerParams, UpdateCurrentUserParams
} from "../Types/system.t";
import {StoreDispatchHandle} from "../store.i";

/**
 * @author PengPeng
 * @date 10/23/20
 * @function
 * @name UpdateActiveContainer
 * @description 更新选中容器
 * @param {StoreDispatchHandle} dispatch
 * @param {UpdateActiveContainerParams} params
 * @return {void}
 */
export const UpdateActiveContainer = (dispatch: StoreDispatchHandle, params: UpdateActiveContainerParams): void => {
    dispatch({ type: UPDATE_ACTIVE_CONTAINER, data: params.containerId });
};

export const UpdateCurrentUserInfo = (dispatch: StoreDispatchHandle, params: UpdateCurrentUserParams): void => {
    const { avatar, userId, userNickName } = params;
    localStorage.setItem('USERAVATAR', avatar);
    localStorage.setItem('USERID', userId);
    localStorage.setItem('USERNAME', userNickName);
    dispatch({ type: UPDATE_CURRENT_USER, data: params });
}

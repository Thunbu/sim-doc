import {SystemStoreTypes, UPDATE_ACTIVE_CONTAINER, UPDATE_CURRENT_USER} from "./Types/system.t";
import {ActionInterface} from "./store.i";

export default (state: SystemStoreTypes, action: ActionInterface): SystemStoreTypes => {
    switch (action.type) {
        case UPDATE_ACTIVE_CONTAINER:
            return { ...state, active: action.data };
        case UPDATE_CURRENT_USER:
            return {
                ...state, CurrentUser: {
                    ...state.CurrentUser,
                    avatar: action.data.avatar,
                    name: action.data.userNickName,
                    userId: action.data.userId,
                }
            }
        default:
            return { ...state };
    }
}


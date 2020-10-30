import {ActionInterface} from "./store.i";
import {UsersStoreTypes} from "./Types/users.t";

export default (state: UsersStoreTypes, action: ActionInterface): UsersStoreTypes => {
    switch (action.type) {
        default:
            return { ...state };
    }
}


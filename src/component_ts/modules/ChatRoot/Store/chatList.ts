import {ActionInterface} from "./store.i";
import {
    ChatItemInterface,
    ChatListStoreTypes,
    SET_CHAT_LIST,
    UPDATE_ACTIVE_CHAT,
    UPDATE_CHAT_ITEM,
    UPDATE_CHAT_LIST
} from "./Types/chatList.t";

export default (state: ChatListStoreTypes, action: ActionInterface): ChatListStoreTypes => {
    switch (action.type) {
        case UPDATE_CHAT_LIST:
            return { ...state, list: action.data };
        case UPDATE_ACTIVE_CHAT:
            return { ...state, active: action.data };
        case SET_CHAT_LIST:
            return { ...state, listMap: action.data.MAP, list: action.data.IDList };
        case UPDATE_CHAT_ITEM:
            const data = <ChatItemInterface>action.data;
            const chatIdList = state.list;
            if (chatIdList.indexOf(data.id) > -1) {
                chatIdList.unshift(chatIdList.splice(chatIdList.indexOf(data.id), 1)[0]);
            } else {
                chatIdList.unshift(data.id);
            }
            return {...state, list: chatIdList, listMap: { ...state.listMap, [data.id]: data }};
        default:
            return { ...state };
    }
}

import {StoreDispatchHandle} from "../store.i";
import {ChatItemInterface, ChatListStoreTypes, SET_CHAT_LIST, UPDATE_ACTIVE_CHAT} from "../Types/chatList.t";
import {IMGetChatSessionItem} from "../../Methods/IM/im.i";
import {IMChatSessionInfoJoinToLocal} from "../../Methods/IM/im.u";

export const ChangeActiveChat = (dispatch: StoreDispatchHandle, activeChat: ChatItemInterface): void => {
    dispatch({ type: UPDATE_ACTIVE_CHAT, data: activeChat.id });
}


export const SetChatListByResponse = (dispatch: StoreDispatchHandle, ChatList: IMGetChatSessionItem[]): void => {
    const listMap: ChatListStoreTypes['listMap'] = {};
    const listIds: string[] = [];
    ChatList.forEach((item) => {
        const ChatItem = IMChatSessionInfoJoinToLocal(item);
        listMap[ChatItem.id] = ChatItem;
        listIds.push(ChatItem.id);
    });
    dispatch({
        type: SET_CHAT_LIST,
        data: {
            MAP: listMap,
            IDList: listIds
        }
    });
    return;
}

import {SystemStoreData} from "./system.data";
import {StoreStatesTypes} from "../store.i";
import {ChatListStoreData} from "./chatList.data";
import {MessageStoreData} from "./message.data";
import {UserStoreData} from "./users.data";

export const defaultStoreState: StoreStatesTypes = {
    System: SystemStoreData,
    ChatList: ChatListStoreData,
    Message: MessageStoreData,
    Users: UserStoreData
};

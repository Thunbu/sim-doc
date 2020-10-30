import {SystemStoreTypes} from "./Types/system.t";
import {ChatListStoreTypes} from "./Types/chatList.t";
import { MessageStoreTypes } from "./Types/message.t";
import {UsersStoreTypes} from "./Types/users.t";

export interface ActionInterface {
    type: string,
    data: any
}
export interface StoreStatesTypes {
    System: SystemStoreTypes,
    ChatList: ChatListStoreTypes,
    Message: MessageStoreTypes,
    Users: UsersStoreTypes
}
export type StoreHandlerMap = {
    System: (state: SystemStoreTypes, action: ActionInterface) => SystemStoreTypes,
    ChatList: (state: ChatListStoreTypes, action: ActionInterface) => ChatListStoreTypes,
    Message: (state: MessageStoreTypes, action: ActionInterface) => MessageStoreTypes,
    Users: (state: UsersStoreTypes, action: ActionInterface) => UsersStoreTypes,
};
export interface StoreDispatchParams<P> {
    type: string,
    data: P
}
export type StoreDispatchHandle<T = void, P = any> = (params: StoreDispatchParams<P>) => T;

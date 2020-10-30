import {ActionInterface} from "./store.i";
import {ADD_MESSAGE_TO_CHAT, ADD_MESSAGE_TO_MAP, MessageStoreTypes, UPDATE_MESSAGE_STATE} from "./Types/message.t";
import {__DEMOSaveToMemoryMsgLength} from "../config";

interface HandledChatMessageListReturnVal{
    Result: string[],
    Deduction: string[]
}
const GetHandledChatMessageList = (list: string[]): HandledChatMessageListReturnVal => {
    const length = __DEMOSaveToMemoryMsgLength;
    let Result: string[] = list.length > length ? list.slice(length - length*2) : list;
    const Deduction: string[] = list.length > length ? list.slice(0, list.length - length) : [];
    return {
        Result: Result,
        Deduction: Deduction,
    };
};
export default (state: MessageStoreTypes, action: ActionInterface): MessageStoreTypes => {
    switch (action.type) {
        case ADD_MESSAGE_TO_MAP:
            return { ...state, MessageMap: { ...state.MessageMap, [action.data.id]: action.data } };
        case UPDATE_MESSAGE_STATE:
            const MessageItem = state.MessageMap[action.data.id];
            return {
                ...state,
                MessageMap: {
                    ...state.MessageMap,
                    [MessageItem.id]: {
                        ...MessageItem,
                        state: action.data.state
                    }
                }
            };
        case ADD_MESSAGE_TO_CHAT:
            const ChatMessageList = (state.ChatMessageList[action.data.chatId] || []);
            const MessageMap = state.MessageMap;
            ChatMessageList.push(action.data.messageId);
            const { Result, Deduction } = GetHandledChatMessageList(ChatMessageList);
            Deduction.forEach((item) => {
                delete MessageMap[item];
            });
            return {
                ...state,
                MessageMap: MessageMap,
                ChatMessageList: {
                    ...state.ChatMessageList,
                    [action.data.chatId]: Result
                }
            }
        default:
            return { ...state };
    }
}

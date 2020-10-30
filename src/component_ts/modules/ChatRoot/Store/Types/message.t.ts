import {MessageItemInterface} from "../../Methods/IM/im.i";

export interface MessageStoreTypes {
    MessageMap: {
        [key: string]: MessageItemInterface
    },
    ChatMessageList: {
        [key: string]: string[]
    }
}

// Add message to MAP - types
export const ADD_MESSAGE_TO_MAP = 'ADD_MESSAGE_TO_MAP';

// change message state - types (result -1|0|1)
export const UPDATE_MESSAGE_STATE = 'UPDATE_MESSAGE_STATE';

// Add message to session message list
export const ADD_MESSAGE_TO_CHAT = 'ADD_MESSAGE_TO_CHAT';

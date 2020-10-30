import {StoreDispatchHandle} from "../store.i";
import {IM_SendMessage} from "../../Methods/IM/im.f";
import {MessageTypeEnum} from "../../Methods/IM/im.i";
import {ADD_MESSAGE_TO_CHAT, ADD_MESSAGE_TO_MAP, UPDATE_MESSAGE_STATE} from "../Types/message.t";
import {SendMsgDataJoinToRealData, SendMsgMetaDataJoinToRealData} from "../../Methods/IM/im.u";

export interface SendMsgMetaType {
    type: MessageTypeEnum,
    content: string,
    receiver: string,
    chatType: 0|1,
    sender: string,
}
export const SendMessage = (dispatch: StoreDispatchHandle, params: SendMsgMetaType): void => {
    const data = SendMsgMetaDataJoinToRealData(params);
    const MetaData = SendMsgDataJoinToRealData(data, params, params.sender, 0);
    dispatch({ type: ADD_MESSAGE_TO_MAP, data: MetaData });
    dispatch({
        type: ADD_MESSAGE_TO_CHAT,
        data: {
            chatId: MetaData.chatId,
            messageId: MetaData.id
        }
    });
    IM_SendMessage(data).then(() => {
        dispatch({type: UPDATE_MESSAGE_STATE, data: { id: MetaData.id, state: 1 }});
    }).catch(() => {
        dispatch({type: UPDATE_MESSAGE_STATE, data: { id: MetaData.id, state: 0 }});
    });
}

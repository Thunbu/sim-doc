import {ChatItemInterface} from "../../Store/Types/chatList.t";
import {MessageTypeEnum} from "../../Methods/IM/im.i";

export interface MessageEditorContainerPropsInterface {
    chat: ChatItemInterface,
    onSubmit(val: string, type: MessageTypeEnum): void
}
export interface MessageEditorContainerStateInterface {

}


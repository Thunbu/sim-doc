import * as React from "react";
import MessageAll from "../MessageAll";
import {connect} from "react-redux";
import {
    MessageListContainerPropsInterface, MessageListContainerStateInterface,
    MessageListContainerUseStoreActions,
    MessageListContainerUseStoreStates
} from "./index.s";
import {MessageItemInterface} from "../../Methods/IM/im.i";


class MessageListContainer extends React.Component<MessageListContainerPropsInterface, MessageListContainerStateInterface>{
    protected getMessageList = (): MessageItemInterface[] => {
        const ChatId = this.props.chat.id;
        const messageIds = this.props.GetChatMessagesByChatId(ChatId) || [];
        return messageIds.map((messageId) => this.props.GetMessageById(messageId));
    };
    render() {
        return (
            <div id={'message_list_container'}>
                <MessageAll list={this.getMessageList()} />
            </div>
        )
    }
}
export default connect(MessageListContainerUseStoreStates, MessageListContainerUseStoreActions)(MessageListContainer);

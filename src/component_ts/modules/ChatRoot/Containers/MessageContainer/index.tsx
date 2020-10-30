import * as React from "react";
import ChatHeader from "../../../../components/ChatHeader";
import {
    MessageContainerPropsInterface,
    MessageContainerUseStoreActions,
    MessageContainerUseStoreStates
} from "./index.s";
import MessageEditorContainer from "../MessageEditorContainer";
import MessageListContainer from "../MessageListContainer";
import {connect} from "react-redux";
import {MessageTypeEnum} from "../../Methods/IM/im.i";

class MessageContainer extends React.Component<MessageContainerPropsInterface, any>{
    protected onSubmit = (val: string, type: MessageTypeEnum) => {
        const { ChatItem, CurrentUser } = this.props;
        this.props.SendMessage({
            type,
            content: val,
            chatType: 0,
            receiver: ChatItem.id,
            sender: CurrentUser.IMID,
        });
    };
    render() {
        const { ChatItem } = this.props;
        return (
            <div id={'message_container'}>
                <ChatHeader class={'chat_header'} title={ChatItem.name} />
                <MessageListContainer chat={ChatItem} />
                <MessageEditorContainer chat={ChatItem} onSubmit={this.onSubmit} />
            </div>
        )
    }
}

export default connect(MessageContainerUseStoreStates, MessageContainerUseStoreActions)(MessageContainer);

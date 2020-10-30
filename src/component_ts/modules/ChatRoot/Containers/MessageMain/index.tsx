import * as React from "react";
import {connect} from "react-redux";
import EmptySpace from "../../../../components/EmptySpace";
import {
    MessageMainPropsInterface,
    MessageMainStateInterface,
    MessageMainUseStoreActions,
    MessageMainUseStoreStates
} from "./index.s";
import MessageContainer from "../MessageContainer";

class MessageMain extends React.Component<MessageMainPropsInterface, MessageMainStateInterface>{
    render() {
        const { GetChatItemByKey, ActiveChat } = this.props;
        const ChatItem = GetChatItemByKey(ActiveChat);
        return (
            <div id={'message_main'}>
                {
                    ChatItem && ChatItem.id
                        ? <MessageContainer ChatItem={ChatItem} />
                        : <EmptySpace text={'请选择左侧会话'} class={'empty_page'} />
                }
            </div>
        );
    }
}

export default connect(MessageMainUseStoreStates, MessageMainUseStoreActions)(MessageMain);

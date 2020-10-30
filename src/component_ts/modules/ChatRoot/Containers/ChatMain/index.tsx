import * as React from "react";
import {connect} from "react-redux";
import {ChatMainPropsTypes, ChatMainStateTypes, ChatMainUseStoreAction, ChatMainUseStoreState} from "./index.s";
import ChatList from "../ChatList";
import MessageMain from "../MessageMain";

class ChatMain extends React.Component<ChatMainPropsTypes, ChatMainStateTypes> {
    render() {
        return (
            <div id={'chat_main'}
                 className={
                     `${
                         this.props.ActiveContainer === this.props.containerName ? 'active' : ''
                     }`
                 }>
                <div id={'chat_main_container'}>
                    <ChatList />
                    <MessageMain />
                </div>
            </div>
        );
    }
}
export default connect(ChatMainUseStoreState, ChatMainUseStoreAction)(ChatMain);

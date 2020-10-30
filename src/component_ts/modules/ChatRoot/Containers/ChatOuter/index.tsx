import * as React from "react";
import {connect} from "react-redux";
import {
    ChatOuterPropsTypes,
    ChatOuterStateTypes,
    ChatOuterUseStoreActionsMap,
    ChatOuterUseStoreStateMap
} from "./index.store";
import {RenderChatContainerComponent} from "../../Methods";

class ChatOuter extends React.Component<ChatOuterPropsTypes, ChatOuterStateTypes> {
    render() {
        return (
            <div id={'chat_outer'}>
                {RenderChatContainerComponent()}
            </div>
        );
    }
}
export default connect(ChatOuterUseStoreStateMap, ChatOuterUseStoreActionsMap)(ChatOuter);

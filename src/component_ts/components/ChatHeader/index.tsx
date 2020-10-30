import * as React from "react";
import './index.less'

export interface ChatHeaderPropsInterface {
    title: string,
    class?: string
}

export default class ChatHeader extends React.Component<ChatHeaderPropsInterface, any> {
    render() {
        const { title } = this.props;
        return (
            <div className={'__chat_header'}>
                <h2 className={'__chat_name'}>{title}</h2>
            </div>
        )
    }
}

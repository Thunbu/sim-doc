import * as React from "react";
import Image from "../Image";
import './index.less';
import {ChatItemInterface} from "../../modules/ChatRoot/Store/Types/chatList.t";
import {MessageItemInterface} from "../../modules/ChatRoot/Methods/IM/im.i";

export interface ChatListItemPropsType {
    onClick: (event: React.MouseEvent, activeChat: ChatItemInterface) => void;
    activeId: string,
    chat: ChatItemInterface,
    lastMsg: MessageItemInterface|undefined
}

export default class ChatListItem extends React.Component<ChatListItemPropsType, any>{
    render() {
        const { activeId, chat, onClick, lastMsg } = this.props;
        const { id, name, time, avatar } = chat;
        return (
            <div className={`__chat_list_item ${activeId === id ? 'active' : ''}`}
                 onClick={(event: React.MouseEvent) => onClick(event, chat)} title={name}>
                <div className={'__avatar_container'}>
                    <Image width={42} height={42} round={true} src={avatar} />
                </div>
                <div className={'__chat_message'}>
                    <div className={'__chat_name'}>
                        <p className={'__name'}>{name}</p>
                        <span className={'__time'}>{time}</span>
                    </div>
                    <p className={'__chat_news'}>{lastMsg ? lastMsg.message.text : ''}</p>
                </div>
            </div>
        )
    }
}

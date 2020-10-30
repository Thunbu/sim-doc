import * as React from "react";
import {ListRowProps} from "react-virtualized";
import TextItem from "./TextItem";
import ImageItem from "./ImageItem";
import AudioItem from "./AudioItem";
import VideoItem from "./VideoItem";
import FileItem from "./FileItem";
import UnKnownItem from "./UnKnownItem";
import Image from "../Image";
import {UserInterface} from "../../modules/ChatRoot/Store/Types/users.t";
import './PubItem.less';
import {CurrentUserInterface} from "../../modules/ChatRoot/Store/Types/system.t";
import {MessageItemInterface, MessageTypeEnum} from "../../modules/ChatRoot/Methods/IM/im.i";

export interface MessageItemProps {
    key: string,
    style: React.CSSProperties
}

export const GetMsgItemComponentByMsgType = (msgType: MessageTypeEnum) => {
    switch (msgType) {
        case 0:
            return TextItem;
        case 1:
            return ImageItem;
        case 2:
            return AudioItem;
        case 3:
            return VideoItem;
        case 4:
            return FileItem;
        default:
            return UnKnownItem;
    }
}

export const RenderMsgItemComponent = (MessageItem: MessageItemInterface, props: MessageItemProps): React.ReactNode => {
    return React.createElement(GetMsgItemComponentByMsgType(MessageItem.type), {
        Message: MessageItem,
        style: props.style,
        itemKey: props.key
    });
}

/**
 * @author PengPeng
 * @date 10/27/20
 * @function
 * @name RenderMsgItemRows
 * @description 渲染 PUBITEM - 消息容器
 * @param {MessageItemInterface} MessageItem - 消息项
 * @param {ListRowProps} props - 虚拟滚动的props
 * @param {UserInterface} CurrentUser - 当前用户信息
 * @param {UserInterface} SenderUser - 发送者信息
 * @return {React.ReactNode}
 */

export const RenderMsgItemRows = (
    MessageItem: MessageItemInterface,
    props: ListRowProps,
    CurrentUser: CurrentUserInterface,
    SenderUser: UserInterface
): React.ReactNode => {
    const isMeFlag: boolean = CurrentUser.IMID === MessageItem.sender;
    return (
        <div className={`__pub_item ${isMeFlag ? '__isMe' : ''}`} style={props.style}>
            <div className={'__user_avatar'}>
                <Image src={SenderUser.avatar} width={42} height={42} round={true} title={SenderUser.name} />
            </div>
            <div className={'__inner_message'}>
                {
                    RenderMsgItemComponent(MessageItem, {
                        style: {},
                        key: props.key
                    })
                }
            </div>
        </div>
    );
}

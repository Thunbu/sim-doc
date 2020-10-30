import * as React from "react";
import store from '../Store'
import {StoreStatesTypes} from "../Store/store.i";
import ChatMain from "../Containers/ChatMain";
import DiskCloud from "../Containers/DiskCloud";

/**
 * @author PengPeng
 * @date 10/23/20
 * @function
 * @name RenderChatContainerComponent
 * @description 渲染会话窗口 - 与左侧tab保持统一协调
 * @return {React.ReactNodeArray}
 */
export const RenderChatContainerComponent = (): React.ReactNodeArray => {
    const storeState: StoreStatesTypes = <StoreStatesTypes>store.getState();
    return storeState.System.Containers.map((item) => {
        let container: React.ClassType<any, any, any> = ChatMain;
        switch (item.container) {
            case "chat_main":
                container = ChatMain;
                break;
            case "disk_cloud":
                container = DiskCloud;
                break;
        }
        return React.createElement(container, {
            key: item.container,
            containerName: item.container,
        });
    })
}


export const formatChatViewTime = (time: string|number) => {
    const date = new Date();
    const today = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
    const resultDate = new Date(time);
    const dayTime = 1000 * 60 * 60 * 24;
    const yesterday = new Date(today - dayTime).getTime();
    const hours = resultDate.getHours();
    const minutes = resultDate.getMinutes();
    const timeString = `${hours >= 10 ? hours : '0' + hours}:${minutes >= 10 ? minutes : '0' + minutes}`;
    if (resultDate.getTime() >= today) {
        // 今天的消息
        return timeString;
    } else if (resultDate.getTime() >= yesterday && resultDate.getTime() < today) {
        // 昨天
        return `昨天 ${timeString}`
    } else if (resultDate.getTime() >= new Date(today - dayTime * 6).getTime() && resultDate.getTime() < yesterday) {
        // 昨天至上周的今天
        const weekday = new Array(7);
        weekday[0] = '星期日';
        weekday[1] = '星期一';
        weekday[2] = '星期二';
        weekday[3] = '星期三';
        weekday[4] = '星期四';
        weekday[5] = '星期五';
        weekday[6] = '星期六';
        return `${weekday[resultDate.getDay()]} ${timeString}`
    } else {
        // 以前的
        return `${resultDate.getFullYear()}/${resultDate.getMonth() + 1}/${resultDate.getDate()} ${timeString}`
    }
}

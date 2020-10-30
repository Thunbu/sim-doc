export type TabContainers = 'chat_main'|'disk_cloud';
export interface CurrentUserInterface {
    avatar: string,
    name: string,
    IMID: string,
    sig: string,
    userId: string,
}
export interface MenuDataItem {
    icon: string,
    activeIcon: string,
    label: string,
    container: TabContainers,
}
export interface SystemStoreTypes {
    active: TabContainers,
    Containers: MenuDataItem[],
    CurrentUser: CurrentUserInterface
}
export interface UpdateActiveContainerParams {
    containerId: TabContainers
}
export interface UpdateCurrentUserParams {
    avatar: string,
    userNickName: string,
    userId: string,
}

// 更新选中容器
export const UPDATE_ACTIVE_CONTAINER = 'UPDATE_ACTIVE_CONTAINER';
export const UPDATE_CURRENT_USER = 'UPDATE_CURRENT_USER';


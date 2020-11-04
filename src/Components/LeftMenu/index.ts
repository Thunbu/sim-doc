import {LeftMenuJSON, LeftMenuProps, MenuProps} from "./index.interface";
import DefaultMenuData from './developerLeftMenu.json';
import { ajax } from "../../utils";
import './index.less';
import {GetLocationSearchMap} from "../../utils/util";

export default class LeftMenu {
    constructor(props: LeftMenuProps) {
        const Element = document.getElementById(props.el);
        if (!Element) {
            this.throwError('未找到对应的DOM元素')
        }
        this.props = {
            el: Element
        }
    }
    readonly props: MenuProps;
    protected menuJSON: LeftMenuJSON = DefaultMenuData;
    /**
     * @author PengPeng
     * @date 10/13/20
     * @function
     * @name init
     * @description 初始化，开始获取左侧数据，然后开始渲染
     * @return {void}
     */
    public init = () => {
        this.getMenuConfigJson().then((res) => {
            this.menuJSON = res;
            this.renderDom();
            this.renderPage();
            this.bindEvent();
        });
    };
    /**
     * @author PengPeng
     * @date 10/13/20
     * @function
     * @name getMenuConfigJson
     * @description 获取配置JSON，用来渲染左侧Menu
     * @return {Promise<LeftMenuJSON>}
     */
    protected getMenuConfigJson = (): Promise<LeftMenuJSON> => {
        return ajax<LeftMenuJSON>({
            url: 'https://bossfs.sammbo.com/sammbo-web/developer/developerLeftMenu.json',
            type: 'GET',
            dataType: 'json',
        }).catch(() => {
            return DefaultMenuData;
        });
    };
    /**
     * @author PengPeng
     * @date 10/13/20
     * @function
     * @name bindEvent
     * @description 绑定DOM事件
     * @return {void}
     */
    protected bindEvent = (): void => {
        this.props.el?.addEventListener('click', (e) => {
            if (!!e.composedPath) {
                const eventTargetList = e.composedPath();
                for (let i = 0; i < eventTargetList.length; i++) {
                    const firstLevelChildren = <HTMLElement>eventTargetList[i];
                    if (firstLevelChildren.className.indexOf('__item') > -1) {
                        this.onMenuItemClick(firstLevelChildren);
                        break;
                    } else if (firstLevelChildren.className.indexOf('__menu') > -1) {
                        this.expandMenu(firstLevelChildren);
                        break;
                    }
                }
            }
        });
        window.addEventListener("popstate", (e) => {
            this.renderPage();
        });
    };
    /**
     * @author PengPeng
     * @date 10/21/20
     * @function
     * @name onMenuItemClick
     * @description 左侧菜单栏点击事件
     * @param {HTMLElement} element - 点击的元素
     * @return {void}
     */
    protected onMenuItemClick = (element: HTMLElement) => {
        const pageId = element.getAttribute('d-id');
        const activeItem = this.props.el?.querySelector('.__item_active');
        if (pageId) {
            this.changePageTo(pageId);
            if (activeItem) {
                activeItem.className = activeItem.className.replace(/\s*__item_active/g, '');
            }
            element.className += ' __item_active';
        }
    };
    /**
     * @author PengPeng
     * @date 10/21/20
     * @function
     * @name changePageTo
     * @description 改变page至
     * @param {number} pageId - 页面ID
     * @return {void}
     */
    protected changePageTo = (pageId: string) => {
        const url = `${window.location.pathname}?page=${pageId}`;
        window.history.pushState({ page: pageId }, '', url);
        this.renderPage();
    }
    /**
     * @author PengPeng
     * @date 10/21/20
     * @function
     * @name expandMenu
     * @description 展开列表
     * @param {HTMLElement} element - 元素
     * @return {void}
     */
    protected expandMenu = (element: HTMLElement) => {
        try {
            const nowActive = this.props.el?.querySelector('.active');
            if (nowActive) {
                nowActive!.className = nowActive!.className.replace(/\s*active/g, '');
                if (nowActive !== element) {
                    element.className += ' active';
                }
            } else {
                element.className += ' active';
            }
        } catch (e) {
            console.log('未找到-', e);
            element.className += ' active';
        }
    }
    /**
     * @author PengPeng
     * @date 10/13/20
     * @function
     * @name renderDom
     * @description 渲染DOM元素
     * @return {void}
     */
    protected renderDom = (): void => {
        const searchMap = GetLocationSearchMap();
        try {
            this.props.el!.innerHTML = this.getDomStringByMenuJSONArray(this.menuJSON.children || [], searchMap.page);
        } catch (e) {
            this.throwError('未获取到渲染内容');
        }
    };
    /**
     * @author PengPeng
     * @date 10/13/20
     * @function
     * @name getDomStringByMenuJSONArray
     * @description 通过数组获取dom字符串
     * @param {LeftMenuJSON[]} JSONList - 菜单数组
     * @param {string} pageId - 当前所在页面
     * @return {string}
     */
    protected getDomStringByMenuJSONArray = (JSONList: LeftMenuJSON[], pageId: string): string => {
        return JSONList.map((item: LeftMenuJSON): string => {
            if (item.children && item.children.length) {
                return `
                    <div class="menuItem__parent __menu ${pageId.split('-')[0] === item.id ? 'active' : ''}">
                        <div class="menuTitle __title">
                            <span>${item.name}</span>
                            <span class="expand__icon">
                                <svg fill="none" viewBox="0 0 9 14" width="9" height="14">
                                    <path d="m1 13 6-6-6-6" stroke="#000" stroke-width="2"></path>
                                </svg>
                            </span>
                        </div>
                        <div class="menu__childrenList __deep">
                            ${this.getDomStringByMenuJSONArray(item.children, pageId)}
                        </div>
                    </div>
                `;
            } else {
                return `
                    <div class="menuItem__child __item ${pageId + '' === item.id + '' ? '__item_active' : ''}" d-id="${item.id}">
                        <p class="menuTitle">${item.name}</p>
                    </div>
                `
            }
        }).join('');
    };
    /**
     * @author PengPeng
     * @date 10/21/20
     * @function
     * @name throwError
     * @description 抛出错误，阻断代码执行
     * @param {string} msg - 错误信息
     * @param {?number} code - 错误代码
     * @param {?any} data - 错误体
     * @return {Error}
     */
    protected throwError = (msg: string = '', code?: number, data?: any) => {
        throw {
            code: code, msg, data
        }
    };
    /**
     * @author PengPeng
     * @date 10/21/20
     * @function
     * @name renderPage
     * @description 渲染页面
     * @return {void}
     */
    protected renderPage = () => {
        const searchMap = GetLocationSearchMap();
        const PageMDHref = this.getMDFilePathByMenuData(searchMap.page || '0');
        // load MD File
        this.onRenderPage(PageMDHref);
    };
    /**
     * @author PengPeng
     * @date 10/22/20
     * @function
     * @name getMDFilePathByMenuData
     * @description 获取 MDFile 路径 通过菜单数据
     * @param {string} pageId - 页面ID
     * @return {string}
     */
    protected getMDFilePathByMenuData = (pageId: string = '0'): string => {
        const menuData = this.menuJSON;
        if (pageId === '0' || !pageId) {
            return menuData.MDFile;
        } else {
            // console.log(this.mapDataGetMDFilePath(menuData.children!, pageId));
            return this.mapDataGetMDFilePath(menuData.children!, pageId) || menuData.MDFile;
        }
    };
    /**
     * @author PengPeng
     * @date 10/22/20
     * @function
     * @name mapDataGetMDFilePath
     * @description 遍历数据，通过PageId获取MDFile
     * @param {LeftMenuJSON[]} dataList - 数据
     * @param {string} pageId - 页面ID
     * @return {string}
     */
    protected mapDataGetMDFilePath = (dataList: LeftMenuJSON[], pageId: string): string | undefined => {
        for (let i = 0; i < dataList.length; i++) {
            if (dataList[i].id + '' === pageId) {
                return dataList[i].MDFile
            }
            if (dataList[i].children && dataList[i].children!.length) {
                const mdFile = this.mapDataGetMDFilePath(dataList[i].children!, pageId);
                if (mdFile) {
                    return mdFile;
                }
            }
        }
    };
    public onRenderPage = (MDFile: string) => {

    }
}

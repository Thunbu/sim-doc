/**
 * @author PengPeng
 * @date 10/21/20
 * @function
 * @name GetLocationSearchMap
 * @description 获取浏览器地址的search部分
 * @param {}
 * @return {LocationSearchMapTypes}
 */
import {LocationSearchMapTypes} from "./util.i";

export const GetLocationSearchMap = (): LocationSearchMapTypes => {
    const search = window.location.search;
    if (search) {
        const searchMap: LocationSearchMapTypes = {};
        search.substring(1).split('&').forEach((item) => {
            searchMap[item.split('=')[0]] = item.split('=')[1];
        });
        return searchMap;
    } else {
        return {};
    }
}

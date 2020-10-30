
declare interface AjaxParams {
    type: 'GET'|'POST',
    dataType: 'json'|'xml',
    header?: {
        [key: string]: string|number|boolean
    },
    url: string,
    data: any
}

declare namespace Utils {
    export function ajax<T>(params: AjaxParams): Promise<T>;
}

export = Utils;

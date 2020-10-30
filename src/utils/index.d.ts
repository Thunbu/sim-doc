
declare interface AjaxParams {
    type: 'GET'|'POST',
    dataType: 'json'|'xml'|'text',
    header?: {
        [string]: string|number|boolean
    },
    url: string,
}

declare namespace Utils {
    export declare function ajax<T>(params: AjaxParams): Promise<T>;
}

export = Utils;

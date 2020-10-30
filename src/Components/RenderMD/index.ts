import {ajax} from "../../utils";
// import showdown from 'showdown';
import marked from 'marked';

export default class RightContent {
    constructor(props: { el: string }) {
        const element = <HTMLDivElement>document.getElementById(props.el);
        if (!element) {
            throw '找不到元素'
        }
        this.renderElement = element;
    }
    readonly renderElement: HTMLDivElement;
    public renderContent = (MDFile: string) => {
        ajax({
            url: MDFile,
            type: 'GET',
            dataType: 'text',
        }).then((res: any) => {
            // console.log(res.response);
            this.renderElement.innerHTML = marked(
                res.response
            )
        }).catch((res) => {
            console.log(res);
        });
    }
}

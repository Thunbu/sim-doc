import * as React from "react";
import './index.less';
import FileImage from '../../../assets/images/index/file.png';
import ImageIcon from '../../../assets/images/index/pic.png';

export default class EditorToolBar extends React.Component<any, any>{
    render() {
        return (
            <div className={`__editor_tool_bar ${this.props.className}`}>
                <div className={'__handle_item'}>
                    <img src={FileImage} alt=""/>
                </div>
                <div className={'__handle_item'}>
                    <img src={ImageIcon} alt=""/>
                </div>
            </div>
        )
    }
}


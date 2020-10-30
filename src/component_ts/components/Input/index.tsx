import * as React from "react";
import './index.less';

export interface InputControlProps {
    placeholder: string,
}
export interface InputControlState {

}

export default class Input extends React.Component<InputControlProps, InputControlState> {
    static defaultProps = {
        placeholder: '点击输入'
    }
    render() {
        const { placeholder } = this.props;
        return (
            <input className={`__input`} placeholder={placeholder} />
        );
    }
}


import * as React from "react";
import './index.less';

export interface EditorComponentPropsInterface {
    className: string,
    onSubmit(val: string): void
}
export interface EditorComponentStateInterface {
    textVal: string
}

export default class EditorComponent extends React.Component<EditorComponentPropsInterface, EditorComponentStateInterface>{
    readonly state = {
        textVal: ''
    };
    protected onKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter' && !event.metaKey && !event.ctrlKey && !event.shiftKey) {
            // sendMsg
            this.props.onSubmit(this.state.textVal);
            this.setState({
                textVal: ''
            });
            event.preventDefault();
        } else if (event.key === 'Enter' && (event.metaKey || event.ctrlKey)) {
            this.setState({
                textVal: this.state.textVal += '\n'
            });
        }
    };
    protected onTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({
            textVal: event.target.value
        });
    }
    render() {
        const { textVal } = this.state;
        return (
            // <div className={`__editor_component ${this.props.className}`}
            //      contentEditable >
            //
            // </div>
            <textarea className={`__editor_textarea ${this.props.className}`}
                      onKeyDown={this.onKeyDown} value={textVal} onChange={this.onTextChange} />
        )
    }
}

import * as React from "react";
import {MessageEditorContainerPropsInterface, MessageEditorContainerStateInterface} from "./index.s";
import EditorToolBar from "../../../../components/EditorToolBar";
import EditorComponent from "../../../../components/EditorComponent";
import {MessageTypeEnum} from "../../Methods/IM/im.i";

export default class MessageEditorContainer extends
    React.Component<
        MessageEditorContainerPropsInterface,
        MessageEditorContainerStateInterface
    >{
    constructor(props: MessageEditorContainerPropsInterface) {
        super(props);
    }
    protected onSubmit = (val: string, type: MessageTypeEnum) => {
        if (val) {
            this.props.onSubmit(val, type);
        }
    }
    render() {
        return (
            <div id={'message_editor_container'}>
                <EditorToolBar className={'tool_bar'} />
                <EditorComponent className={'editor_component'}
                                 onSubmit={(val) => this.onSubmit(val, 0)} />
            </div>
        );
    }
}


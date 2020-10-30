import * as React from "react";
import {MessageItemInterface} from "../../modules/ChatRoot/Methods/IM/im.i";

export interface TextItemPropsInterface {
    itemKey: string,
    Message: MessageItemInterface
}

export default class TextItem extends React.Component<TextItemPropsInterface, any>{
    render() {
        return (
            <div key={this.props.itemKey} className={'__text_item'}>
                <p>{this.props.Message.message.text}</p>
            </div>
        )
    }
}



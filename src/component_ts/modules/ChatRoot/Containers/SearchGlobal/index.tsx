import * as React from "react";
import Input from "../../../../components/Input";

export default class SearchGlobal extends React.Component<any, any> {
    render() {
        return (
            <div className={`search_global ${this.props.class}`}>
                <Input />
            </div>
        )
    }
}


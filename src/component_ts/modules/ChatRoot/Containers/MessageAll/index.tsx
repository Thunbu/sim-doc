import * as React from "react";
import { RenderMsgItemRows } from '../../../../components/MessageItems/PubItem';
import {AutoSizer, CellMeasurer, CellMeasurerCache, List, ListRowProps} from "react-virtualized";
import {connect} from "react-redux";
import {
    MessageAllPropsInterface,
    MessageAllStateInterface,
    MessageAllUseStoreAction,
    MessageAllUseStoreState
} from "./index.i";

class MessageAll extends React.Component<MessageAllPropsInterface, MessageAllStateInterface>{
    VirtualScroller: List|null = null;
    readonly DefaultCellMeasurerCache = new CellMeasurerCache({
        defaultHeight: 30,
        fixedWidth: true,
    });
    readonly state = {};

    componentDidUpdate(prevProps: Readonly<MessageAllPropsInterface>, prevState: Readonly<MessageAllStateInterface>, snapshot?: any) {
        if (prevProps.list !== this.props.list) {
            this.ScrollToLastMessage();
        } else {
            return false;
        }
    }

    protected RenderMsgItemRows = (props: ListRowProps): React.ReactNode => {
        const Message = this.props.list[props.index];
        const { CurrentUser, GetUserInfo } = this.props;
        const SenderMsg = GetUserInfo(Message.sender);
        return (
            <CellMeasurer cache={this.DefaultCellMeasurerCache} columnIndex={0}
                          parent={props.parent} key={props.key} rowIndex={props.index}>
                {
                    RenderMsgItemRows(
                        Message,
                        props,
                        CurrentUser,
                        SenderMsg
                    )
                }
            </CellMeasurer>
        );
    }
    protected ScrollToLastMessage = () => {
        if (this.props.list.length) {
            this.VirtualScroller!.scrollToRow(this.props.list.length - 1);
            this.VirtualScroller!.recomputeRowHeights(this.props.list.length - 1);
        }
    };
    render() {
        const { list } = this.props;
        return (
            <div id={'message_outer_container'}>
                <AutoSizer>
                    {({width, height}) => (
                        <List
                            ref={(ref) => this.VirtualScroller = ref}
                            width={width}
                            height={height}
                            rowCount={list.length}
                            rowHeight={this.DefaultCellMeasurerCache.rowHeight}
                            deferredMeasurementCache={this.DefaultCellMeasurerCache}
                            style={{ outline: 'none' }}
                            rowRenderer={this.RenderMsgItemRows} />
                    )}
                </AutoSizer>
            </div>
        )
    }
}

export default connect(MessageAllUseStoreState, MessageAllUseStoreAction)(MessageAll);

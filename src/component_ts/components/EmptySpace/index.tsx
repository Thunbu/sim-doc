import * as React from "react";
import NoDataImage from '../../../assets/images/no_data.png';
import './index.less'

export default class EmptySpace extends React.Component<any, any> {
    static defaultProps = {
        showImage: NoDataImage,
        text: '无内容',
    }
    render() {
        const { showImage, text } = this.props;
        return (
            <div className={`__empty_space`}>
                <img src={showImage} alt="无数据" />
                <p>{text}</p>
            </div>
        )
    }
}

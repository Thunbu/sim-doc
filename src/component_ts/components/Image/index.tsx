import * as React from "react";
import DefaultAvatar from '../../../assets/images/defaultAvatar.png';

export interface ImageProps {
    src: string,
    width?: number,
    height?: number,
    radius?: number,
    round?: boolean,
    alt?: string,
    title?: string,
    customizeStyle?: {
        [key: string]: string,
    }
}
export interface ImageState {
    errorFlag: boolean
}

export default class Image extends React.Component<ImageProps, ImageState> {
    static defaultProps = {
        src: '',
        width: 32,
        height: 32,
        round: false,
        radius: 16,
        alt: '',
        title: '',
        customizeStyle: {}
    };
    readonly state: ImageState = {
        errorFlag: false
    }
    protected onError = () => {
        console.log('图片加载失败：', this.props.src);
        if (!this.state.errorFlag) {
            this.setState({
                errorFlag: true
            });
        }
    }

    render() {
        const { src, alt, title, round, radius, width = 32, height = 32, customizeStyle } = this.props;
        const { errorFlag } = this.state;
        return (
            <img src={(errorFlag || !src) ? DefaultAvatar : src} alt={alt}
                 title={title} onError={this.onError}
                 style={{
                     borderRadius: round ? width! / 2 : (radius || 0),
                     width: width,
                     height: height,
                     ...customizeStyle
                 }} />
        )
    }
}

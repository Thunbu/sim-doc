import * as React from "react";
import Image from '../../../../components/Image';
import LeftMenuTabItem from "../../../../components/LeftMenuTabItem";
import {connect} from "react-redux";
import {LeftMenuProps, LeftMenuStoreAction, LeftMenuStoreState} from "./index.s";
import {TabContainers} from "../../Store/Types/system.t";

class LeftMenu extends React.Component<LeftMenuProps, any> {
    protected onLeftMenuClick = (menuId: TabContainers) => {
        this.props.UpdateActiveContainer(menuId);
    };
    render() {
        const { Containers, ActiveContainer, CurrentUserAvatar } = this.props;
        return (
            <div id={'left_menu'}>
                <div className={'user_avatar'}>
                    <Image src={CurrentUserAvatar}
                           width={32} height={32} round={true} />
                </div>
                <div className={'tab_switch'}>
                    {
                        Containers.map((item) => (
                            <LeftMenuTabItem icon={item.icon} active={item.container === ActiveContainer}
                                             onMenuItemClick={() => this.onLeftMenuClick(item.container)}
                                             activeIcon={item.activeIcon} label={item.label} key={item.container} />
                        ))
                    }
                </div>
            </div>
        );
    }
}
export default connect(LeftMenuStoreState, LeftMenuStoreAction)(LeftMenu);

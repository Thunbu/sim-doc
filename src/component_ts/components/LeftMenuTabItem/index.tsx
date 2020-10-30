import * as React from "react";


export interface LeftMenuTabItemProps {
    icon: string,
    activeIcon: string,
    label: string,
    active?: boolean,
    onMenuItemClick: () => void
}

export default class LeftMenuTabItem extends React.Component<LeftMenuTabItemProps, any> {
    protected onMenuItemClick = () => {
        this.props.onMenuItemClick();
    };
    render() {
        const { active, icon, label, activeIcon } = this.props;
        return (
            <div className={`left_menu_tab_item ${active ? 'active' : ''}`}
                 onClick={this.onMenuItemClick}>
                <img src={active ? activeIcon : icon} />
                <span>{label}</span>
            </div>
        );
    }
}


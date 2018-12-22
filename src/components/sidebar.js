import React, { Component } from 'react';
import Icon from "./icon/icon";
import "../styles/sidebar.scss";
class SideBar extends Component {

    state = {
        activeItem: {
            id: ""
        }
    };

    constructor(props) {
        super(props);
        this.setItem = this.setItem.bind(this);
    }

    setItem(item) {
        if (item.callback) item.callback();
        this.setState({
            activeItem: item
        });
    }

    componentDidMount() {
        const { items } = this.props
        this.setState({
            activeItem: items[0]
        });
    }

    render() {
        const { items } = this.props;
        const { activeItem } = this.state;

        return items && items.length ? (
            <div className="sidebar">
                <div className="logo">
                    <i>D</i>
                </div>
                <div className="navigation">
                {items.map((item) => {
                    item.active = (activeItem.id === item.id) ? true : false;
                    if (item.active && item.walletOpen === false) item.active = false;
                    item.setItem = this.setItem;
                    return (
                        <Icon key={item.id} icon={item} />
                    );
                })}
                </div>
            </div>
        ) : null;
    }
}

export default SideBar;
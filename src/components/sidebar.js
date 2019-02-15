import React, { Component } from 'react';
import { withRouter, Link } from "react-router-dom";
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
        const { items, location } = this.props
        let activeItem;
        if (location.pathname === "/") {
            activeItem = items[0]; // return dashboard as default 
        } else {
            for (let i = 0; i < items.length; i++) {
                if (items[i].path && items[i].path === location.pathname) activeItem = items[i];
            }
        }
        
        this.setState({activeItem});
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
                    item.active = (activeItem && activeItem.id === item.id) ? true : false;
                    if (item.active && item.walletOpen === false) item.active = false;

                    if (item.path) {
                        return (
                            <Link key={item.id} to={item.path} onClick={this.setItem.bind(this, item)}>
                                <Icon key={item.id} icon={item} />
                            </Link>
                        );
                    } else {
                        return (
                            <button key={item.id} onClick={this.setItem.bind(this, item)}>
                                <Icon key={item.id} icon={item} />
                            </button>
                        );
                    }
                })}
                </div>
            </div>
        ) : null;
    }
}

const SideBarWithRouter = withRouter(SideBar);

export default SideBarWithRouter;
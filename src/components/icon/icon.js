import React, { Component } from "react";
import "../../styles/icon.scss";
class Icon extends Component {
    render() {
        const { icon } = this.props;
        const activeClass = icon.active ? " active" : "";
        return icon ? (
            <div className={`icon-${icon.size + activeClass}`} title={icon.name} onClick={icon.setItem.bind(this, icon)}>
                <i className={icon.class}></i>
            </div>
        ) : null;
    }
}

export default Icon;
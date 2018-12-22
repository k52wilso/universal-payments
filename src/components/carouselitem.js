import React, { Component } from "react";
class CarouselItem extends Component {
    render() {
        const { item } = this.props;
        const iconClass = () => {
            if (item.trend === "good" && item.topic === "Income") {
                return "fas fa-arrow-up";
            } else if (item.trend === "bad" && item.topic === "Income") {
                return "fas fa-arrow-down";
            } else if (item.trend === "good" && item.topic === "Spending") {
                return "fas fa-arrow-down";
            } else if (item.trend === "bad" && item.topic === "Spending") {
                return "fas fa-arrow-up";
            }
        };
        const iconWrapClass = () => {
            if (item.trend === "good" && item.topic === "Income") {
                return "icon-wrap good";
            } else if (item.trend === "bad" && item.topic === "Income") {
                return "icon-wrap bad";
            } else if (item.trend === "good" && item.topic === "Spending") {
                return "icon-wrap good";
            } else if (item.trend === "bad" && item.topic === "Spending") {
                return "icon-wrap bad";
            }
        };
        return (
            <div className="carousel-item" >
                <div className="icon-div">
                    <div className={iconWrapClass()}>
                        <i className={iconClass()}></i>
                    </div>
                </div>
                <div className="details">
                    <p className="topic">{item.topic}</p>
                    <p className="value">{item.value}</p>
                </div>
                {item.addDivider && <div className="carousel-divider"></div>}
            </div>
        );
    }
}

export default CarouselItem;
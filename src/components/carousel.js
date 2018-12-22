import React, { Component } from "react";
import CarouselItem from "./carouselitem";
const carouselItems = [{
    id: "010",
    topic: "Income", 
    value: "CAN 32,500.00",
    trend: "bad"
},{
    id: "011",
    topic: "Spending", 
    value: "CAN 10,120.00",
    trend: "bad"
}]

class Carousel extends Component {
    render() {
        return (
            <div className="carousel">
                { carouselItems.map( (item, index) => {
                    if (index < carouselItems.length - 1) item.addDivider = true;
                    return (
                        <CarouselItem key={item.id} item={item} />
                    );
                })}
            </div>
        );
    }
}

export default Carousel;
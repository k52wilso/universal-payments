import React, { Component } from "react";
import CarouselItem from "./carouselitem";


class Carousel extends Component {
    render() {
        const { items } = this.props;
        return (
            <div className="carousel">
                { items.map( (item, index) => {
                    if (index < items.length - 1) item.addDivider = true;
                    return (
                        <CarouselItem key={item.id} item={item} />
                    );
                })}
            </div>
        );
    }
}

export default Carousel;
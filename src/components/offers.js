import React, { Component } from "react";
import Offer from "./offer";


class Offers extends Component {
    render() {
        const { offers } = this.props;
        return (
            <div className="offers">
                {offers.map((offer,index) => <Offer key={index} offer={offer} />)}
            </div>
        );
    }
}

export default Offers;
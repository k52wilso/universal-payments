import React, { Component } from "react";
import Offer from "./offer";

const offers = [{
    header: "50%",
    title: "Savings from Costco",
    link: "Read More...",
    linkCallback: () => console.log("Clicking offer..."),
    imageURL: "/assets/images/costco.png",
    background: "#0984e3"
}, {
    header: "23%",
    title: "Savings from Walmart",
    link: "Read More...",
    linkCallback: () => console.log("Clicking offer..."),
    imageURL: "/assets/images/walmart.png",
    background: "#00b894"
}];
class Offers extends Component {
    render() {
        return (
            <div className="offers">
                {offers.map((offer,index) => <Offer key={index} offer={offer} />)}
            </div>
        );
    }
}

export default Offers;
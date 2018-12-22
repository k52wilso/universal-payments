import React, { Component } from "react";

class Offer extends Component {
    render() {
        const { offer } = this.props;
        return (
            <div className="offer" style={{background: offer ? offer.background : "#0984e3"}}>
                <div className="details flex-item">
                    <h2>{offer.header}</h2>
                    <h4>{offer.title}</h4>
                    <p onClick={offer.linkCallback} >{offer.link}</p>
                </div>
                <img className="flex-item" src={offer.imageURL} alt=""/>
            </div>
        );
    }
}

export default Offer;
import React, { Component } from "react";

class Offer extends Component {
    state = {
        offerIsOpen: true
    };

    constructor(props) {
        super(props);

        this.closeOffer = this.closeOffer.bind(this);
    }

    closeOffer(){
        // Some type of call 
        this.setState({
            offerIsOpen: false
        });
    }

    render() {
        const { offer } = this.props;
        const { offerIsOpen } = this.state;
        const offerClass = offerIsOpen ? "offer" : "offer closing";
        return (
            <div className={offerClass} style={{background: offer ? offer.background : "#0984e3"}}>
                <div className="details flex-item">
                    <h2>{offer.header}</h2>
                    <h4>{offer.title}</h4>
                    <p onClick={offer.linkCallback} >{offer.link}</p>
                </div>
                <img className="flex-item" src={offer.imageURL} alt=""/>
                <i className="fas fa-times close" onClick={this.closeOffer}></i>
            </div>
        );
    }
}

export default Offer;
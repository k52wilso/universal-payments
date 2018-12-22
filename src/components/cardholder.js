import React, { Component } from "react";
import Card from "./card";
class CardHolder extends Component {
    render() {
        const { cards } = this.props;
        return (
            <div className="card-holder">
                { cards.map( card => <Card key={card.id} card={card}/>) }
            </div>
        );  
    }
}

export default CardHolder;
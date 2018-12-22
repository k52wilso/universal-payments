import React, { Component } from "react";
import Editable from "./editable";
class Card extends Component {


    numberSpliter(number) {
        let newNumber = "";
        for (let i = 0; i <= 12; i = i + 4){
            const nextFour = number.substr(i, 4);
            newNumber += nextFour + "  ";
        }
        return newNumber;
    }

    buildEditableContent(toEdit) {
        const { card } = this.props;
        const content = {
            type: "text"
        };
        if (toEdit === card.number){ 
            content.text = card.number
            content.classes = "card-number";
        } else if (toEdit === card.cardOwner){ 
            content.text = card.cardOwner
            content.classes = "";
        } else if (toEdit === card.expiryDate){ 
            content.text = card.expiryDate
            content.classes = "";
        };
        return content;
    }

    render() {
        const { card } = this.props;
        const classes = card && card.type ? `card ${card.type.toLowerCase()}` : "card";
        const imageSrc = card.type === "VISA" ? "/assets/images/visa.png" : "/assets/images/mastercard.png";
        const imageClass = card && card.type ? `card-image ${card.type.toLowerCase()}` : "card-image";
        return (
            <div className={classes}>
                <img className="chip" src="/assets/images/chip.png" alt=""/>
                <Editable content={this.buildEditableContent(card.number)}/>
                <div className="card-footer">
                    <div className="card-details">
                        <Editable content={this.buildEditableContent(card.expiryDate)}/>
                        <Editable content={this.buildEditableContent(card.cardOwner)}/>
                    </div>
                    <img className={imageClass} src={imageSrc} alt=""/>
                </div>
            </div>
        );  
    }
}

export default Card;
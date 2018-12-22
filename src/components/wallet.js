import React, { Component } from "react";
import CardHolder from "./cardholder";
import Carousel from "./carousel";
class Wallet extends Component {
    render() {
        const { wallet } = this.props;
        const { user, cards } = wallet;
        return wallet && wallet.user ? (
            <div className="wallet">
                <div className="image-div">
                    <div className="image-wrap">
                        <img src={user.imageURL} alt=""/>
                    </div>
                </div>
                <div className="name">{user.name}</div>
                <div className="wallet-total">{new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAN' }).format(wallet.total)}</div>
                <Carousel />
                <CardHolder cards={cards} />
            </div>
        ) : null;
    }
}

export default Wallet;
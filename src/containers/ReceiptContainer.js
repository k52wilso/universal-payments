import React, { Component } from "react";
import { connect } from 'react-redux'
import "../styles/receipts.scss";
import NotificationContainer from "./NotificationContainer";
import { getReceipt } from "../actions/receiptActions";
import { getWallet } from "../actions/WalletActions";
import { ACTIONTYPES } from "../utils/actionTypes";
import { Link } from "react-router-dom";

const mapStateToProps = (state, props) => {
    return {
        wallet: state.wallet,
        receipt: state.receipt,
        notification: state.notification
    }
};

const mapDispatchToProps = dispatch => ({
    getReceipt: (id) => getReceipt(id)(dispatch),
    getWallet: (openWallet) => getWallet(openWallet)(dispatch)
});

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const buildDateTime = (date) => {
    const dateObj = new Date(date);
    const transcationDate = dateObj.getDate();
    const month = months[dateObj.getMonth()];
    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();
    const year = dateObj.getFullYear();

    return {
        date: `${transcationDate} ${month}, ${year}`,
        time: `${hours}:${minutes}`
    };
}

const getCardUsedForTranscation = (wallet, cardID) => {
    if (!wallet) return { error: "Wallet is not loading"};
    const cards = wallet.cards;
    if (!cards) return { error: "Could not load cards for wallet"}

    for (let i = 0; i < cards.length; i++) {
        if (cards[i].id === cardID) return cards[i];
    }

    return {
        error: "Card used in transcation is not linked to this account"
    };
}

const getEndingOfCardNumber = (number) => {
    return `**${number.charAt(number.length - 1)}${number.charAt(number.length - 2)}`
}

class ReceiptConnect extends Component {

    componentWillMount() {
        const {getReceipt, getWallet, location} = this.props;
        const searchParams = new URLSearchParams(location.search);
        const id = Number(searchParams.get("id"));
        getWallet(false);
        getReceipt(id);
    }

    render() {
        const {receipt, notification, wallet } = this.props;
        const { receiptDetails } = receipt;
        const receiptClass = "receipt-container";
        const getCardUsed = getCardUsedForTranscation(wallet, receiptDetails.cardID);
        const displayCardUsed =  getCardUsed.error ? getCardUsed.error : getCardUsed;
        return (notification.isWaiting && notification.waitingActionTypes.includes(ACTIONTYPES.GET_RECEIPT) ? (<NotificationContainer />) : 
        ( receiptDetails && receiptDetails.name ?
            (<div className={receiptClass} >
                <div className="receipt">
                    <div className="thank-you-area">
                        <span className="green-check-span">
                            <i className="fas fa-check"></i>
                        </span>
                        <h4>Thank you!</h4>
                        <p>Your Transcation was successful</p>
                        <div className="edge"></div>
                        <div className="edge"></div>
                    </div>
                    <div className="store">
                        <div className="date">
                            <h2>STORE/RETAILER</h2>
                            <p>{receiptDetails.name}</p>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className="date-time">
                        <div className="date">
                            <h2>Date</h2>
                            <p>{buildDateTime(receiptDetails.date).date}</p>
                        </div>
                        <div className="time">
                            <h2>Time</h2>
                            <p>{buildDateTime(receiptDetails.date).time}</p>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className="sent-to">
                        <div className="date">
                            <h2>Sent To</h2>
                            <p>kyle.wilsonmccormack@gmail.com</p>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className="amount">
                        <div className="date">
                            <h2>Amount</h2>
                            <p className="total">{receiptDetails.amount}</p>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className="card-area">
                        <img className="card-image" src={`/assets/images/${displayCardUsed.type}.png`}alt=""/>
                        <div className="details">
                            <p>Credit/Debit Card</p>
                            <h2>{`${displayCardUsed.type} Card ending in ${getEndingOfCardNumber(displayCardUsed.number)}`}</h2>
                        </div>
                    </div>
                    <Link to="/transcations">
                        <p>View all Transcations</p>
                    </Link>
                </div>
            </div>
            ) : (
            <div>
                <Link to="/transcations">
                        <p>View all Transcations</p>
                </Link>
                <h1>There is no receipt data available at this time</h1>
            </div>)
        ))
    }
}

const ReceiptContainer = connect(
    mapStateToProps, mapDispatchToProps
)(ReceiptConnect);

export default ReceiptContainer;
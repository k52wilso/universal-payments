import React, { Component } from "react";
import NotificationContainer from "./NotificationContainer";
import { getWallet, closeWallet } from "../actions/WalletActions";
import "../styles/walletcontainer.scss";
import { connect } from 'react-redux'
import Wallet from "../components/wallet";
const mapStateToProps = (state, props) => {
    return {
        wallet: state.wallet,
        notification: state.notification
    }
};
const mapDispatchToProps = dispatch => ({
    getWallet: () => getWallet()(dispatch),
    closeWallet: () => closeWallet()(dispatch)
});

class Container extends Component {
    state = {
        walletOpen : false
    }
    
    constructor(props) {
        super(props);

        this._closeWallet = this._closeWallet.bind(this);
    }

    // componentWillReceiveProps(nextProps) {
    //     if ( this.props.wallet !== nextProps.wallet) {
    //         this.setState({walletOpen: true});
    //     }
    // }

    _closeWallet() {
        this.props.closeWallet();
    }

    render() {
        const { notification, wallet} = this.props;
        const { walletOpen } = wallet.wallet;
        const openClass = walletOpen ? "open-wallet" : "close-wallet";
        return (<div className={`wallet-container ${openClass}`} >
            {notification.isWaiting ? (<NotificationContainer />) : <Wallet wallet={wallet.wallet}/>}
            <i className="close fas fa-times" title="CLOSE WALLET" onClick={this._closeWallet}></i>
        </div>);
    }
}

const WalletContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Container);

export default WalletContainer;
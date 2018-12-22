import React, { Component } from "react";
import "../styles/maincontainer.scss";
import WalletContainer from "./WalletContainer";
import { connect } from 'react-redux'
import Overlay from "../components/overlay";
import DashboardContainer from "./DashboardContainer";
import { getDashboard } from "../actions/dashboardActions";

const mapStateToProps = (state, props) => {
    return {
        wallet: state.wallet,
        notification: state.notification
    }
};

const mapDispatchToProps = dispatch => ({
    getDashboard: () => getDashboard()(dispatch)
});

class Container extends Component {

    componentDidMount() {
        this.props.getDashboard();
    }

    render() {
        const { wallet } = this.props;
        const { walletOpen } = wallet.wallet;
        const containerClass = walletOpen ? "main-container wallet" : "main-container";
        return (
            <div className={containerClass} >
            <WalletContainer />
            <DashboardContainer />
            {walletOpen ? <Overlay /> : null}
            </div>
        );
    }
}

const MainContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Container);

export default MainContainer;
import React, { Component } from "react";
import "../styles/maincontainer.scss";
import WalletContainer from "./WalletContainer";
import { connect } from 'react-redux'
import Overlay from "../components/overlay";
import DashboardContainer from "./DashboardContainer";
import TranscationsContainer from "./TranscationsContainer";
import ReceiptContainer from "./ReceiptContainer";
import NotificationAlertsContainer from "./NotificationAlertsContainer";
import { getDashboard } from "../actions/dashboardActions";
import { getTranscations } from "../actions/transcationsActions";
import { changeNavigation } from "../actions/navigationActions";
import { Route } from "react-router-dom";

const mapStateToProps = (state, props) => {
    return {
        wallet: state.wallet,
        notification: state.notification,
        navigation: state.navigation,
        dashboard: state.dashboard,
        transcations: state.transcations
    }
};

const mapDispatchToProps = dispatch => ({
    getDashboard: () => getDashboard()(dispatch),
    getTranscations: () => getTranscations()(dispatch),
    changeNavigation: (location) => changeNavigation(location)(dispatch)
});

class MainConnect extends Component {

    componentWillMount() {
        const { location, changeNavigation, dashboard, transcations, history } = this.props;
        if (dashboard.charts.length === 0 || transcations.data.length === 0) {//We are accessing app via URL
            let changeTo;
            switch(location.pathname) {
                case "/notification-alerts":
                    changeTo = location.pathname;
                    break;
                case "/transcations":
                    changeTo = location.pathname;
                    break;
                case "/transcations/receipt": 
                    changeTo = location.pathname;
                    break;
                default:
                    changeTo = "/dashboard";
                    history.push("/dashboard"); 
            }
            changeNavigation(changeTo);
        }
    }

    render() {
        const { wallet } = this.props;
        const { walletOpen } = wallet;
        const containerClass = walletOpen ? "main-container wallet" : "main-container";
        return (
            <div className={containerClass} >
            <WalletContainer />
            <Route path="/transcations/receipt" component={ReceiptContainer}/>
            <Route path="/dashboard" component={DashboardContainer}/>
            <Route path="/notification-alerts" component={NotificationAlertsContainer} />
            <Route path="/transcations" exact component={TranscationsContainer}/>
            {walletOpen ? <Overlay /> : null}
            </div>
        );
    }
}

const MainContainer = connect(
    mapStateToProps, mapDispatchToProps
)(MainConnect);

export default MainContainer;
import React, { Component } from "react";
import { connect } from 'react-redux'
import "../styles/dashboardcontainer.scss";
import Dashboard from "../components/dashboard";
import NotificationContainer from "./NotificationContainer";
import { ACTIONTYPES } from "../utils/actionTypes";

const mapStateToProps = (state, props) => {
    return {
        wallet: state.wallet,
        notification: state.notification,
        dashboard: state.dashboard
    }
};



class Container extends Component {

    getClass() {
        const { dashboard, notification, wallet } = this.props;
        if (wallet.wallet.walletOpen && dashboard.charts.length && dashboard.savingsSummary) return "dashboard-container walletOpen";
        if (notification.isWaiting) return "dashboard-container isWaiting";
        return "dashboard-container";
    }

    render() {
        const { dashboard, notification } = this.props;
        const dashboardContainerClass = this.getClass();
        return (
            <div className={dashboardContainerClass} >
                {notification.isWaiting && notification.waitingActionTypes.includes(ACTIONTYPES.GET_DASHBOARD) ? (<NotificationContainer />) : <Dashboard dashboard={dashboard} />}
            </div>
        );
    }
}

const DashboardContainer = connect(
    mapStateToProps, null
)(Container);

export default DashboardContainer;
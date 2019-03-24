import React, { Component } from "react";
import { connect } from 'react-redux'
import "../styles/dashboardcontainer.scss";
import Dashboard from "../components/dashboard";
import NotificationContainer from "./NotificationContainer";
import { ACTIONTYPES } from "../utils/actionTypes";
import { getDashboard } from "../actions/dashboardActions";

const mapStateToProps = (state, props) => {
    return {
        wallet: state.wallet,
        notification: state.notification,
        dashboard: state.dashboard
    }
};

const mapDispatchToProps = dispatch => ({
    getDashboard: () => getDashboard()(dispatch)
});

const isEmpty = (obj) => {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

export class DashboardConnect extends Component {

    componentWillMount() {
        const { dashboard, getDashboard } = this.props;
        if (dashboard.charts.length === 0 && isEmpty(dashboard.savingsSummary)) {
            getDashboard();
        } 
    }

    getClass() {
        const { dashboard, notification, wallet } = this.props;
        if (wallet.walletOpen && dashboard.charts.length && dashboard.savingsSummary) return "dashboard-container walletOpen";
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
    mapStateToProps, mapDispatchToProps
)(DashboardConnect);

export default DashboardContainer;
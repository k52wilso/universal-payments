import React, { Component } from "react";
import { connect } from 'react-redux'
import "../styles/alerts.scss";
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line, ReferenceLine} from 'recharts';
import { getAlerts } from "../actions/notificationAlertsActions";
import { ACTIONTYPES } from "../utils/actionTypes";
import NotificationContainer from "./NotificationContainer";

const mapStateToProps = (state, props) => {
    return {
        wallet: state.wallet,
        receipt: state.receipt,
        notification: state.notification,
        alerts: state.notificationAlerts.alerts
    }
};

const mapDispatchToProps = dispatch => ({
   getAlerts: () => getAlerts()(dispatch)
});


const monthlyLimits = [
    {name: 'April', spending: 4000, pv: 2400, amt: 2400},
    {name: 'May', spending: 3000, pv: 1398, amt: 2210},
    {name: 'June', spending: 2000, pv: 9800, amt: 2290},
    {name: 'July', spending: 2780, pv: 3908, amt: 2000},
    {name: 'August', spending: 1890, pv: 4800, amt: 2181},
    {name: 'November', spending: 2390, pv: 3800, amt: 2500},
    {name: 'December', spending: 3490, pv: 4300, amt: 2100},
];

const dailyLimits = [
    {name: 'Tuesday', spending: 3490, pv: 4300, amt: 2100},
];

export class NotificationAlertsConnect extends Component {
    componentWillMount() {
        const { getAlerts } = this.props;
        getAlerts();
    }
    render() {
        const { alerts, notification } = this.props;
        if (notification.isWaiting && notification.waitingActionTypes.includes(ACTIONTYPES.GET_NOTIFICATION_ALERTS)) {
            return (<NotificationContainer />);
        }
        return alerts && alerts.length > 0 && (
            <div className="alerts">
                {alerts.map((alert) => {
                    return (
                        <div key={alert.id} className="alert">
                            <h4>{alert.name}</h4>
                            <LineChart width={600} height={200} data={alert.id === "010" ? dailyLimits : monthlyLimits}
                                    margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                            <XAxis dataKey="name"/>
                            <YAxis domain={[0, alert.bounds.max]} />
                            <CartesianGrid strokeDasharray="3 3"/>
                            <Tooltip/>
                            <Legend />
                            <ReferenceLine y={alert.bounds.max} label="Max" stroke="red" strokeDasharray="3 3" />
                            <Line type="monotone" dataKey="spending" stroke="#82ca9d" />
                            </LineChart>
                        </div>
                    )
                })}
            </div>
        );
    }
}

const NotificationAlertsContainer = connect(
    mapStateToProps, mapDispatchToProps
)(NotificationAlertsConnect);

export default NotificationAlertsContainer;
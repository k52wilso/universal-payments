import React, { Component } from "react";
import { connect } from 'react-redux'
import "../styles/notificationcontainer.scss";
  
const mapStateToProps = (state, props) => {
    return {
        isWaiting: state.notification.isWaiting,
        actionTypes: state.notification.waitingActionTypes
    }
}
export class NotificationLoader extends Component {
    render() {
        const { isWaiting } = this.props;
        return (
            <div className="notification-container">
                {isWaiting ? <div className="loader"></div> :  null}
            </div>
        );
    }
}
const NotificationContainer = connect(
    mapStateToProps, null
)(NotificationLoader);


export default NotificationContainer;
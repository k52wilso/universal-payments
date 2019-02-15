import React, { Component } from "react";
import { connect } from 'react-redux'
import "../styles/transcationscontainer.scss";
import NotificationContainer from "./NotificationContainer";
import { getTranscations } from "../actions/transcationsActions";
import { ACTIONTYPES } from "../utils/actionTypes";
import Transcations from "../components/transcations";

const mapStateToProps = (state, props) => {
    return {
        notification: state.notification,
        transcations: state.transcations
    }
};

const mapDispatchToProps = dispatch => ({
    getTranscations: () => getTranscations()(dispatch)
});

class TranscationsConnect extends Component {

    componentWillMount() {
        const {transcations, getTranscations} = this.props;
        if (transcations.data.length === 0) getTranscations();
    }

    render() {
        const { notification, transcations } = this.props;
        const transcationsClass = "transcations-container";
        return (
            <div className={transcationsClass} >
                {notification.isWaiting && notification.waitingActionTypes.includes(ACTIONTYPES.GET_TRANSCATIONS) ? (<NotificationContainer />) : <Transcations transcations={transcations}/>}
            </div>
        );
    }
}

const TranscationsContainer = connect(
    mapStateToProps, mapDispatchToProps
)(TranscationsConnect);

export default TranscationsContainer;
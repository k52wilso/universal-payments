import { ACTIONTYPES } from "../utils/actionTypes";
import HttpService from "../services/httpService";
import { reject } from "q";
export function getTranscations() {
    return (dispatch) => {
        dispatch({type: ACTIONTYPES.NOTIFICATION_START_WAITING, payload:{type: ACTIONTYPES.GET_TRANSCATIONS}});
        return new Promise((resolve) => {
            setTimeout(() => {
                HttpService.getTranscations().then((response) => {
                    dispatch({type: ACTIONTYPES.GET_TRANSCATIONS, payload: response});
                    dispatch({type: ACTIONTYPES.NOTIFICATION_STOP_WAITING, payload: {type: ACTIONTYPES.GET_TRANSCATIONS}});
                    if (response) {
                        resolve(response);
                    } else {
                        reject('Error getting transcations');
                    }
                });
            }, 800);
        });
    }
}
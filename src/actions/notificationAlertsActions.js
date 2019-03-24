import { ACTIONTYPES } from "../utils/actionTypes";
import HttpService from "../services/httpService";
export function getAlerts() {
    return (dispatch) => {
        dispatch({type: ACTIONTYPES.NOTIFICATION_START_WAITING, payload:{type: ACTIONTYPES.GET_NOTIFICATION_ALERTS}});
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                HttpService.getAlerts().then((response) => {
                    dispatch({type: ACTIONTYPES.GET_NOTIFICATION_ALERTS, payload: response});
                    dispatch({type: ACTIONTYPES.NOTIFICATION_STOP_WAITING, payload: {type: ACTIONTYPES.GET_NOTIFICATION_ALERTS}});
                    if (response) {
                        resolve(response);
                    } else {
                        reject('Error getting notification/alerts');
                    }
                });
            }, 800);
        });
    }
}
import { ACTIONTYPES } from "../utils/actionTypes";
import HttpService from "../services/httpService";
export function getDashboard() {
    return (dispatch) => {
        dispatch({type: ACTIONTYPES.NOTIFICATION_START_WAITING, payload:{type: ACTIONTYPES.GET_DASHBOARD}});
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                HttpService.getDashboard().then((response) => {
                    dispatch({type: ACTIONTYPES.GET_DASHBOARD, payload: response});
                    dispatch({type: ACTIONTYPES.NOTIFICATION_STOP_WAITING, payload: {type: ACTIONTYPES.GET_DASHBOARD}});
                    resolve(response);
                });
            }, 800);
        });
    }
}
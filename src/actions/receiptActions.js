import { ACTIONTYPES } from "../utils/actionTypes";
import HttpService from "../services/httpService";
export function getReceipt(id) {
    return (dispatch) => {
        dispatch({type: ACTIONTYPES.NOTIFICATION_START_WAITING, payload:{type: ACTIONTYPES.GET_RECEIPT}});
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                HttpService.getReceipt(id).then((response) => {
                    dispatch({type: ACTIONTYPES.GET_RECEIPT, payload: response});
                    dispatch({type: ACTIONTYPES.NOTIFICATION_STOP_WAITING, payload: {type: ACTIONTYPES.GET_RECEIPT}});
                    if (id !== undefined && response) {
                        resolve(response);
                    } else {
                        reject('Error getting receipt');
                    }
                });
            }, 800);
        });
    }
}
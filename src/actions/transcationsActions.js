import { ACTIONTYPES } from "../utils/actionTypes";
import HttpService from "../services/httpService";
export function getTranscations() {
    return (dispatch) => {
        dispatch({type: ACTIONTYPES.NOTIFICATION_START_WAITING, payload:{type: ACTIONTYPES.GET_TRANSCATIONS}});
        setTimeout(() => {
            HttpService.getTranscations().then((response) => {
                dispatch({type: ACTIONTYPES.GET_TRANSCATIONS, payload: response});
                dispatch({type: ACTIONTYPES.NOTIFICATION_STOP_WAITING, payload: {type: ACTIONTYPES.GET_TRANSCATIONS}});
            });
        }, 800);
    }
}
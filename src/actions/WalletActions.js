import { ACTIONTYPES } from "../utils/actionTypes";
import HttpService from "../services/httpService";
export function getWallet() {
    return (dispatch) => {
        const returnVal = dispatch({type: ACTIONTYPES.NOTIFICATION_START_WAITING, payload: {type: ACTIONTYPES.GET_WALLET}});
        if ( returnVal.payload.type === ACTIONTYPES.GET_WALLET) {
            setTimeout(() => {
                HttpService.getWallet().then((response) => {
                    dispatch({type: ACTIONTYPES.GET_WALLET, payload: response});
                    dispatch({type: ACTIONTYPES.NOTIFICATION_STOP_WAITING, payload: {type: ACTIONTYPES.GET_WALLET}});
                });
            }, 800);
        }
        
    };
}

export function closeWallet() {
    return (dispatch) => {
            dispatch({type: ACTIONTYPES.CLOSE_WALLET});
    }
}
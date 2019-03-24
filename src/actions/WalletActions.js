import { ACTIONTYPES } from "../utils/actionTypes";
import HttpService from "../services/httpService";
export function getWallet(walletOpen = true) {
    return (dispatch) => {
        const returnVal = dispatch({type: ACTIONTYPES.NOTIFICATION_START_WAITING, payload: {type: ACTIONTYPES.GET_WALLET}});
        if ( returnVal.payload.type === ACTIONTYPES.GET_WALLET) {
            return new Promise((resolve,reject) => {
                setTimeout(() => {
                    HttpService.getWallet().then((response) => {
                        dispatch({type: ACTIONTYPES.GET_WALLET, payload: {...response, walletOpen}});
                        dispatch({type: ACTIONTYPES.NOTIFICATION_STOP_WAITING, payload: {type: ACTIONTYPES.GET_WALLET}});
                        if (walletOpen && response) {
                            resolve(response);
                        } else {
                            reject('Error opening Wallet');
                        }
                    });
                }, 800);
            });
        }
        
    };
}

export function closeWallet() {
    return (dispatch) => {
            return new Promise((resolve) => {
                dispatch({type: ACTIONTYPES.CLOSE_WALLET});
                resolve('Closing Wallet');
            })
    }
}
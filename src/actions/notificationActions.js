import { ACTIONTYPES } from "../utils/actionTypes";

export function startNotification(type) {
    return (dispatch) => {
        dispatch({
            type: ACTIONTYPES.NOTIFICATION_START_WAITING,
            payload: {type}
        });
    }
}
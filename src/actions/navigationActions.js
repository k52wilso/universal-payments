import { ACTIONTYPES } from "../utils/actionTypes";
export function changeNavigation(location) {
    return (dispatch) => {
        dispatch({type: ACTIONTYPES.NOTIFICATION_START_WAITING, payload:{type: ACTIONTYPES.NAVIGATION_CHANGE}});
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                dispatch({type: ACTIONTYPES.NAVIGATION_CHANGE, payload: {location}});
                dispatch({type: ACTIONTYPES.NOTIFICATION_STOP_WAITING, payload: {type: ACTIONTYPES.NAVIGATION_CHANGE}});
                if (location !== undefined) {
                    resolve('changing Navigation');
                } else {
                    reject('No location provided');
                }
            }, 800);
        });
    }
}
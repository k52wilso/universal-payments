import { ACTIONTYPES } from "../utils/actionTypes";
let handlers  = {};
const initialState = {
    alerts: []
};

handlers[ACTIONTYPES.GET_NOTIFICATION_ALERTS] = (state, payload) => {
    return {
        ...state,
        alerts: payload
    };
};

export const notificationAlerts = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case ACTIONTYPES.GET_NOTIFICATION_ALERTS:
          return handlers[type](state, payload);
        default:
          return state;
    }
}
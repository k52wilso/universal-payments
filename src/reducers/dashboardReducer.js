import { ACTIONTYPES } from "../utils/actionTypes";
let handlers  = {};
const initialState = {
    charts: [],
    savingsSummary: {}
};

handlers[ACTIONTYPES.GET_DASHBOARD] = (state, payload) => {
    return {
        ...state,
        charts: payload.charts,
        savingsSummary: payload.savingsSummary
    };
};

export const dashboard = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case ACTIONTYPES.GET_DASHBOARD:
          return handlers[type](state, payload);
        default:
          return state;
    }
}
import { ACTIONTYPES } from "../utils/actionTypes";
let handlers  = {};
const initialState = {
    data: []
};

handlers[ACTIONTYPES.GET_TRANSCATIONS] = (state, payload) => {
    const { data } = payload;
    return {
        ...state,
        data
    };
};

export const transcations = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case ACTIONTYPES.GET_TRANSCATIONS:
          return handlers[type](state, payload);
        default:
          return state;
    }
}
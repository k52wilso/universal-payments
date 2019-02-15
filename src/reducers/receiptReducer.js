import { ACTIONTYPES } from "../utils/actionTypes";
let handlers  = {};
const initialState = {
    receiptDetails: {}
};

handlers[ACTIONTYPES.GET_RECEIPT] = (state, payload) => {
    return {
        ...state,
        receiptDetails: payload
    };
};

export const receipt = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case ACTIONTYPES.GET_RECEIPT:
          return handlers[type](state, payload);
        default:
          return state;
    }
}
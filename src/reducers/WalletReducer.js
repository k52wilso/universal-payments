import { ACTIONTYPES } from "../utils/actionTypes";
let handlers  = {};
const initialState = {
    walletOpen: false
};

handlers[ACTIONTYPES.GET_WALLET] = (state, payload) => {
    return {
        ...state, 
        ...payload
    };
};
handlers[ACTIONTYPES.CLOSE_WALLET] = (state) => {
    return {
        ...state,
        ...state.wallet,
        walletOpen: false
    };
};

export const wallet = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case ACTIONTYPES.GET_WALLET:
          return handlers[type](state, payload);
          case ACTIONTYPES.CLOSE_WALLET:
          return handlers[type](state, payload);
        default:
          return state;
    }
}
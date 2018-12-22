import { ACTIONTYPES } from "../utils/actionTypes";
let handlers  = {};
const initialState = {
    wallet: {
        walletOpen: false
    }
};

handlers[ACTIONTYPES.GET_WALLET] = (state, payload) => {
    return {
        ...state,
        wallet: {walletOpen: true, ...payload}
    };
};
handlers[ACTIONTYPES.CLOSE_WALLET] = (state) => {
    return {
        ...state,
        wallet: {...state.wallet,walletOpen: false}
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
import { ACTIONTYPES } from "../utils/actionTypes";
let handlers  = {};
const initialState = {
    location: "/"
};

handlers[ACTIONTYPES.NAVIGATION_CHANGE] = (state, payload) => {
    const { location } = payload;
    let newLocation = location; 

    if (location === state.location) {
        newLocation = state.location;
    }

    return {
        ...state,

        location: newLocation
    };
};

export const navigation = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case ACTIONTYPES.NAVIGATION_CHANGE:
          return handlers[type](state, payload);
        default:
          return state;
    }
}
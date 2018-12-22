import { combineReducers } from 'redux';
import { notification } from "./notificationReducer";
import { wallet } from "./WalletReducer";
import { dashboard } from "./dashboardReducer";

const rootReducer = combineReducers({
    notification,
    wallet,
    dashboard
});

export default rootReducer;
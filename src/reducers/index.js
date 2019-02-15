import { combineReducers } from 'redux';
import { notification } from "./notificationReducer";
import { wallet } from "./WalletReducer";
import { dashboard } from "./dashboardReducer";
import { navigation } from "./navigationReducer";
import { transcations } from "./transcationsReducer";
import { receipt } from "./receiptReducer";
import { notificationAlerts } from "./notificationAlertsReducer";

const rootReducer = combineReducers({
    notification,
    wallet,
    dashboard,
    navigation,
    transcations,
    receipt,
    notificationAlerts
});

export default rootReducer;
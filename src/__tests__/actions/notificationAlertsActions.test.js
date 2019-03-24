import configureMockStore from "redux-mock-store";
import React from "react";
import { getAlerts } from "../../actions/notificationAlertsActions";
import thunk from "redux-thunk";
import expect from "expect"
import { ACTIONTYPES } from "../../utils/actionTypes";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const alerts = [{
    id: "010",
    status: "approaching",
    name: "Daily Limit",
    currentValue: 120,
    bounds: {
        min: 0,
        max: 1000
    }
}, {
    id: "011",
    status: "exceeded",
    name: "Monthly Limit",
    currentValue: 1350,
    bounds: {
        min: 0,
        max: 1300
    }
}];
let expectedActions = [ { type: ACTIONTYPES.NOTIFICATION_START_WAITING,
payload: { type: ACTIONTYPES.GET_NOTIFICATION_ALERTS} },
{ type: ACTIONTYPES.GET_NOTIFICATION_ALERTS,
payload: [...alerts] },
{ type: ACTIONTYPES.NOTIFICATION_STOP_WAITING,
payload: { type: ACTIONTYPES.GET_NOTIFICATION_ALERTS } } ];

describe("Notification/Alerts Actions Test Suite", () =>{
    let store;
    beforeEach (()=>{
        store = mockStore({notificationAlerts: {}});
    });

    test("Should get notification/alerts information", () => {
        return store.dispatch(getAlerts()).then(() => {
             expect(store.getActions()).toEqual(expectedActions);
         });  
     });
});
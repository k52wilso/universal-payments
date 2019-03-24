import configureMockStore from "redux-mock-store";
import React from "react";
import { getDashboard } from "../../actions/dashboardActions";
import thunk from "redux-thunk";
import expect from "expect"
import { ACTIONTYPES } from "../../utils/actionTypes";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const dashboard = {
    charts: [{
        data : [
            {name: 'Apr', savings: 2390, spending: 3800, amt: 2500},
            {name: 'May', savings: 2390, spending: 3800, amt: 2500},
            {name: 'Jun', savings: 2390, spending: 3800, amt: 2500},
            {name: 'Jul', savings: 2390, spending: 3800, amt: 2500},
            {name: 'Aug', savings: 2390, spending: 3800, amt: 2500},
            {name: 'Sep', savings: 2390, spending: 3800, amt: 2500},
            {name: 'Oct', savings: 2390, spending: 3800, amt: 2500},
            {name: 'Nov', savings: 3490, spending: 4300, amt: 2100},
        ],
        type: "money-history"
    }],
    savingsSummary: {
        total: "CAN 280,520.00",
        trend: "15%",
        carousel: [] // items for carousel
    }
}
let expectedActions = [ { type: ACTIONTYPES.NOTIFICATION_START_WAITING,
payload: { type: ACTIONTYPES.GET_DASHBOARD} },
{ type: ACTIONTYPES.GET_DASHBOARD,
payload: { charts: dashboard.charts, savingsSummary: dashboard.savingsSummary } },
{ type: ACTIONTYPES.NOTIFICATION_STOP_WAITING,
payload: { type: ACTIONTYPES.GET_DASHBOARD } } ];

describe("Dashboard Actions Test Suite", () =>{
    let store;
    beforeEach (()=>{
        store = mockStore({dashboard: {}});
    });
    test("Should get the dashboard", () => {
        return store.dispatch(getDashboard()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });  
    });
});
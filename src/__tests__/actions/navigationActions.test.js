import configureMockStore from "redux-mock-store";
import React from "react";
import { changeNavigation } from "../../actions/navigationActions";
import thunk from "redux-thunk";
import expect from "expect"
import { ACTIONTYPES } from "../../utils/actionTypes";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const location = "/newLocation";
let expectedActions = [ { type: ACTIONTYPES.NOTIFICATION_START_WAITING,
payload: { type: ACTIONTYPES.NAVIGATION_CHANGE} },
{ type: ACTIONTYPES.NAVIGATION_CHANGE,
payload: {location} },
{ type: ACTIONTYPES.NOTIFICATION_STOP_WAITING,
payload: { type: ACTIONTYPES.NAVIGATION_CHANGE } } ];

describe("Navigation Actions Test Suite", () =>{
    let store;
    beforeEach (()=>{
        store = mockStore({navigation: {}});
    });
    test("Should not change navigation if no location provided", () => {
       return store.dispatch(changeNavigation()).catch((error) => {
            expect(error).toEqual("No location provided");
        });  
    });
    test("Should change navigation with location", () => {
        return store.dispatch(changeNavigation(location)).then(() => {
             expect(store.getActions()).toEqual(expectedActions);
         });  
     });
});
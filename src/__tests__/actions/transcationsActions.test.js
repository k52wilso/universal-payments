import configureMockStore from "redux-mock-store";
import React from "react";
import { getTranscations } from "../../actions/transcationsActions";
import thunk from "redux-thunk";
import expect from "expect"
import { ACTIONTYPES } from "../../utils/actionTypes";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


let id = 0;
function createData(name, amount, date, cardID) {
  id += 1;
  return { id, name, amount, date, cardID};
}

const rows = [
  createData("Walmart", 198.99, Date.now(), "010"),
  createData("Costco", 300, Date.now(), "011"),
  createData("Moxies", 29.00, Date.now(), "010")
];

const transcations = {
    data: rows
};

let expectedActions = [ { type: ACTIONTYPES.NOTIFICATION_START_WAITING,
payload: { type: ACTIONTYPES.GET_TRANSCATIONS} },
{ type: ACTIONTYPES.GET_TRANSCATIONS,
payload: transcations},
{ type: ACTIONTYPES.NOTIFICATION_STOP_WAITING,
payload: { type: ACTIONTYPES.GET_TRANSCATIONS } } ];

describe("Transcations Actions Test Suite", () =>{
    let store;
    beforeEach (()=>{
        store = mockStore({transcations: {}});
    });

    test("Should get all transcations", () => {
        return store.dispatch(getTranscations()).then(() => {
             expect(store.getActions()).toHaveLength(3);
         });  
     });
});
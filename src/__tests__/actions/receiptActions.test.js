import configureMockStore from "redux-mock-store";
import React from "react";
import { getReceipt } from "../../actions/receiptActions";
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

const getReceiptForTranscation = (id) => {
    for (let i = 0; i < transcations.data.length; i++) {
        if (id === transcations.data[i].id) return transcations.data[i];
    }
    
    return {};
}

let expectedActions = [ { type: ACTIONTYPES.NOTIFICATION_START_WAITING,
payload: { type: ACTIONTYPES.GET_RECEIPT} },
{ type: ACTIONTYPES.GET_RECEIPT,
payload: getReceiptForTranscation(1)},
{ type: ACTIONTYPES.NOTIFICATION_STOP_WAITING,
payload: { type: ACTIONTYPES.GET_RECEIPT } } ];

describe("Receipt Actions Test Suite", () =>{
    let store;
    beforeEach (()=>{
        store = mockStore({receipt: {}});
    });

    test("Should get receipt information with an id provided", () => {
        return store.dispatch(getReceipt(1)).then(() => {
             expect(store.getActions()).toHaveLength(3);
         });  
     });
});
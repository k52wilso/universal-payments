import configureMockStore from "redux-mock-store";
import React from "react";
import { closeWallet,getWallet } from "../../actions/WalletActions";
import thunk from "redux-thunk";
import expect from "expect"
import { ACTIONTYPES } from "../../utils/actionTypes";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const wallet = {
    user: {
        name: "Kyle Wilson-McCormack",
        imageURL: "/assets/images/me.jpg"
    },
    total: "28520",
    cards: [{
        id: "010",
        type: "VISA",
        number: "1234 5678 9000 1000",
        cardOwner: "Kyle Wilson-McCormack",
        expiryDate: "02/21"
    }, {
        id: "011",
        type: "MASTERCARD",
        number: "1234 5678 9000 1000",
        cardOwner: "Kyle Wilson-McCormack",
        expiryDate: "02/21"
    }]
};

let expectedActions = [ { type: ACTIONTYPES.NOTIFICATION_START_WAITING,
payload: { type: ACTIONTYPES.GET_WALLET} },
{ type: ACTIONTYPES.GET_WALLET,
payload: {...wallet, walletOpen: true} },
{ type: ACTIONTYPES.NOTIFICATION_STOP_WAITING,
payload: { type: ACTIONTYPES.GET_WALLET } } ];

describe("Wallet Actions Test Suite", () =>{
    let store;
    beforeEach (()=>{
        store = mockStore({wallet: {}});
    });
    test("Should get wallet information and make sure it is open", () => {
        return store.dispatch(getWallet()).then(() => {
             expect(store.getActions()).toEqual(expectedActions);
         });  
     });
     test("Should not get  wallet information if wallet is not open", () => {
        return store.dispatch(getWallet(false)).catch((error) => {
             expect(error).toEqual('Error opening Wallet');
         });  
     });
     test("Should close wallet", () => {
        return store.dispatch(closeWallet()).then(() => {
            expect(store.getActions()).toEqual([{type: ACTIONTYPES.CLOSE_WALLET}]);
         });  
     });
});
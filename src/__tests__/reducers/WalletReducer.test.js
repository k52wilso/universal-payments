import React from 'react';
import { wallet } from "../../reducers/WalletReducer";
import { ACTIONTYPES } from "../../utils/actionTypes";
import expect from 'expect';

const initialState = {
    walletOpen: false
};

describe("Wallet Reducer Test Suite", () => {
    test("Wallet reducer: initial state is returned with no type provided", () => {
        expect(wallet(undefined, {payload: {charts: ["010"], savingsSummary: {}}}))
        .toEqual(initialState);
    });
    test("Wallet reducer: " + ACTIONTYPES.GET_WALLET, () => {
        expect(wallet(initialState, {type: ACTIONTYPES.GET_WALLET ,payload: {walletOpen: true}}))
        .toEqual({
            walletOpen: true
        });
    });
    test("Wallet reducer: " + ACTIONTYPES.CLOSE_WALLET, () => {
        expect(wallet(initialState, {type: ACTIONTYPES.CLOSE_WALLET}))
        .toEqual({
            walletOpen: false
        });
    });
});
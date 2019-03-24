import React from 'react';
import { receipt } from "../../reducers/receiptReducer";
import { ACTIONTYPES } from "../../utils/actionTypes";
import expect from 'expect';

const initialState = {
    receiptDetails: {}
};

describe("Receipt Reducer Test Suite", () => {
    test("Receipt reducer: initial state is returned with no type provided", () => {
        expect(receipt(undefined, {payload: {}}))
        .toEqual(initialState);
    });
    test("Receipt reducer: " + ACTIONTYPES.GET_RECEIPT, () => {
        expect(receipt(initialState, {type: ACTIONTYPES.GET_RECEIPT ,payload: {details: "details"}}))
        .toEqual({
            receiptDetails: {details: "details"}
        });
    });
});
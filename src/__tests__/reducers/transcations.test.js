import React from 'react';
import { transcations } from "../../reducers/transcationsReducer";
import { ACTIONTYPES } from "../../utils/actionTypes";
import expect from 'expect';

const initialState = {
    data: []
};

describe("Transcations Reducer Test Suite", () => {
    test("Transcations reducer: initial state is returned with no type provided", () => {
        expect(transcations(undefined, {payload: {}}))
        .toEqual(initialState);
    });
    test("Transcations reducer: " + ACTIONTYPES.GET_TRANSCATIONS, () => {
        expect(transcations(initialState, {type: ACTIONTYPES.GET_TRANSCATIONS ,payload: {data: ["data"]}}))
        .toEqual({
            data: ["data"]
        });
    });
});
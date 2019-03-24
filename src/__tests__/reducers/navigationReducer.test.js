import React from 'react';
import { navigation } from "../../reducers/navigationReducer";
import { ACTIONTYPES } from "../../utils/actionTypes";
import expect from 'expect';

const initialState = {
    location: "/"
};

describe("Navigation Reducer Test Suite", () => {
    test("Navigation reducer: initial state is returned with no type provided", () => {
        expect(navigation(undefined, {payload: {}}))
        .toEqual(initialState);
    });
    test("Navigation reducer: location has not changed", () => {
        expect(navigation(initialState, {type: ACTIONTYPES.NAVIGATION_CHANGE ,payload: {location: "/"}}))
        .toEqual(initialState);
    });
    test("Navigation reducer: " + ACTIONTYPES.NAVIGATION_CHANGE, () => {
        expect(navigation(initialState, {type: ACTIONTYPES.NAVIGATION_CHANGE ,payload: {location: "/newLocation"}}))
        .toEqual({
            location: "/newLocation"
        });
    });
});
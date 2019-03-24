import React from 'react';
import { dashboard } from "../../reducers/dashboardReducer";
import { ACTIONTYPES } from "../../utils/actionTypes";
import expect from 'expect';

const initialState = {
    charts: [],
    savingsSummary: {}
};

describe("Dashboard Reducer Test Suite", () => {
    test("Dashboard reducer: initial state is returned with no type provided", () => {
        expect(dashboard(undefined, {payload: {charts: ["010"], savingsSummary: {}}}))
        .toEqual(initialState);
    });
    test("Dashboard reducer: " + ACTIONTYPES.GET_DASHBOARD, () => {
        expect(dashboard(initialState, {type: ACTIONTYPES.GET_DASHBOARD ,payload: {charts: ["010"], savingsSummary: {}}}))
        .toEqual({
            charts: ["010"],
            savingsSummary: {}
        });
    });
});
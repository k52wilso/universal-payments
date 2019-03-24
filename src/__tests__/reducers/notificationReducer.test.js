import React from 'react';
import { notification } from "../../reducers/notificationReducer";
import { ACTIONTYPES } from "../../utils/actionTypes";
import expect from 'expect';

const initialState = {
    isWaiting: false,
    waitingActionTypes: []
};

describe("Notification Reducer Test Suite", () => {
    test("Notification reducer: initial state is returned with no type provided", () => {
        expect(notification(undefined, {payload: {charts: ["010"], savingsSummary: {}}}))
        .toEqual(initialState);
    });
    test("Notification reducer: " + ACTIONTYPES.NOTIFICATION_START_WAITING, () => {
        expect(notification(initialState, {type: ACTIONTYPES.NOTIFICATION_START_WAITING ,payload: {type: ACTIONTYPES.GET_DASHBOARD}}))
        .toEqual({
            isWaiting: true,
            waitingActionTypes: [ACTIONTYPES.GET_DASHBOARD]
        });
    });
    test("Notification reducer: " + ACTIONTYPES.NOTIFICATION_STOP_WAITING, () => {
        expect(notification(initialState, {type: ACTIONTYPES.NOTIFICATION_STOP_WAITING ,payload: {type: ACTIONTYPES.GET_DASHBOARD}}))
        .toEqual({
            isWaiting: false,
            waitingActionTypes: []
        });
    });
});
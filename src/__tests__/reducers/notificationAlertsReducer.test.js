import React from 'react';
import { notificationAlerts } from "../../reducers/notificationAlertsReducer";
import { ACTIONTYPES } from "../../utils/actionTypes";
import expect from 'expect';

const initialState = {
    alerts: []
};

describe("Notification/Alerts Reducer Test Suite", () => {
    test("Notification/Alerts reducer: initial state is returned with no type provided", () => {
        expect(notificationAlerts(undefined, {payload: {}}))
        .toEqual(initialState);
    });
    test("Notification/Alerts reducer: " + ACTIONTYPES.GET_NOTIFICATION_ALERTS, () => {
        expect(notificationAlerts(initialState, {type: ACTIONTYPES.GET_NOTIFICATION_ALERTS ,payload: []}))
        .toEqual({
            alerts: []
        });
    });
});
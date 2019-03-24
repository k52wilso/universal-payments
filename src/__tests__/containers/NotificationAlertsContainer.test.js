import React from 'react';
import { shallow } from "enzyme";
import { NotificationAlertsConnect } from "../../containers/NotificationAlertsContainer";
import expect from "expect";



const props = {
    alerts: [{
        id: "010",
        status: "approaching",
        name: "Daily Limit",
        currentValue: 120,
        bounds: {
            min: 0,
            max: 1000
        }
    }, {
        id: "011",
        status: "exceeded",
        name: "Monthly Limit",
        currentValue: 1350,
        bounds: {
            min: 0,
            max: 1300
        }
    }],
    receipt: {},
    wallet: {
        walletOpen: true
    },
    notification: {},
    getAlerts: () => {}
}

describe("Notifications/Alerts Container test suite",() => {
    let wrapper;

    test("should render Notifications/Alerts Container",() =>{
        wrapper = shallow(<NotificationAlertsConnect {...props}/>);
        expect(wrapper.find('.alerts')).toHaveLength(1);
        expect(wrapper.find('.alert')).toHaveLength(2);
    });
});
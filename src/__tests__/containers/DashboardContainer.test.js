import React from 'react';
import { shallow } from "enzyme";
import { DashboardConnect } from "../../containers/DashboardContainer";
import Dashboard from "../../components/dashboard";
import expect from "expect";

const isEmpty = (obj) => {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

const props = {
    dashboard: {
        charts: [],
        savingsSummary: {}
    },
    notification: {

    },
    wallet: {

    },
    getDashboard: () => {}
}

describe("Dashboard Container test suite",() => {
    let wrapper;

    test("should render dashboard Container (dashboard,notification and wallet are empty)",() =>{
        wrapper = shallow(<DashboardConnect {...props}/>);
        expect(wrapper.find('.dashboard-container')).toHaveLength(1);
        expect(wrapper.find(Dashboard)).toHaveLength(1);
    });
    test("should render dashboard Container ",() =>{
        wrapper = shallow(<DashboardConnect {...props}/>);
        wrapper.setProps({
            dashboard: {charts: [{
                data : [
                    {name: 'Apr', savings: 2390, spending: 3800, amt: 2500},
                    {name: 'May', savings: 2390, spending: 3800, amt: 2500},
                    {name: 'Jun', savings: 2390, spending: 3800, amt: 2500},
                    {name: 'Jul', savings: 2390, spending: 3800, amt: 2500},
                    {name: 'Aug', savings: 2390, spending: 3800, amt: 2500},
                    {name: 'Sep', savings: 2390, spending: 3800, amt: 2500},
                    {name: 'Oct', savings: 2390, spending: 3800, amt: 2500},
                    {name: 'Nov', savings: 3490, spending: 4300, amt: 2100},
                ],
                type: "money-history"
            }],
            savingsSummary: {
                total: "CAN 280,520.00",
                trend: "15%",
                carousel: [] // items for carousel
            }}
        });
        wrapper.update();
        // const charts = wrapper.props().dashboard.charts;
        // const savingsSummary = wrapper.props().dashboard.savingsSummary;
        // expect(charts.length).toBeGreaterThan(0);
        // expect(isEmpty(savingsSummary)).toEqual(false);
    });

});
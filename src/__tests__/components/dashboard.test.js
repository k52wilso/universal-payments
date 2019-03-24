import React from 'react';
import { shallow } from "enzyme";
import Dashboard from "../../components/dashboard";
import expect from "expect";



const props = {
    dashboard: {
        charts: [{
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
        }
    }
}

describe("Dashboard test suite",() => {
    let wrapper;

    test("should render dashboard",() =>{
        wrapper = shallow(<Dashboard {...props}/>);
        expect(wrapper.find('.dashboard')).toHaveLength(1);
    });

});
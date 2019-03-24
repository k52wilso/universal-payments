import React from 'react';
import { shallow } from "enzyme";
import { NotificationLoader } from "../../containers/NotificationContainer";
import expect from "expect";



const props = {
    isWaiting: false,
    waitingActionTypes: []
}

describe("Notification Container test suite",() => {
    let wrapper;

    test("should render NotificationContainer with null if not waiting",() =>{
        wrapper = shallow(<NotificationLoader {...props}/>);
        expect(wrapper.find('.notification-container')).toHaveLength(1);
    });
    test("should render NotificationContainer loader if waiting",() =>{
        const differentProps = {
            ...props,
            isWaiting: true
        }
        wrapper = shallow(<NotificationLoader {...differentProps}/>);
        expect(wrapper.find('.loader')).toHaveLength(1);
    });

});
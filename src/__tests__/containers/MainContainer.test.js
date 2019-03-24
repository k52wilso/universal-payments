import React from 'react';
import { shallow } from "enzyme";
import { MainConnect } from "../../containers/MainContainer";
import { Route } from 'react-router-dom';
import Overlay from "../../components/overlay";
import expect from "expect";



const props = {
    wallet: {
        walletOpen: false
    },
    notification: {},
    navigation: {},
    dashboard: {
        charts: []
    },
    transcations: {
        data: []
    },
    history: [],
    location: {
        pathname: "/"
    },
    changeNavigation: (location) => {}
}

describe("Main Container test suite",() => {
    let wrapper;

    test("should render MainContainer ",() =>{
        wrapper = shallow(<MainConnect {...props}/>);
        expect(wrapper.find('.main-container')).toHaveLength(1);
        expect(wrapper.find(Route)).toHaveLength(4);
    });
    test("should render MainContainer with walletOpen",() =>{
        const differentProps = {
            ...props,
            wallet: {
                walletOpen: true
            }
        }
        wrapper = shallow(<MainConnect {...differentProps}/>);
        expect(wrapper.find('.wallet')).toHaveLength(1);
        expect(wrapper.find(Overlay)).toHaveLength(1);
    });

    test("should render MainContainer  with different",() =>{
        const differentProps = {
            ...props,
            location: {
                pathname: "/notification-alerts"
            }
        }
        wrapper = shallow(<MainConnect {...differentProps}/>);
        wrapper.unmount();
        differentProps.location.pathname = "/transcations";
        wrapper = shallow(<MainConnect {...differentProps}/>);
        wrapper.unmount();
        differentProps.location.pathname = "/transcations/receipt";
        wrapper = shallow(<MainConnect {...differentProps}/>);
    });

});
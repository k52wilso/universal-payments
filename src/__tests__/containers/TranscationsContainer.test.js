import React from 'react';
import { shallow } from "enzyme";
import { TranscationsConnect } from "../../containers/TranscationsContainer";
import Transcations from "../../components/transcations";
import expect from "expect";



const props = {
    notification: {

    },
    transcations: {
        data: []
    },
    getTranscations: () => {},
}

describe("Transcations Container test suite",() => {
    let wrapper;

    test("should render Transcations Container",() =>{
        wrapper = shallow(<TranscationsConnect {...props}/>);
        expect(wrapper.find('.transcations-container')).toHaveLength(1);
        expect(wrapper.find(Transcations)).toHaveLength(1);
    });
});
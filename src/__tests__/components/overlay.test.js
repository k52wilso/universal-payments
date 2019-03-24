import React from 'react';
import { shallow } from "enzyme";
import Overlay from "../../components/overlay";
import expect from "expect";

describe("Overlay test suite",() => {
    let wrapper;

    test("should render Overlay",() =>{
        wrapper = shallow(<Overlay />);
        expect(wrapper.find('.overlay')).toHaveLength(1);
    });
});
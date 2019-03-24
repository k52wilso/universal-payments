import React from 'react';
import { shallow } from "enzyme";
import Offer from "../../components/offer";
import { Link } from "react-router-dom";
import expect from "expect";

const props = {
    offer: {
        header: "50%",
        title: "Savings from Costco",
        link: "Read More...",
        linkCallback: () => console.log("Clicking offer..."),
        imageURL: "/assets/images/costco.png",
        background: "#0984e3"
    }
}

describe("Offer test suite",() => {
    let wrapper;

    test("should render Offer",() =>{
        wrapper = shallow(<Offer {...props} />);
        expect(wrapper.find('.offer')).toHaveLength(1);
        expect(wrapper.find('.details')).toHaveLength(1);
        expect(wrapper.find('.flex-item')).toHaveLength(2);
        expect(wrapper.find('.close')).toHaveLength(1);
    });
    test("should be able to close offer",() =>{
        wrapper = shallow(<Offer {...props} />);
        
        const close = wrapper.find('.close');
        close.simulate('click');
        expect(wrapper.find('.closing')).toHaveLength(1);
    });

});
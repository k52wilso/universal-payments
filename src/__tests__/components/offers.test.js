import React from 'react';
import { shallow } from "enzyme";
import Offers from "../../components/offers";
import Offer from "../../components/offer";
import expect from "expect";

const props = {
    offers: [{
        header: "50%",
        title: "Savings from Costco",
        link: "Read More...",
        linkCallback: () => console.log("Clicking offer..."),
        imageURL: "/assets/images/costco.png",
        background: "#0984e3"
    }, {
        header: "23%",
        title: "Savings from Walmart",
        link: "Read More...",
        linkCallback: () => console.log("Clicking offer..."),
        imageURL: "/assets/images/walmart.png",
        background: "#00b894"
    }]
}

describe("Offers test suite",() => {
    let wrapper;

    test("should render Offers",() =>{
        wrapper = shallow(<Offers {...props} />);
        expect(wrapper.find('.offers')).toHaveLength(1);
        expect(wrapper.find(Offer)).toHaveLength(2);
    });

});
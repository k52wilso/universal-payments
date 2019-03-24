import React from 'react';
import { shallow } from "enzyme";
import Card from "../../components/card";

const props = {
    card: {
        type: "VISA",
        expiryDate: "01/01/2019",
        cardOwner: "John Smith",
        number: "1223455545551222"
    }
}

describe("Card test suite",() => {
    let wrapper;

    test("should render card",() =>{
        wrapper = shallow(<Card {...props}/>);
        expect(wrapper.find('.card')).toHaveLength(1);
    });

});
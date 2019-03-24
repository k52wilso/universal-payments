import React from 'react';
import { shallow } from "enzyme";
import Card from "../../components/card";
import CardHolder from "../../components/cardholder";
import expect from "expect";

const props = {
    cards: [
        {
            id: 1,
            type: "VISA",
            expiryDate: "01/01/2019",
            cardOwner: "John Smith",
            number: "1223455545551222"
        },
        {
            id: 2,
            type: "MASTERCARD",
            expiryDate: "01/01/2019",
            cardOwner: "John Smith",
            number: "1223455545551222"
        }
    ]
}

describe("Cards test suite",() => {
    let wrapper;

    test("should render cards",() =>{
        wrapper = shallow(<CardHolder {...props}/>);
        expect(wrapper.find('.card-holder')).toHaveLength(1);
        expect(wrapper.find(Card)).toHaveLength(2);
    });

});
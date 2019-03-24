import React from 'react';
import { shallow } from "enzyme";
import Wallet from "../../components/wallet";
import CardHolder from "../../components/cardholder";
import Carousel from "../../components/carousel";
import expect from "expect";

const props = {
    wallet: {
        user: {
            name: "Kyle Wilson-McCormack",
            imageURL: "/assets/images/me.jpg"
        },
        total: "28520",
        cards: [{
            id: "010",
            type: "VISA",
            number: "1234 5678 9000 1000",
            cardOwner: "Kyle Wilson-McCormack",
            expiryDate: "02/21"
        }, {
            id: "011",
            type: "MASTERCARD",
            number: "1234 5678 9000 1000",
            cardOwner: "Kyle Wilson-McCormack",
            expiryDate: "02/21"
        }]
    }
}

describe("Wallet test suite",() => {
    let wrapper;
    test("should render wallet",() =>{
        wrapper = shallow(<Wallet {...props} />);
        expect(wrapper.find('.wallet')).toHaveLength(1);
        expect(wrapper.find(CardHolder)).toHaveLength(1);
        expect(wrapper.find(Carousel)).toHaveLength(1);
    });
});
import React from 'react';
import { shallow } from "enzyme";
import { ReceiptConnect } from "../../containers/ReceiptContainer";
import expect from "expect";



const props = {
    location: {
        search: "wwww.google.com?id=12"
    },
    wallet: {
        walletOpen: false,
        cards: [{
            id: "010",
            type: "VISA",
            number: "1234134544445555"
        }]
    },
    receipt: {
        receiptDetails: {
            cardID: "010",
            name: "Walmart"
        }
    },
    notification: {
        
    },
    getReceipt: (id) => {},
    getWallet: (openWallet) => {}
}

describe("Receipt Container test suite",() => {
    let wrapper;

    test("should render ReceiptContainer",() =>{
        wrapper = shallow(<ReceiptConnect {...props}/>);
        expect(wrapper.find('.receipt-container')).toHaveLength(1);
    });
});
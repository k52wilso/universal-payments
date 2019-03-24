import React from 'react';
import { shallow } from "enzyme";
import { WalletConnect } from "../../containers/WalletContainer";
import Wallet from "../../components/wallet";
import expect from "expect";



const props = {
    wallet: {
        walletOpen: true
    },
    notification: {},
    getWallet: () => {},
    closeWallet: () => {}
}

describe("Wallet Container test suite",() => {
    let wrapper;

    test("should render Wallet Container",() =>{
        wrapper = shallow(<WalletConnect {...props}/>);
        expect(wrapper.find('.wallet-container')).toHaveLength(1);
        expect(wrapper.find('.open-wallet')).toHaveLength(1);
        expect(wrapper.find(Wallet)).toHaveLength(1);
    });
    test("should close wallet",() =>{
        wrapper = shallow(<WalletConnect {...props}/>);
        const close = wrapper.find('.close');
        close.simulate('click');
    });
});
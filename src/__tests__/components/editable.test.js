import React from 'react';
import { shallow } from "enzyme";
import Editable from "../../components/editable";
import expect from "expect";

const cards = {
        id: 1,
        type: "VISA",
        expiryDate: "01/01/2019",
        cardOwner: "John Smith",
        number: "1223455545551222"
};

function buildEditableContent(toEdit) {
    const card = cards;
    const content = {
        type: "text"
    };
    if (toEdit === card.number){ 
        content.text = card.number
        content.classes = "card-number";
    } else if (toEdit === card.cardOwner){ 
        content.text = card.cardOwner
        content.classes = "";
    } else if (toEdit === card.expiryDate){ 
        content.text = card.expiryDate
        content.classes = "";
    };
    return content;
}

const props = {
    content: buildEditableContent(cards.number)
};


describe("Editable test suite",() => {
    let wrapper;

    test("should render cards with default state",() =>{
        wrapper = shallow(<Editable {...props}/>);
        expect(wrapper.find('.editable')).toHaveLength(1);
        expect(wrapper.find('.card-number')).toHaveLength(1);
    });
    test("should toggle state if card number is clicked",() =>{
        wrapper = shallow(<Editable {...props}/>);
        const cardNumber = wrapper.find('.card-number');
        cardNumber.simulate('click');
        expect(wrapper.state().editIsOpen).toEqual(true);
    });
    test("should render cards with input and button",() =>{
        wrapper = shallow(<Editable {...props}/>);
        wrapper.setState({
            editIsOpen: true
        });
        expect(wrapper.find('input')).toHaveLength(1);
        expect(wrapper.find('.button-group')).toHaveLength(1);
        expect(wrapper.find('.confirm')).toHaveLength(1);
        expect(wrapper.find('.cancel')).toHaveLength(1);
    });
    test("entering keys on editable input should update state",() =>{
        wrapper = shallow(<Editable {...props}/>);
        wrapper.setState({
            editIsOpen: true
        });
        const inputField = wrapper.find('input');
        inputField.simulate('change', {target: {value: "new info"}});
        expect(wrapper.state().editedText).toEqual("new info");
    });
    test("clicking on confirm button will close editable view",() =>{
        wrapper = shallow(<Editable {...props}/>);
        wrapper.setState({
            editIsOpen: true
        });
        const confirm = wrapper.find('.confirm');
        confirm.simulate('click');
        expect(wrapper.state().editIsOpen).toEqual(false);
    });
    test("clicking on cancel button will close editable view",() =>{
        wrapper = shallow(<Editable {...props}/>);
        wrapper.setState({
            editIsOpen: true
        });
        const cancel = wrapper.find('.cancel');
        cancel.simulate('click');
        expect(wrapper.state().editIsOpen).toEqual(false);
    });

});
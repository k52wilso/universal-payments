import React from 'react';
import { shallow } from "enzyme";
import Transcations from "../../components/transcations";
import expect from "expect";

let id = 0;
function createData(name, amount, date, cardID) {
  id += 1;
  return { id, name, amount, date, cardID};
}

const rows = [
  createData("Walmart", 198.99, Date.now(), "010"),
  createData("Costco", 300, Date.now(), "011"),
  createData("Moxies", 29.00, Date.now(), "010")
];

const transcations = {
    data: rows
};

const props = {
    transcations
}

describe("Transcations test suite",() => {
    let wrapper;
    test("should not render transcations if no data is provided",() =>{
        const differentProps = {
            ...props,
            transcations: {
                data: []
            }
        }
        wrapper = shallow(<Transcations {...differentProps} />);
        expect(wrapper.find('.transcations')).toHaveLength(0);
    });
    test("should render transcations",() =>{
        wrapper = shallow(<Transcations {...props} />);
        expect(wrapper.find('.transcations')).toHaveLength(1);
    });
});
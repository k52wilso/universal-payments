import React from 'react';
import { shallow } from "enzyme";
import ErrorPage from "../../components/errorpage";
import { Link } from "react-router-dom";
import expect from "expect";

describe("Error page test suite",() => {
    let wrapper;

    test("should error page",() =>{
        wrapper = shallow(<ErrorPage />);
        expect(wrapper.find('.error-page')).toHaveLength(1);
    });

});
import React from 'react';
import { shallow } from "enzyme";
import CarouselItem from "../../components/carouselitem";
import expect from "expect";

const props = {
    item: {
        id: "010",
        topic: "Income", 
        value: "CAN 32,500.00",
        trend: "bad"
    }
}

describe("Carousel Item test suite",() => {
    let wrapper;

    test("should render carousel item",() =>{
        wrapper = shallow(<CarouselItem {...props}/>);
        expect(wrapper.find('.fa-arrow-down')).toHaveLength(1); // Bad and Income
        wrapper.setProps({
            item: {
                ...props.item,
                trend: "good"
            }
        });
        expect(wrapper.find('.fa-arrow-up')).toHaveLength(1); // Good and Income
        wrapper.setProps({
            item: {
                ...props.item,
                trend: "bad",
                topic: "Spending"
            }
        });
        expect(wrapper.find('.fa-arrow-up')).toHaveLength(1);
        wrapper.setProps({
            item: {
                ...props.item,
                trend: "good"
            }
        });
        expect(wrapper.find('.fa-arrow-up')).toHaveLength(1);
    });

});
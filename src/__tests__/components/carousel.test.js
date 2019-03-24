import React from 'react';
import { shallow } from "enzyme";
import Carousel from "../../components/carousel";
import CarouselItem from "../../components/carouselitem";
import expect from "expect";

const props = {
    items: [{
        id: "010",
        topic: "Income", 
        value: "CAN 32,500.00",
        trend: "bad"
    },{
        id: "011",
        topic: "Spending", 
        value: "CAN 10,120.00",
        trend: "bad"
    }]
}

describe("Carousel test suite",() => {
    let wrapper;

    test("should carousel with items",() =>{
        wrapper = shallow(<Carousel {...props}/>);
        expect(wrapper.find('.carousel')).toHaveLength(1);
        expect(wrapper.find(CarouselItem)).toHaveLength(2);
    });

});
import React from "react";
import { shallow } from "enzyme";
import SideBar from "../components/sidebar";

const props = {
    items: [{
        id: "010",
        icon: "",
        name: "Dashboard",
        class: "fas fa-signal"
    }]
};
describe("side bar test suite", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<SideBar />);
    });
    test("should not render if no items", () =>{
        expect(wrapper.find(".sidebar")).toHaveLength(0);
    });
    test("should render with items", () =>{
        wrapper = shallow(<SideBar {...props} />);
        expect(wrapper.find(".sidebar")).toHaveLength(1);
    });
});
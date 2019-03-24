import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import SideBarWithRouter from "../../components/sidebar";
import expect from "expect";
const props = {
    items: [{
        id: "010",
        icon: "",
        name: "Dashboard",
        class: "fas fa-signal"
    }]
};
describe("side bar test suite", () => {

    test("should render with items", () =>{
        const wrapper = mount(
            <MemoryRouter>
                <SideBarWithRouter {...props} />
            </MemoryRouter>
        );
        expect(wrapper.find(".sidebar")).toHaveLength(1);
    });
});
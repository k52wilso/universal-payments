import React from "react";
import { shallow } from "enzyme";
import Icon from "../components/icon/icon";

const props = {
    icon: {
        id: "010",
        icon: "",
        name: "Dashboard",
        class: "fas fa-signal"
    }
};
describe("icon test suite", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Icon />);
    });
    test("should not render if no icon", () =>{
        expect(wrapper.find(".icon")).toHaveLength(0);
    });
    test("should render with icon", () =>{
        wrapper = shallow(<Icon {...props} />);
        expect(wrapper.find(".icon")).toHaveLength(1);
    });
});
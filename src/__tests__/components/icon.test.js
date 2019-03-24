import React from "react";
import { shallow } from "enzyme";
import Icon from "../../components/icon/icon";

const props = {
    icon: {
        id: "010",
        icon: "",
        name: "Dashboard",
        class: "fas fa-signal",
        active: true,
        size: "sm"
    }
};
describe("icon test suite", () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallow(<Icon {...props}/>);
    });

    test("should render with icon", () =>{
        wrapper = shallow(<Icon {...props} />);
        expect(wrapper.find(".icon-sm")).toHaveLength(1);
    });
});

import React from "react";
import ReactDOM from "react-dom";
import Example from "./Example";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Counter Test", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Example />)));

  test("render title of counter", () => {
    expect(wrapper.find("p").text()).toContain("This is counter app");
  });

  test("render a button with text of increment", () => {
    expect(wrapper.find("#increment-btn").text()).toBe("Increment");
  });

  test("render the initial value of state in a div", () => {
    expect(wrapper.find("#increment-btn").text()).toBe("Increment");
  });
  test("Renders initial value of state in a div", () => {
      expect(wrapper.find('#counter-value').text()).toBe("0");
  });
  test("render click event of increment button and increment counter value", () => {
    wrapper.find('#increment-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe("1");
  });
  test("render click event of increment button and decrement counter value", () => {
    wrapper.find('#increment-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe("1");
    wrapper.find('#decrement-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe("0");
  });

  test("Decrement cannot go below 0", () => {
    expect(wrapper.find('#counter-value').text()).toBe("0");
    wrapper.find('#decrement-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe("0");
  });
});




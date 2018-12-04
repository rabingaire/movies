// Link.react.test.js
import React from "react";
import Header from "./index";
import renderer from "react-test-renderer";

test("Link changes the class when hovered", () => {
  const component = renderer.create(<Header />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

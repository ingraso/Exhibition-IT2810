import React from "react";
import { render, cleanup } from "@testing-library/react";
import App from "../App";

afterEach(cleanup);

/*To  test that the component hierarchy is the way we expect it to be*/

it("installationInfo snapshot", () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});

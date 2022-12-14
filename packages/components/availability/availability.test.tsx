/**
 * @jest-environment jsdom
 */
import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Availability } from "./availability";

test("displays greeting", async () => {
  // ARRANGE
  const rendered = render(<Availability />);

  // ASSERT
  expect(rendered).toMatchSnapshot();
});

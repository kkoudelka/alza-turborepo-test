/**
 * @jest-environment jsdom
 */
import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AlzaButton } from "./Button";

test("displays greeting", async () => {
  // ARRANGE
  const rendered = render(<AlzaButton text="Tlacitko" />);

  // ASSERT
  expect(rendered).toMatchSnapshot();
});

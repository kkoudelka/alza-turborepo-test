/**
 * @jest-environment jsdom
 */
import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AlzaText } from "./AlzaText";

test("displays greeting", async () => {
  // ARRANGE
  const rendered = render(<AlzaText text="Dobrý den" />);

  // ASSERT
  expect(rendered).toMatchSnapshot();
});

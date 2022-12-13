import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Availability } from "alza-components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const Meta: ComponentMeta<typeof Availability> = {
  title: "UI/Availability",
  component: Availability,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

export default Meta;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Availability> = (args) => (
  <Availability {...args} />
);

export const AvailabilityStory: ComponentStory<typeof Availability> =
  Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AlzaButton } from "ui";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const Meta: ComponentMeta<typeof AlzaButton> = {
  title: "UI/Button",
  component: AlzaButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

export default Meta;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AlzaButton> = (args) => (
  <AlzaButton {...args} />
);

export const Button: ComponentStory<typeof AlzaButton> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Button.args = {
  text: "Button",
};

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AlzaText } from "ui";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const Meta: ComponentMeta<typeof AlzaText> = {
  title: "UI/Text",
  component: AlzaText,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

export default Meta;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AlzaText> = (args) => (
  <AlzaText {...args} />
);

export const Text: ComponentStory<typeof AlzaText> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Text.args = {
  text: "Alza Text",
};

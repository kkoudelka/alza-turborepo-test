import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ColourTiles } from "ui";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const Meta: ComponentMeta<typeof ColourTiles> = {
  title: "UI/Colours",
  component: ColourTiles,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

export default Meta;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ColourTiles> = (args) => (
  <ColourTiles {...args} />
);

export const Colours: ComponentStory<typeof ColourTiles> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

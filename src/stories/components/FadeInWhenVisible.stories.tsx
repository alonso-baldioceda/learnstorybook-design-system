import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import FadeInWhenVisible from "./FadeInWhenVisible";

export default {
  title: "Components/Animations",
  component: FadeInWhenVisible,
  args: { duration: 0.5 },
} as ComponentMeta<typeof FadeInWhenVisible>;

const Template: ComponentStory<typeof FadeInWhenVisible> = (args) => (
  <FadeInWhenVisible {...args}>some text here!!</FadeInWhenVisible>
);

export const Default = Template.bind({});
Default.storyName = "FadeInWhenVisible";

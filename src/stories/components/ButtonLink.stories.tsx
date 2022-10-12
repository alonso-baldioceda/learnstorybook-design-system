import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import ButtonLink from "./ButtonLink";

export default {
  title: "ButtonLink",
  component: ButtonLink,
  args: {
    appearance: "primary",
    bold: true,
    disabled: false,
    mb: 0,
    px: 4,
    py: 2,
    rounded: true,
    targetBlank: false,
    url: "https://www.google.com/",
  },
  argTypes: {
    appearance: {
      control: "select",
      options: ["primary", "secondary", "ternary"],
    },
    bold: {
      control: "boolean",
      options: [false, true],
    },
    disabled: {
      control: "boolean",
      options: [false, true],
    },
    mb: {
      control: "select",
      options: [0, 1, 2, 3, 4, 5],
    },
    px: {
      control: "select",
      options: [0, 1, 2, 3, 4, 5],
    },
    py: {
      control: "select",
      options: [0, 1, 2, 3, 4, 5],
    },
    rounded: {
      control: "boolean",
      options: [false, true],
    },
  },
} as ComponentMeta<typeof ButtonLink>;

const Template: ComponentStory<typeof ButtonLink> = (args) => (
  <ButtonLink {...args}>link</ButtonLink>
);

export const Default = Template.bind({});
Default.args = { appearance: "primary", targetBlank: true };

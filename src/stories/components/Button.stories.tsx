import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    appearance: "primary",
    bold: true,
    disabled: false,
    mb: 0,
    px: 4,
    py: 2,
    rounded: true,
    type: "button",
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
    type: {
      control: "select",
      options: ["button", "submit"],
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>button</Button>
);

export const ButtonPrimary = Template.bind({});
ButtonPrimary.args = { appearance: "primary" };
ButtonPrimary.storyName = "Primary";

export const ButtonSecondary = Template.bind({});
ButtonSecondary.args = { ...ButtonPrimary.args, appearance: "secondary" };
ButtonSecondary.storyName = "Secondary";

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import Button from "./Button";

export default {
  title: "Button",
  component: Button,
  args: {
    appearance: "primary",
    bold: true,
    disabled: false,
    mb: 0,
    px: 4,
    py: 2,
    rounded: true,
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

export const Default = Template.bind({});
Default.args = { appearance: "primary" };

// export const Secondary = Template.bind({});
// Secondary.args = { ...Primary.args };

// export const Primary: ComponentStory<typeof Button> = () => (
//   <Button appearance="primary">Primary</Button>
// );

// export const Secondary: ComponentStory<typeof Button> = () => (
//   <Button appearance="secondary">Secondary</Button>
// );

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import Spacer from "./Spacer";

export default {
  title: "Components/Spacer",
  component: Spacer,
  args: {
    bottomOnly: false,
  },
} as ComponentMeta<typeof Spacer>;

const Template: ComponentStory<typeof Spacer> = (args) => (
  <div className="bg-primary px-4">
    <Spacer {...args}>some text here</Spacer>
  </div>
);

export const FullSpacer = Template.bind({});

export const BottonSpacer = Template.bind({});
BottonSpacer.args = { bottomOnly: true };

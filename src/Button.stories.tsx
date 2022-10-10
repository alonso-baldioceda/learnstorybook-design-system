import React from "react";

import Button from "./Button";

export default {
  title: "Button",
  component: Button,
};

export const Primary = () => <Button appearance="primary">Primary</Button>;

export const Secondary = () => (
  <Button appearance="secondary">Secondary</Button>
);

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import Card from "./Card";

// Stories
import { ListWithItems } from "./ListGroup.stories";
import { ButtonLinkPrimary } from "./ButtonLink.stories";

export default {
  title: "Components/Card",
  component: Card,
  args: {
    border: 4,
    foreignBackgroundColor: "primary",
    title: "title here!!",
    upfrontBackgroundColor: "transparent",
  },
  argTypes: {
    border: {
      control: "select",
      options: [0, 1, 2, 3, 4, 5],
    },
    foreignBackgroundColor: {
      control: "select",
      options: ["primary", "secondary", "ternary"],
    },
    upfrontBackgroundColor: {
      control: "select",
      options: ["transparent", "white"],
    },
  },
} as ComponentMeta<typeof Card>;

export const BookingSample: ComponentStory<typeof Card> = () => (
  <Card
    border={4}
    title="Title here!!"
    foreignBackgroundColor="primary"
    upfrontBackgroundColor="transparent"
  >
    <div className="px-3 py-5">
      <div className="mb-3">
        <ListWithItems />
      </div>
      <p className="text-center small mb-2">Reservar por:</p>
      <div className="d-flex justify-content-center">
        <ButtonLinkPrimary
          appearance="primary"
          disabled={false}
          targetBlank={true}
          url="https://www.google.com/"
        />
      </div>
    </div>
  </Card>
);

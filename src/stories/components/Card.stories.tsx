import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import Card from "./Card";
import ListGroup from "./ListGroup";
import ListGroupItem from "./ListGroupItem";
import ButtonLink from "./ButtonLink";

// Assets
import imageFile from "./../../images/svg/bed-single.svg";

export default {
  title: "Card",
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

const image = {
  src: imageFile,
  alt: "my image",
};

const list = [{ text: "some text here!!" }, { text: "some text here!!" }];

const Template: ComponentStory<typeof Card> = (args) => (
  <Card {...args}>
    <div className="px-3 py-5">
      <div className="mb-3">
        <ListGroup>
          {list.map(({ text }, index) => (
            <ListGroupItem key={index} text={text}>
              <img src={image.src} alt={image.alt} height={40} width={40} />
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
      <p className="text-center small mb-2">Reservar por:</p>
      <div className="d-flex justify-content-center">
        <ButtonLink
          targetBlank={false}
          appearance="primary"
          disabled={false}
          url="https://www.google.com/"
        >
          Airbnb
        </ButtonLink>
      </div>
    </div>
  </Card>
);

export const Default = Template.bind({});
Default.args = {
  border: 4,
  title: "Title here!!",
  foreignBackgroundColor: "primary",
  upfrontBackgroundColor: "transparent",
};

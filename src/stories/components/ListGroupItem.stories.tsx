import React from "react";

// Components
import ListGroupItem from "./ListGroupItem";

// Assets
import imageFile from "./../../images/svg/bed-single.svg";

export default {
  title: "Components/ListGroupItem",
  component: ListGroupItem,
  args: {
    text: "some text here!!",
  },
};

const image = {
  src: imageFile,
  alt: "my image",
};

export const Default = () => <ListGroupItem text="some text here!!" />;

export const WithIcon = () => (
  <ListGroupItem text="some text here!!">
    <img src={image.src} alt={image.alt} height={40} width={40} />
  </ListGroupItem>
);

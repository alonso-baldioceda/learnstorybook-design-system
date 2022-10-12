import React from "react";

// Components
import ListGroup from "./ListGroup";
import ListGroupItem from "./ListGroupItem";

// Assets
import imageFile from "./../../images/svg/bed-single.svg";

export default {
  title: "ListGroup",
  component: ListGroup,
};

const image = {
  src: imageFile,
  alt: "my image",
};

export const Default = () => (
  <ListGroup>
    <ListGroupItem text="some text here!!">
      <img src={image.src} alt={image.alt} height={40} width={40} />
    </ListGroupItem>
    <ListGroupItem text="some text here!!">
      <img src={image.src} alt={image.alt} height={40} width={40} />
    </ListGroupItem>
    <ListGroupItem text="some text here!!">
      <img src={image.src} alt={image.alt} height={40} width={40} />
    </ListGroupItem>
  </ListGroup>
);

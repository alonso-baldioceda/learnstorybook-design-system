import React from "react";

// Components
import ListGroup from "./ListGroup";
import ListGroupItem from "./ListGroupItem";

// Assets
import imageFile from "./../../images/svg/bed-single.svg";

const image = {
  src: imageFile,
  alt: "my image",
};

export default {
  title: "ListGroup",
  component: ListGroup,
  args: [
    {
      text: "some text here!!",
      imgSrc: image.src,
      imgAlt: image.alt,
    },
  ],
};

export const ListWithItems = () => (
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

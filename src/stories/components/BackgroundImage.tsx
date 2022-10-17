import React, { FC } from "react";
import { getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import styled from "styled-components";
import BgImg from "gatsby-background-image";
import Mask from "./Mask";

// Styles
const StyledBgImg = styled(BgImg)`
  background-repeat: no-repeat;
  background-size: cover;
  height: 50vh;

  z-index: -1;

  @media (min-width: 992px) {
    /* TODO: analyze code improvement */
    height: calc(100vh);
    /* height: calc(100vh - 80px); */
  }
`;

// Types
interface BackgroundImageProps {
  bgColor?: string;
  image: any;
  mask?: string;
}

const BackgroundImage: FC<BackgroundImageProps> = ({
  // TODO: move color to variables
  bgColor = "bg-gun-powder",
  image,
  mask = "default",
}) => {
  const img = getImage(image);
  const bgImage = convertToBgImage(img);

  return (
    <>
      {/* <StyledBgImg
        {...bgImage}
        backgroundColor={bgColor}
        preserveStackingContext
        className="position-absolute w-100"
      /> */}
      <Mask bgColor={mask} />
    </>
  );
};

export default BackgroundImage;

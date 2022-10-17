import React, { FC } from "react";
import styled from "styled-components";
import { color } from "./shared/styles.js";

// Styles
const StyledMask = styled((props) => <div {...props} />)`
  background: ${({ bgColor }) =>
    bgColor !== "default" ? bgColor : color.background};
  z-index: -1;
`;

// Types
interface MaskProps {
  bgColor?: string;
}

const Mask: FC<MaskProps> = ({ bgColor = "default" }) => {
  return (
    <StyledMask
      bgColor={bgColor}
      className="position-absolute bottom-0 start-0 end-0 top-0 w-100 h-100"
    />
  );
};

export default Mask;

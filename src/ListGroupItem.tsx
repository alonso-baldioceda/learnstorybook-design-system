import React, { FC, ReactNode } from "react";
import styled from "styled-components";

// Styles
const StyledListGroupItem = styled.li`
  margin-bottom: 0.5rem;

  &:last-child {
    margin-bottom: 0 !important;
  }

  span {
    border-radius: 50%;
    height: 52px;
    margin-right: 0.75rem;

    svg {
      height: 44px;
      width: 44px;
    }
  }
`;

// Props
interface IProps {
  children: ReactNode;
  text: string;
}

const ListGroupItem: FC<IProps> = ({ children, text }) => {
  return (
    <StyledListGroupItem className="d-flex flex-row align-items-center justify-content-center">
      <span className="d-flex align-items-center justify-content-center">
        {children}
      </span>
      <p className="mb-0">{text}</p>
    </StyledListGroupItem>
  );
};

export default ListGroupItem;

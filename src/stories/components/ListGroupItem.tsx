import React, { FC, ReactNode } from "react";
import styled from "styled-components";

// Styles
const StyledListGroupItem = styled.li`
  &:last-child {
    margin-bottom: 0 !important;

    span {
      margin-bottom: 0 !important;
    }
  }
`;

const StyledListGroupItemIconWrapper = styled.span`
  border-radius: 50%;
  height: 52px;
  margin-right: 0.75rem;
`;

// Props
interface IProps {
  children?: ReactNode;
  text: string;
}

const ListGroupItem: FC<IProps> = ({ children = undefined, text }) => {
  return (
    <StyledListGroupItem className="d-flex flex-row align-items-center justify-content-center">
      {children && (
        <StyledListGroupItemIconWrapper className="d-flex align-items-center justify-content-center mb-2">
          {children}
        </StyledListGroupItemIconWrapper>
      )}
      <p className="mb-0">{text}</p>
    </StyledListGroupItem>
  );
};

export default ListGroupItem;

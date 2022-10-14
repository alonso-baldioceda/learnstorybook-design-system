import React, { FC, ReactNode } from "react";

interface ListGroupProps {
  children: ReactNode | ReactNode[];
}

const ListGroup: FC<ListGroupProps> = ({ children }) => (
  <ul className="mb-0 p-0 list-unstyled">{children}</ul>
);

export default ListGroup;

import React, { FC, ReactNode } from "react";

//Props
interface CardProps {
  border: number;
  children: ReactNode | ReactNode[];
  foreignBackgroundColor: string;
  title: string;
  upfrontBackgroundColor: string;
}

const Card: FC<CardProps> = ({
  border = 4,
  children,
  foreignBackgroundColor = "blue",
  title = "title here!!",
  upfrontBackgroundColor = "transparent",
}) => (
  <div
    className={`d-flex flex-column align-items-center border border-${border} border-${foreignBackgroundColor}`}
  >
    <h3
      className={`mb-0 py-4 text-capitalize w-100 text-center bg-${foreignBackgroundColor}`}
    >
      {title}
    </h3>
    <div className={`w-100 bg-${upfrontBackgroundColor}`}>{children}</div>
  </div>
);

export default Card;

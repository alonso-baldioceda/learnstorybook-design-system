import React, { FC, ReactNode } from "react";
import classnames from "classnames";

interface ButtonProps {
  appearance: string;
  children: ReactNode;
  disabled?: boolean;
  bold?: boolean;
  mb?: number;
  px?: number;
  py?: number;
  rounded?: boolean;
  type?: "button" | "submit";
}

const Button: FC<ButtonProps> = ({
  appearance = "primary",
  children,
  disabled = false,
  bold = true,
  mb = 0,
  px = 4,
  py = 2,
  rounded = true,
  type = "button",
}) => (
  <button
    className={classnames(
      `btn btn-${appearance} py-${py} px-${px} mb-${mb} text-capitalize`,
      { "rounded-pill": rounded },
      { "fw-bold": bold }
    )}
    type={type}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;

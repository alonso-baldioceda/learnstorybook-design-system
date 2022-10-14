import React, { FC, ReactNode } from "react";
import classnames from "classnames";

interface ButtonLinkProps {
  appearance: string;
  bold?: boolean;
  children?: ReactNode;
  disabled?: boolean;
  mb?: number;
  px?: number;
  py?: number;
  rounded?: boolean;
  targetBlank: boolean;
  url: string;
}

const ButtonLink: FC<ButtonLinkProps> = ({
  appearance = "primary",
  bold = true,
  children,
  disabled = false,
  mb = 0,
  px = 4,
  py = 2,
  rounded = true,
  targetBlank = false,
  url = "#",
}) => (
  <a
    aria-disabled={disabled}
    href={url}
    rel="noreferrer"
    role="button"
    target={targetBlank ? "_blank" : ""}
    className={classnames(
      `btn btn-${appearance} py-${py} px-${px} mb-${mb} text-capitalize ${
        disabled && "disabled"
      }`,
      { "rounded-pill": rounded },
      { "fw-bold": bold }
    )}
  >
    {children}
  </a>
);

export default ButtonLink;

import React, { ReactNode, FC } from "react";

interface LayoutProps {
  children: ReactNode | ReactNode[];
}

const Layout: FC<LayoutProps> = ({ children }) => <div>{children}</div>;

export default Layout;

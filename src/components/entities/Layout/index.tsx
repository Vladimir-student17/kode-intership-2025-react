import type { FC, ReactNode } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";
import Header from "@/components/entities/Header";
import ToggleTheme from "../ToggleTheme";
import { useLocation } from "react-router";

interface Props {
  className?: string;
  children?: ReactNode;
}

const Layout: FC<Props> = ({ className, children }) => {
  const location = useLocation();

  return (
    <div className={cn(className, styles.layout)}>
      <ToggleTheme />
      {location.pathname === "/" && <Header />}
      {children}
    </div>
  );
};

export default Layout;

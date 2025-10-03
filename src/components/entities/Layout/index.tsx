import type { FC, ReactNode } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";
import Header from "@/components/entities/Header";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";

interface Props {
  className?: string;
  children?: ReactNode;
}

const Layout: FC<Props> = ({ className, children }) => {
  const pagePath = useSelector((state: RootState) => state.page);
  return (
    <div className={cn(className, styles.layout)}>
      {pagePath === "/" && <Header />}
      {children}
    </div>
  );
};

export default Layout;

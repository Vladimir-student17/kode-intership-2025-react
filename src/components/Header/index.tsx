import cn from "classnames";
import type { FC } from "react";
import styles from "./styles.module.scss";

interface Props {
  className?: string;
}

const Header: FC<Props> = ({ className }) => {
  return (
    <header className={cn(className, styles.header)}>
      <span className={styles.header__title}>Поиск</span>
    </header>
  );
};

export default Header;

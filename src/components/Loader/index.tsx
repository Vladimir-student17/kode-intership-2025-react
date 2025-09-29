import type { FC } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";

interface Props {
  className?: string;
}

const Loader: FC<Props> = ({ className }) => {
  return <span className={cn(styles.loader, className)}></span>;
};
export default Loader;

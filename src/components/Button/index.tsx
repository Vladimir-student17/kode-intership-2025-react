import type { FC, ReactNode } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";

interface Props {
  className?: string;
  icon?: ReactNode;
  text?: string;
  onclick: () => void;
  disabled?: boolean;
}

const Button: FC<Props> = ({ className, icon, text, disabled }) => {
  return (
    <button
      className={cn(className, styles.button)}
      onClick={()=>onclick}
      disabled={disabled}
    >
      {icon ? icon : text}
    </button>
  );
};
export default Button;

import type { FC, ReactNode } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";

interface Props {
  className?: string;
  icon?: ReactNode;
  text?: string;
  onClick: React.Dispatch<React.SetStateAction<string>>;
  disabled?: boolean;
}

const Button: FC<Props> = ({ className, icon, text, disabled, onClick }) => {
  return (
    <button
      className={cn(className, styles.button)}
      onClick={() => onClick}
      disabled={disabled}
    >
      {icon ? icon : text}
    </button>
  );
};
export default Button;

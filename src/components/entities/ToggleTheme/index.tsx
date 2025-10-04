import { useEffect, type FC } from "react";
import cn from "classnames";
import styles from "./style.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@/store/slices/toggleTheme";
import type { RootState } from "@/store/store";
import Icon from "@/components/UI/Icon";

interface Props {
  className?: string;
}

const ToggleTheme: FC<Props> = ({ className }) => {
  const dispatch = useDispatch();
  const isDark = useSelector((state: RootState) => state.isDark);

  useEffect(() => {
    localStorage.setItem("isDark", `${isDark}`);
    document.body.style.transition = "background-color 0.2s ease-in";
    document.body.style.backgroundColor = isDark ? "#55555c" : "#ffffff";
  }, [isDark]);

  function handleTheme() {
    dispatch(toggleTheme());
  }
  return (
    <button
      className={cn(className, styles.toggle, {
        [styles.toogle__dark]: isDark,
      })}
      onClick={handleTheme}
    >
      {isDark && <Icon iconId="icon-light" color="#FFEA99" />}
      {!isDark && <Icon iconId="icon-light" />}
    </button>
  );
};

export default ToggleTheme;

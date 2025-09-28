import cn from "classnames";
import { type FC } from "react";
import styles from "./styles.module.scss";
import TopAppBar from "@/components/ToppAppBar";

interface Props {
  className?: string;
}

const Home: FC<Props> = ({ className }) => {
  return (
    <div className={cn(className, styles.home)}>
        <TopAppBar />
    </div>
  );
};

export default Home;

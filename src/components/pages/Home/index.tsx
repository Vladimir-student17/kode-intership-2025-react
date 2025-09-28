import cn from "classnames";
import { Suspense, type FC } from "react";
import styles from "./styles.module.scss";
import TopAppBar from "@/components/ToppAppBar";

interface Props {
  className?: string;
}

const Home: FC<Props> = ({ className }) => {
  return (
    <div className={cn(className, styles.home)}>
      <TopAppBar />
      <Suspense fallback={<span>Loading list...</span>}>
        <ul>
          <li>List 0ne</li>
          <li>List Two</li>
        </ul>
      </Suspense>
    </div>
  );
};

export default Home;

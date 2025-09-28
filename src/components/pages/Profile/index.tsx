import type { FC } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";
import { useLocation } from "react-router-dom";

interface Props {
  className?: string;
}

const Profile: FC<Props> = ({ className }) => {
  const location = useLocation();
  console.log(location.pathname);
  return <p className={cn(className, styles.home)}> Profile</p>;
};

export default Profile;

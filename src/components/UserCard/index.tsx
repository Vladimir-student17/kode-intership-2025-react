import type { User } from "@/types/UserData";
import type { FC } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

interface Props {
  className?: string;
  data: User;
}

const UserCard: FC<Props> = ({ className, data }) => {
  return (
    <Link to={`/profile/${data.id}`}>
      <div className={cn(className, styles.userCard)}></div>
    </Link>
  );
};

export default UserCard;

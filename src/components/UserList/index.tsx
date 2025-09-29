import type { UsersList } from "@/types/UserData";
import type { FC } from "react";
import styles from "./styles.module.scss";
import cn from "classnames";
import EmptyList from "../EmptyList";
import UserCard from "../UserCard";

interface Props {
  className?: string;
  data: UsersList | undefined;
}

const UserList: FC<Props> = ({ className, data }) => {
  if (data) {
    if (data.length) {
      return (
        <ul className={cn(className, styles.userList)}>
          {data.map((user) => {
            return (
              <li className={styles.userList__item} key={user.id}>
                <UserCard data={user} />
              </li>
            );
          })}
        </ul>
      );
    } else {
      return <EmptyList />;
    }
  } else {
    return <span>isError</span>;
  }
};

export default UserList;

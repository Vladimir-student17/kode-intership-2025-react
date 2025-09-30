import type { FC } from "react";
import UserCard from "../UserCard";
import type { UsersList } from "@/types/UserData";
import cn from "classnames";
import styles from "./styles.module.scss";

interface Props {
  className?: string;
  data: UsersList;
  needYear?: boolean;
  needBirthday?: boolean;
}

const UserListElement: FC<Props> = ({
  data,
  className,
  needYear = false,
  needBirthday = false,
}) => {
  const nowYear = new Date().getFullYear();
  return (
    <>
      {needYear && (
        <div className={styles.userList__lineYear}>
          <span>{nowYear + 1}</span>
        </div>
      )}
      <ul className={cn(className, styles.userList)}>
        {data.map((user) => {
          return (
            <li className={styles.userList__item} key={user.id}>
              <UserCard data={user} needBirthday={needBirthday} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UserListElement;

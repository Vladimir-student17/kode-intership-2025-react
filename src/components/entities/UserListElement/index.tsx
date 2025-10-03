import { lazy, Suspense, type FC } from "react";
import type { UsersList } from "@/types/UserData";
import cn from "classnames";
import styles from "./styles.module.scss"
import SkeletonCard from "../../UI/SkeletonCard";

interface Props {
  className?: string;
  data: UsersList;
  needYear?: boolean;
  needBirthday?: boolean;
}

const LazyUserCard = lazy(() => import("../UserCard"));

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
              <Suspense fallback={<SkeletonCard />}>
                <LazyUserCard data={user} needBirthday={needBirthday} />
              </Suspense>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UserListElement;

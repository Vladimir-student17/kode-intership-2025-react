import type { User } from "@/types/UserData";
import type { FC } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import nameMonth from "@/configs/nameMonth";
import ImageElement from "@/components/UI/ImageElement";

interface Props {
  className?: string;
  data: User;
  needBirthday?: boolean;
}

const UserCard: FC<Props> = ({ className, data, needBirthday = false }) => {
  const dayBirthday = new Date(data.birthday).getDate();
  const monthBirthday = nameMonth[Number(new Date(data.birthday).getMonth())].slice(0,3);
  return (
    <Link to={`/details/:${data.id}`}>
      <div className={cn(className, styles.userCard)}>
        <ImageElement url={data.avatarUrl} className={styles.userCard__img} />
        <div className={styles.userCard__info}>
          <p className={styles.userCard__fullName}>
            {data.firstName} {data.lastName}
            <span className={styles.userCard__tag}>{data.userTag}</span>
          </p>
          <p className={styles.userCard__departament}>
            {data.department.slice(0, 1).toUpperCase() +
              data.department.slice(1)}
          </p>
        </div>
        {needBirthday && (
          <span className={styles.userCard__birthday}>
            {dayBirthday} {monthBirthday}
          </span>
        )}
      </div>
    </Link>
  );
};

export default UserCard;

import type { User } from "@/types/UserData";
import type { FC } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import ImageElement from "../ImageElement";

interface Props {
  className?: string;
  data: User;
}

const UserCard: FC<Props> = ({ className, data }) => {
  return (
    <Link to={`/profile/${data.id}`}>
      <div className={cn(className, styles.userCard)}>
        <ImageElement url={data.avatarUrl}  className={styles.userCard__img}/>        
        <div className={styles.userCard__info}>
          <p className={styles.userCard__fullName}>
            {data.firstName} {data.lastName}
            <span className={styles.userCard__tag}>{data.userTag}</span>
          </p>
          <p className={styles.userCard__departament}>{data.department.slice(0,1).toUpperCase()+data.department.slice(1)}</p>
        </div>
      </div>
    </Link>
  );
};

export default UserCard;

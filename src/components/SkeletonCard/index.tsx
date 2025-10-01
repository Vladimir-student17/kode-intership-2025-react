import type { FC } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";

interface Props {
  className?: string;
}

const SkeletonCard: FC<Props> = ({ className }) => {
  return (
    <div>
      <div className={cn(className, styles.userCard)}>
        <div className={styles.userCard__img} />
        <div className={styles.userCard__info}>
          <p className={styles.userCard__fullName}></p>
          <p className={styles.userCard__departament}></p>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;

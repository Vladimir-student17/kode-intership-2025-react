import type { FC } from "react";
import styles from "./styles.module.scss";
import cn from "classnames";
import img from "../../../../public/images/flying-saucer.png";
import imgx2 from "../../../../public/images/flying-saucer@x2.png";

interface Props {
  className?: string;
}

const EmptyList: FC<Props> = ({ className }) => {
  return (
    <div className={cn(className, styles.emptyList)}>
      <img
        src={img}
        srcSet={imgx2}
        width={56}
        height={56}
        alt={"Изображение лупы"}
        className={styles.emptyList__img}
      />
      <span className={styles.emptyList__text}>Мы никого не нашли</span>
      <span className={styles.emptyList__descrip}>
        Попробуй скорректировать запрос
      </span>
    </div>
  );
};

export default EmptyList;

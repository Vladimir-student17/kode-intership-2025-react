import type { FC } from "react";
import styles from "./styles.module.scss";
import cn from "classnames";
import img from "../../../public/images/flying-saucer.png";
import imgx2 from "../../../public/images/flying-saucer@x2.png";
import Button from "../Button";
import type { FallbackProps } from "react-error-boundary";

interface Props {
  className?: string;
  fallProps?: FallbackProps;
  refetch?: () => void;
}

const ErrorMessage: FC<Props> = ({ className, fallProps, refetch }) => {
  return (
    <div className={cn(className, styles.emptyList)}>
      <img
        src={img}
        srcSet={imgx2}
        width={56}
        height={56}
        alt={"Изображение летающе тарелки"}
        className={styles.emptyList__img}
      />
      <span className={styles.emptyList__text}>
        Какой-то сверхразум все сломал
      </span>
      <span className={styles.emptyList__descrip}>
        Постараемся быстро починить
      </span>
      {refetch && <Button text="Попробовать снова" onClick={() => refetch} />}
      {fallProps && (
        <Button text="Попробовать снова" onClick={() => fallProps} />
      )}
    </div>
  );
};

export default ErrorMessage;

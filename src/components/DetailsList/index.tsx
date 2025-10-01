import type { User } from "@/types/UserData";
import type { FC } from "react";
import styles from "./styles.module.scss";
import cn from "classnames";
import Icon from "../Icon";
import getDateBirthday from "@/configs/getDateBirthday";
import ageCalculation from "@/configs/ageCalculation";
import godOrLet from "@/configs/godOrLet";
import formatPhone from "@/configs/formatPhone";

interface Props {
  className?: string;
  userData: User;
}

const DetailsList: FC<Props> = ({ className, userData }) => {
  return (
    <ul className={cn(styles.listInfo, className)}>
      <li className={styles.rowInfo}>
        <Icon iconId="icon-star" />
        <span className={styles.text}>
          {getDateBirthday(userData.birthday)}
        </span>
        <span className={styles.fullYear}>
          {ageCalculation(userData.birthday)}{" "}
          {godOrLet(ageCalculation(userData.birthday))}
        </span>
      </li>
      <li className={styles.rowInfo}>
        <Icon iconId="icon-phone" />
        <a type="phone" href={`tel:${userData.phone}`} className={styles.text}>
          {formatPhone(userData.phone)}
        </a>
      </li>
    </ul>
  );
};
export default DetailsList;

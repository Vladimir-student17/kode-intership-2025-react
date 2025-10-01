import type { User } from "@/types/UserData";
import type { FC } from "react";
import styles from "./styles.module.scss";
import cn from "classnames";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import Icon from "../Icon";
import ImageElement from "../ImageElement";
import firstUpperCase from "@/configs/firstUpperCase";

interface Props {
  className?: string;
  userData: User;
}

const DetailsHeader: FC<Props> = ({ className, userData }) => {
  const navigate = useNavigate();
  return (
    <div className={cn(styles.header, className)}>
      <Button
        className={styles.btnBack}
        onClick={() => navigate(-1)}
        icon={<Icon iconId="icon-back-arrow" />}
      />
      <div className={styles.card}>
        <ImageElement size={104} url={userData.avatarUrl} />
        <p className={styles.fullName}>
          {userData.firstName} {userData.lastName}
          <span>{userData.userTag}</span>
        </p>
        <span className={styles.departament}>
          {firstUpperCase(userData.department)}
        </span>
      </div>
    </div>
  );
};

export default DetailsHeader;

import type { User } from "@/types/UserData";
import type { FC } from "react";
import styles from "./styles.module.scss";
import cn from "classnames";
import { useNavigate } from "react-router-dom";

import firstUpperCase from "@/configs/firstUpperCase";
import Button from "@/components/UI/Button";
import Icon from "@/components/UI/Icon";
import ImageElement from "@/components/UI/ImageElement";

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

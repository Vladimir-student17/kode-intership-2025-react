import styles from "./style.module.scss";
import cn from "classnames";
import { useEffect, useState, type FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGetUserByID from "@/hooks/useGetUserByID";
import useSetPathPage from "@/hooks/useSetPathPage";
import { useGetUsersQuery } from "@/store/getUsers";
import type { User } from "@/types/UserData";
import Icon from "@/components/Icon";
import ImageElement from "@/components/ImageElement";
import Button from "@/components/Button";
import formatPhone from "@/configs/formatPhone";
import getDateBirthday from "@/configs/getDateBirthday";
import ageCalculation from "@/configs/ageCalculation";
import godOrLet from "@/configs/godOrLet";

interface Props {
  className?: string;
}

const UserDetails: FC<Props> = ({ className }) => {
  useSetPathPage();
  const navigate = useNavigate();
  const [userData, setUserData] = useState<User>();
  const { userID } = useParams();
  const { data } = useGetUsersQuery("all");

  useEffect(() => {
    if (userID && data)
      userID && setUserData(useGetUserByID(userID.slice(1), data));
  }, [data, userID]);
  if (userData) {
    return (
      <div className={cn(className, styles.details)}>
        <div className={styles.details__header}>
          <Button
            className={styles.details__btnBack}
            onClick={() => navigate(-1)}
            icon={<Icon iconId="icon-back-arrow" />}
          />
          <ImageElement size={104} url={userData.avatarUrl} />
        </div>
        <div className={styles.details__rowInfo}>
          <Icon iconId="icon-star" />
          <span className={styles.details__birthday}>
            {getDateBirthday(userData.birthday)}
          </span>
          <span className={styles.details__fullYear}>
            {ageCalculation(userData.birthday)}{" "}
            {godOrLet(ageCalculation(userData.birthday))}
          </span>
        </div>
        <div className={styles.details__rowInfo}>
          <Icon iconId="icon-phone" />
          <a
            type="phone"
            href={`tel:${userData.phone}`}
            className={styles.details__phone}
          >
            {formatPhone(userData.phone)}
          </a>
        </div>
      </div>
    );
  }
};

export default UserDetails;

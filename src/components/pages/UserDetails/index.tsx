import cn from "classnames";
import { useEffect, useState, type FC } from "react";
import { useParams } from "react-router-dom";
import useGetUserByID from "@/hooks/useGetUserByID";
import useSetPathPage from "@/hooks/useSetPathPage";
import { useGetUsersQuery } from "@/store/getUsers";
import type { User } from "@/types/UserData";
import DetailsHeader from "@/components/DetailsHeader";
import DetailsList from "@/components/DetailsList";
import styles from "./styles.module.scss"

interface Props {
  className?: string;
}

const UserDetails: FC<Props> = ({ className }) => {
  useSetPathPage();
  const [userData, setUserData] = useState<User>();
  const { userID } = useParams();
  const { data } = useGetUsersQuery("all");

  useEffect(() => {
    if (userID && data)
      userID && setUserData(useGetUserByID(userID.slice(1), data));
  }, [data, userID]);
  if (userData) {
    return (
      <div className={cn(className, styles.userDetails)}>
        <DetailsHeader userData={userData} />
        <div className="container">
          <DetailsList userData={userData} />
        </div>
      </div>
    );
  }
};

export default UserDetails;

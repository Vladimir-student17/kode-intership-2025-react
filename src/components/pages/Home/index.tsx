import cn from "classnames";
import { useState, type FC } from "react";
import styles from "./styles.module.scss";
import TopAppBar from "@/components/ToppAppBar";
import type { UsersList } from "@/types/UserData";
import UserList from "@/components/UserList";

interface Props {
  className?: string;
}

const Home: FC<Props> = ({ className }) => {
  const [userList, setUserList] = useState<UsersList | undefined>(undefined);
  
  return (
    <div className={cn(className, styles.home)}>
      <TopAppBar setData={setUserList} />
      <UserList data={userList} />
    </div>
  );
};

export default Home;

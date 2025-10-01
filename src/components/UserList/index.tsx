import type { UsersList } from "@/types/UserData";
import type { FC } from "react";
import EmptyList from "../EmptyList";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import SortBirthday from "@/configs/sortUsersForDate";
import type { SortArrayBirthday } from "@/types/SortArrayBirthday";
import UserListElement from "../UserListElement";

interface Props {
  className?: string;
  data: UsersList | undefined;
}

const UserList: FC<Props> = ({ data }) => {
  const isSortBirthday = useSelector((state: RootState) => state.sortType);

  if (data) {
    if (data.length) {
      if (isSortBirthday === "birthday") {
        const objData: SortArrayBirthday = SortBirthday(data);
        return (
          <>
            {objData.thisYear.length !== 0 && (
              <UserListElement data={objData.thisYear} needBirthday />
            )}
            {objData.nextYear.length !== 0 && (
              <UserListElement data={objData.nextYear} needYear needBirthday />
            )}
          </>
        );
      }
      return <UserListElement data={data} />;
    } else {
      return <EmptyList />;
    }
  } 
};

export default UserList;

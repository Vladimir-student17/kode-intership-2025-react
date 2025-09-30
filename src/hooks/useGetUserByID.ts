import { useGetUsersQuery } from "@/store/getUsers";
import type { User } from "@/types/UserData";

function useGetUserByID(id: string): User | undefined {
  const { data, isSuccess } = useGetUsersQuery("all");
  if (isSuccess) {
    return data.filter((item) => item.id === id)[0];
  }
  return undefined;
}

export default useGetUserByID;

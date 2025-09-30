
import type { User } from "@/types/UserData";

function useGetUserByID(id: string, data:User[]): User | undefined {
  if (data) {
    return data.filter((item) => item.id === id)[0];
  }
  return undefined;
}

export default useGetUserByID;

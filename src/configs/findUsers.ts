import type { UsersList } from "@/types/UserData";

function findUser(data: UsersList, phrase: string ): UsersList {
  return data
    .filter(
      (item) =>
        item.firstName.toLocaleLowerCase().includes(phrase.toLowerCase()) ||
        item.lastName.toLocaleLowerCase().includes(phrase.toLowerCase())
    )
    .sort((a, b) => a.firstName.localeCompare(b.firstName));
}
export default findUser;
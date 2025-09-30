import type { SortArrayBirthday } from "@/types/SortArrayBirthday";
import type { UsersList } from "@/types/UserData";
import milisecondsBeginningYear from "./milisecondsBeginningYear";

function SortBirthday(arr: UsersList): SortArrayBirthday {
  let owenObj: SortArrayBirthday;
  const thisYear: UsersList = [];
  const nextYear: UsersList = [];

  arr
    .sort((a, b) => {
      return (
        milisecondsBeginningYear(a.birthday) -
        milisecondsBeginningYear(b.birthday)
      );
    })
    .forEach((item) => {
      const birthday = new Date(item.birthday);
      const now = new Date();
      if (milisecondsBeginningYear(now) >= milisecondsBeginningYear(birthday)) {
        nextYear.push(item);
      } else {
        thisYear.push(item);
      }
    });
  owenObj = { thisYear, nextYear };

  return owenObj;
}

export default SortBirthday;

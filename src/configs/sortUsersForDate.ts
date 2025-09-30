import type { SortArrayBirthday } from "@/types/SortArrayBirthday";
import type { UsersList } from "@/types/UserData";

function startMSYear(date: Date | string): number {
  const currentDate = new Date(date);
  const currentYear = currentDate.getFullYear();
  const startCurrentYear = new Date(`${currentYear}-01-01`);
  return +currentDate - +startCurrentYear;
}

function SortBirthday(arr: UsersList):SortArrayBirthday {
  let owenObj: SortArrayBirthday;
  const thisYear: UsersList = [];
  const nextYear: UsersList = [];

  arr
    .sort((a, b) => {
      return startMSYear(a.birthday) - startMSYear(b.birthday);
    })
    .forEach((item) => {
      const birthday = new Date(item.birthday);
      const now = new Date();
      if (startMSYear(now) >= startMSYear(birthday)) {
        nextYear.push(item);
      } else {
        thisYear.push(item);
      }
    });
  owenObj = { thisYear, nextYear };

  return owenObj;
}

export default SortBirthday;

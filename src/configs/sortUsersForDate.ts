import type { UsersList } from "@/types/UserData";

function startMSYear(date: Date | string): number {
  const currentDate = new Date(date);
  const currentYear = currentDate.getFullYear();
  const startCurrentYear = new Date(`${currentYear}-01-01`);
  return +currentDate - +startCurrentYear;
}

export function SortBirthday(arr: UsersList) {
  const owenObj: Record<string, UsersList> = {};
  const thisYear: UsersList = [];
  const nextYear: UsersList = [];

  arr
    .sort((a, b) => {
      return startMSYear(a.birthday) - startMSYear(b.birthday);
    })
    .forEach((item) => {
      const birthday = new Date(item.birthday);
      const now = new Date();
      if (startMSYear(now) >= startMSYear(birthday) + 24 * 3600 * 1000) {
        nextYear.push(item);
      } else {
        thisYear.push(item);
      }
    });

  owenObj.ThisYear = thisYear;
  owenObj.NextYear = nextYear;

  return owenObj;
}


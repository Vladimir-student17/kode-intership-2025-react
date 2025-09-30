import nameMonth from "./nameMonth";

function getDateBirthday(date: string): string {
  const day = new Date(date).getDate();
  const month = nameMonth[new Date(date).getMonth()];
  const year = new Date(date).getFullYear();

  return `${day} ${month} ${year}`;
}

export default getDateBirthday;
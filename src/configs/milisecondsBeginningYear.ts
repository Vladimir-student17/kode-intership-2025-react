export default function milisecondsBeginningYear(date: Date | string): number {
  const currentDate = new Date(date);
  const currentYear = currentDate.getFullYear();
  const startCurrentYear = new Date(`${currentYear}-01-01`);
  return +currentDate - +startCurrentYear;
}
import milisecondsBeginningYear from "./milisecondsBeginningYear";

function ageCalculation(date: string): number {
  const year = new Date(date).getFullYear();
  const getFullYear =
    milisecondsBeginningYear(date) >= milisecondsBeginningYear(new Date())
      ? new Date().getFullYear() - year + 1
      : new Date().getFullYear() - year;

  return getFullYear;
}

export default ageCalculation;
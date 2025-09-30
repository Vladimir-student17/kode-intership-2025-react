function godOrLet(a: number): string {
  let str = "year";
  if (a === 1 || a % 10 === 1) str = "год";
  if ((4 < a && a <= 20) || (4 < a % 10 && a % 10 <= 9) || a % 10 === 0)
    str = "лет";
  if ((1 < a && a <= 4) || (1 < a % 10 && a % 10 <= 4)) str = "года";

  return str;
}

export default godOrLet;

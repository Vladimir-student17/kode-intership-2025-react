function formatPhone(tel: string): string {
  return `${tel.slice(0, 2)} (${tel.slice(2, 5)}) ${tel.slice(
    5,
    8
  )} ${tel.slice(8, 10)} ${tel.slice(10)}`;
}

export default formatPhone;

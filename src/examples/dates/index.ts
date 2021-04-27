export const onSameDay = (first: Date | undefined, second: Date | undefined) =>
  first &&
  second &&
  first.getFullYear() === second.getFullYear() &&
  first.getMonth() === second.getMonth() &&
  first.getDate() === second.getDate();

export const convertToDoubles = (value: number) => {
  return !value ? '00' : value > 9 ? value : `0${value}`;
};

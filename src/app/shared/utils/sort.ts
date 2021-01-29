type StringOrNumber = string | number;

export function SortAscending(a: StringOrNumber, b: StringOrNumber): number {
  return a > b ? 1 : -1;
}

export function SortDescending(a: StringOrNumber, b: StringOrNumber): number {
  return a > b ? -1 : 1;
}

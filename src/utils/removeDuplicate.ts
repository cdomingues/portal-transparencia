export function removeDuplicates(arr: Array<number | string>) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

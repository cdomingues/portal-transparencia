export default function getUniqueListBy(arr: Array<any>, key: string) {
  return [...new Map(arr.map((item) => [item?.[key], item])).values()];
}

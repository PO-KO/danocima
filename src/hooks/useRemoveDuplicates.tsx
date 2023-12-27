const useRemoveDuplicates = (
  data1: Object[],
  data2: Object[]
): Object[] | undefined => {
  if (!data1 || !data2) return;

  let all = data1.concat(data2);
  let jsonObject = all.map((i) => JSON.stringify(i));
  let uniqueSet = new Set(jsonObject);

  return Array.from(uniqueSet).map((i) => JSON.parse(i));
};

export default useRemoveDuplicates;

import { DataGenresAPI } from "../types/types";

const useRemoveDuplicates = (
  data1: DataGenresAPI[],
  data2: DataGenresAPI[]
): DataGenresAPI[] | undefined => {
  if (!data1 || !data2) return;

  let all = data1.concat(data2);
  let jsonObject = all.map((i) => JSON.stringify(i));
  let uniqueSet = new Set(jsonObject);

  const removeDup = Array.from(uniqueSet).map((i) => JSON.parse(i));

  removeDup.sort((a, b) => {
    const na = a.name.toLowerCase();
    const nb = b.name.toLowerCase();

    if (na < nb) {
      return -1;
    }
    if (na > nb) {
      return 1;
    }
    return 0;
  });

  return removeDup;
};

export default useRemoveDuplicates;

type Props = {
  startYear: number;
  endYear?: number;
};

const useGenerateYears = (startYear: number, endYear?: number) => {
  const endDate = endYear || new Date().getFullYear();
  const years = [];

  for (let i = startYear; i <= endDate; i++) {
    years.push({ label: startYear, value: startYear });
    startYear++;
  }

  return years.reverse();
};

export default useGenerateYears;

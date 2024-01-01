import MySelect from "../../components/mySelect/MySelect";
import useGenresShowsData from "../../services/api/useGenresShowsData";
import useGenresMoviesData from "../../services/api/useGenresMoviesData";
import useRemoveDuplicates from "../../hooks/useRemoveDuplicates";
import { DataGenresAPI } from "../../types/types";
import useGenerateYears from "../../hooks/useGenerateYears";
import useGetLanguages from "../../services/api/useGetLanguages";

type Props = {
  setFetch: React.Dispatch<React.SetStateAction<boolean>>;
};

const FilteringBox = ({ setFetch }: Props) => {
  const {
    data: showsGenres,
    isLoading: isShowsGenresLoading,
    isError: isShowsGenresError,
  } = useGenresShowsData();

  const {
    data: moviesGenres,
    isLoading: isMoviesGenresLoading,
    isError: isMoviesGenresError,
  } = useGenresMoviesData();

  const { data: languages } = useGetLanguages();

  const genres: DataGenresAPI[] | undefined = useRemoveDuplicates(
    showsGenres?.data.genres,
    moviesGenres?.data.genres
  );

  const years = useGenerateYears(1900);

  if (isShowsGenresLoading && isMoviesGenresLoading) <p>Loading...</p>;
  if (isShowsGenresError && isMoviesGenresError) <p>Error</p>;

  const transfromadGenres = genres?.map(({ name, id }) => {
    return {
      label: name,
      value: name.split(" ").join("-").toLowerCase(),
      id: id,
    };
  });

  const rates = [
    { label: "+1", value: "1" },
    { label: "+2", value: "2" },
    { label: "+3", value: "3" },
    { label: "+4", value: "5" },
    { label: "+5", value: "6" },
    { label: "+7", value: "7" },
    { label: "+8", value: "8" },
    { label: "+9", value: "9" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFetch(true);
  };

  return (
    <section className="filter w-11/12 lg:w-[80%] xl:w-4/6 mx-auto bg-[#242529] p-5 rounded-md">
      <form className="w-full" onSubmit={handleSubmit}>
        <section className="filtering-queries grid gap-2 mt-3 grid-cols-1 min-[404px]:grid-cols-2 md:grid-cols-5">
          <MySelect options={transfromadGenres!} type="genres" />
          <MySelect options={rates} type="rating" />
          <MySelect options={languages} type="language" />
          <MySelect options={years} type="release date" />
          <button
            type="submit"
            className="bg-secondary rounded-md px-4 font-bold max-[404px]:col-span-1 max-md:col-span-2 max-md:py-2"
          >
            Filter
          </button>
        </section>
      </form>
    </section>
  );
};

export default FilteringBox;

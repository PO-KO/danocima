import MySelect from "../../components/mySelect/MySelect";
import useGenresShowsData from "../../services/api/useGenresShowsData";
import useGenresMoviesData from "../../services/api/useGenresMoviesData";
import useRemoveDuplicates from "../../hooks/useRemoveDuplicates";
import { DataGenresAPI } from "../../types/types";
import { useSearchParams } from "react-router-dom";
import useGenerateYears from "../../hooks/useGenerateYears";

type Props = {
  setFetch: React.Dispatch<React.SetStateAction<boolean>>;
};

const FilteringBox = ({ setFetch }: Props) => {
  //   const [genre, setGenre] = useState<Dispatch<SetStateAction<null>>>(null!);
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

  const mediaTypes = [
    { label: "Movies", value: "movies" },
    { label: "TV Shows", value: "shows" },
  ];

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

  const handleSubmit = (e: React.FormEvent<HTMLFormControlsCollection>) => {
    e.preventDefault();
    setFetch(true);
  };

  return (
    <section className="filter w-4/6 mx-auto bg-[#242529] p-5 rounded-md">
      <form className="w-full" onSubmit={handleSubmit}>
        {/* <section className="search-box flex gap-2">
          <input
            type="text"
            id="search"
            className="flex-1 gap-4 py-3 px-2 rounded-md bg-primary-dark"
            placeholder="Search..."
          />
          <button
            type="submit"
            className="bg-secondary rounded-md px-4 font-bold"
          >
            Search
          </button>
        </section> */}
        <section className="filtering-queries flex gap-2 mt-3">
          <MySelect options={transfromadGenres} type="genres" />
          <MySelect options={mediaTypes} type="type" />
          <MySelect options={rates} type="rating" />
          <MySelect options={years} type="release date" />
          <button
            type="submit"
            className="bg-secondary rounded-md px-4 font-bold"
          >
            Search
          </button>
        </section>
      </form>
    </section>
  );
};

export default FilteringBox;

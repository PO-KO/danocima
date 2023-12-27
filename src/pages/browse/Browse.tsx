import { useState } from "react";
import MySelect from "../../components/mySelect/MySelect";
import IntrinsicAttributes from "react-select";
import useGenresShowsData from "../../services/api/useGenresShowsData";
import useGenresMoviesData from "../../services/api/useGenresMoviesData";
import useRemoveDuplicates from "../../hooks/useRemoveDuplicates";

type Genres = {
  name: string;
  id: number;
};

const Browse = () => {
  const [genre, setGenre] = useState<IntrinsicAttributes | null>(null);
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

  const genres = useRemoveDuplicates(
    showsGenres?.data.genres,
    moviesGenres?.data.genres
  );

  const transfromadGenres = genres?.map(({ name, id }) => {
    return {
      label: name,
      value: name,
      id: id,
    };
  });

  return (
    <div className="browse mt-16 pt-20">
      <section className="filter w-4/6 mx-auto bg-[#242529] p-5 rounded-md">
        <form className="w-full">
          <section className="search-box flex gap-2">
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
          </section>
          <section className="filtering-queries flex gap-2 mt-3">
            <MySelect
              setGenre={setGenre}
              options={transfromadGenres}
              type="genres"
            />
            <MySelect setGenre={setGenre} />
            <MySelect setGenre={setGenre} />
            <MySelect setGenre={setGenre} />
          </section>
        </form>
      </section>
      <section className="result"></section>
    </div>
  );
};

export default Browse;

import { useParams, useSearchParams } from "react-router-dom";
import useFilterData from "../../services/api/useFilterData";
import Item from "../item/Item";
import useGenresMoviesData from "../../services/api/useGenresMoviesData";
import { useEffect } from "react";

type Props = {
  fetch: boolean;
  setFetch: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchResult = ({ fetch, setFetch }: Props) => {
  const [searchParam] = useSearchParams();
  const { type } = useParams();
  console.log(type);
  const {
    data: genres,
    isLoading: genresLoading,
    isError: genresError,
  } = useGenresMoviesData();

  console.log(searchParam.get("rating"));

  const { data, isLoading, isError, refetch } = useFilterData(
    type,
    1,
    Number(searchParam.get("rating")),
    searchParam.get("date"),
    searchParam.get("genres")
  );
  useEffect(() => {
    if (fetch) {
      refetch();
      setFetch(false);
    }
  }, [
    type,
    searchParam.get("rating"),
    searchParam.get("date"),
    searchParam.get("genres"),
    fetch,
  ]);

  if (isLoading || genresLoading) {
    return <p>Loading...</p>;
  }
  if (isError || genresError) {
    return <p>Something went wrong!</p>;
  }

  return (
    <section className="py-6 px-12 mt-10 overflow-hidden relative bg-[#242529] rounded-sm">
      <section className="wrapper grid grid-cols-6 gap-2">
        {data?.data?.results.map((item) => {
          return (
            <Item
              key={item.id}
              {...item}
              genres={genres?.data?.genres}
              type={type}
            />
          );
        })}
      </section>
    </section>
  );
};

export default SearchResult;

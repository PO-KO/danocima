import { useParams, useSearchParams } from "react-router-dom";
import useFilterData from "../../services/api/useFilterData";
import Item from "../item/Item";
import useGenresMoviesData from "../../services/api/useGenresMoviesData";
import { Fragment, useEffect } from "react";
import { ItemType } from "../../types/types";
import useScrolledBottom from "../../hooks/useScrolledBottom";

type Props = {
  fetch: boolean;
  setFetch: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchResult = ({ fetch, setFetch }: Props) => {
  const [searchParam] = useSearchParams();
  const { type } = useParams();
  const {
    data: genres,
    isLoading: genresLoading,
    isError: genresError,
  } = useGenresMoviesData();

  const { data, isLoading, isError, refetch, hasNextPage, fetchNextPage } =
    useFilterData(
      type!,
      Number(searchParam.get("rating")),
      searchParam.get("date")!,
      searchParam.get("genres")!,
      searchParam.get("language")!
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
    searchParam.get("language"),
    fetch,
  ]);
  const isBottom = useScrolledBottom();

  useEffect(() => {
    if (isBottom && hasNextPage) {
      fetchNextPage();
    }
  }, [isBottom]);

  if (isLoading || genresLoading) {
    return <p>Loading...</p>;
  }
  if (isError || genresError) {
    return <p>Something went wrong!</p>;
  }

  return (
    <section className="py-6 px-12 mt-10 bg-[#242529] rounded-sm overflow-hidden">
      <h1 className="result-heading w-full text-center text-xl mb-6 before:bg-secondary before:flex-1 before:h-[2px] before:rounded-full after:bg-secondary after:flex-1 after:h-[2px] after:rounded-full flex items-center">
        <span className="px-3 uppercase tracking-wider">
          {type === "tv" ? "TV Shows" : "Movies"}
        </span>
      </h1>
      <section className="wrapper grid grid-cols-responsive grid-rows-4 gap-x-1 gap-y-2 w-full">
        {data?.pages?.map((group, i) => {
          return (
            <Fragment key={i}>
              {group.data.results.map((item: ItemType) => (
                <div
                  key={item.id}
                  className="flex flex-col bg-primary-dark rounded overflow-hidden drop-shadow-2xl"
                >
                  <Item {...item} genres={genres?.data?.genres} type={type!} />
                  <h1 className="lg:hidden my-2 text-nowrap px-3 text-ellipsis overflow-hidden">
                    {item.name || item.title}
                  </h1>
                </div>
              ))}
            </Fragment>
          );
        })}
      </section>
    </section>
  );
};

export default SearchResult;

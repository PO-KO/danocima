import { useParams, useSearchParams } from "react-router-dom";
import useFilterData from "../../services/api/useFilterData";
import Item from "../item/Item";
import useGenresMoviesData from "../../services/api/useGenresMoviesData";
import { Fragment, useEffect } from "react";
import { ItemType } from "../../types/types";
import InfiniteScroll from "react-infinite-scroll-component";
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
      <section className="wrapper grid grid-cols-responsive grid-rows-4 gap-2">
        {data?.pages?.map((group, i) => {
          return (
            <Fragment key={i}>
              {group.data.results.map((item: ItemType) => (
                <div key={item.id} className="flex flex-col">
                  <Item {...item} genres={genres?.data?.genres} type={type!} />
                  <h1 className="mt-2 text-nowrap px-2 text-ellipsis overflow-hidden">
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

import SearchResult from "../../components/searchResult/SearchResult";
import FilteringBox from "../../components/filteringBox/FilteringBox";
import { useState } from "react";

const Browse = () => {
  const [fetch, setFetch] = useState(false);
  return (
    <div className="browse mt-16 pt-20 min-h-[100vh]">
      <FilteringBox setFetch={setFetch} />
      <SearchResult fetch={fetch} setFetch={setFetch} />
    </div>
  );
};

export default Browse;

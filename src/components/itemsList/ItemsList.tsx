import Item from "../item/Item";

type Props = {
  data: {
    id: number;
    poster_path: string;
    title: string;
    overview: string;
    original_language: string;
    vote_average: number;
    release_date?: string;
    first_air_date?: string | number | Date | undefined;
    genre_ids: (number | string)[];
  }[];
  heading: string;
};

const ItemsList = ({ data, heading }: Props) => {
  const lastChild = data.slice(0, 8)[data.slice(0, 8).length - 1].id;

  console.log(data[0]);

  return (
    <div className="mb-10">
      <h1 className="section title text-xl font-semibold mb-4 mt-3">
        Popular
        <span className="bg-secondary px-2 ml-1 rounded-sm text-lg">
          {heading}
        </span>
      </h1>
      <div className="grid grid-cols-8 gap-1">
        {data.slice(0, 8).map((item) => {
          return <Item key={item.id} {...item} lastChild={lastChild} />;
        })}
      </div>
    </div>
  );
};

export default ItemsList;

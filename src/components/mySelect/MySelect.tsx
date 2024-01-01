import Select, { CSSObjectWithLabel, OptionProps } from "react-select";
import { MyDataGenres } from "../../types/types";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";

type MySelectProps = {
  options: MyDataGenres[];
  type: string;
};

const styles: any = {
  option: (baseStyle: CSSObjectWithLabel, state: OptionProps) => ({
    ...baseStyle,
    color: "#f8f9fa",
    backgroundColor: state.isFocused ? "#242529" : "",
    fontSize: 12,
  }),
  menu: (baseStyle: CSSObjectWithLabel) => ({
    ...baseStyle,
    backgroundColor: "#17181A",
  }),
  control: (baseStyle: CSSObjectWithLabel) => ({
    ...baseStyle,
    backgroundColor: "#17181A",
    border: "none",
  }),
  multiValue: (baseStyle: CSSObjectWithLabel) => ({
    ...baseStyle,
    backgroundColor: "#242529",
  }),
  multiValueLabel: (baseStyle: CSSObjectWithLabel) => ({
    ...baseStyle,
    color: "#f8f9fa",
    fontSize: 10,
  }),
  singleValue: (baseStyle: CSSObjectWithLabel) => ({
    ...baseStyle,
    color: "#f8f9fa",
  }),
  input: (baseStyle: CSSObjectWithLabel) => ({
    ...baseStyle,
    color: "#f8f9fa",
  }),
  placeholder: (baseStyle: CSSObjectWithLabel) => ({
    ...baseStyle,
    textTransform: "capitalize",
    textWrap: "nowrap",
  }),
};

const MySelect = ({ options, type }: MySelectProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const handleChange = (selectedOptions: MyDataGenres[]) => {
    if (type === "genres") {
      if (selectedOptions.length !== 0) {
        let genres = selectedOptions?.map(({ value }: any) => value).join(",");
        setSearchParams((prev) => ({
          ...Object.fromEntries([...prev]),
          genres,
        }));
        return;
      } else {
        setSearchParams((prev) => {
          const prevParam = Object.fromEntries([...prev]);
          delete prevParam.genres;
          return {
            ...prevParam,
          };
        });
        return;
      }
    }
    if (type === "rating") {
      if (selectedOptions) {
        setSearchParams((prev) => ({
          ...Object.fromEntries([...prev]),
          rating: selectedOptions.value,
        }));
        return;
      } else {
        setSearchParams((prev) => {
          const prevParam = Object.fromEntries([...prev]);
          delete prevParam.rating;
          return {
            ...prevParam,
          };
        });
        return;
      }
    }
    if (type === "language") {
      if (selectedOptions) {
        setSearchParams((prev) => ({
          ...Object.fromEntries([...prev]),
          language: selectedOptions.value,
        }));
        return;
      } else {
        setSearchParams((prev) => {
          const prevParam = Object.fromEntries([...prev]);
          delete prevParam.language;
          return {
            ...prevParam,
          };
        });
        return;
      }
    }
    if (type === "release date") {
      if (selectedOptions) {
        setSearchParams((prev) => ({
          ...Object.fromEntries([...prev]),
          date: selectedOptions.value,
        }));
        return;
      } else {
        setSearchParams((prev) => {
          const prevParam = Object.fromEntries([...prev]);
          delete prevParam.date;
          return {
            ...prevParam,
          };
        });
        return;
      }
    }
  };

  return (
    <div className="flex-1 text">
      <Select
        options={options}
        placeholder={type}
        isMulti={type === "genres" ? true : false}
        isSearchable
        isClearable={true}
        closeMenuOnSelect={type === "genres" ? false : true}
        noOptionsMessage={() => `No ${type} found`}
        onChange={handleChange}
        styles={styles}
      />
    </div>
  );
};

export default MySelect;

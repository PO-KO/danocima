import Select, { CSSObjectWithLabel, OptionProps } from "react-select";
import IntrinsicAttributes from "react-select";

type Props = {
  setGenre: () => IntrinsicAttributes | null;
  options: Object[];
  type: string;
};

const styles = {
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
  input: (baseStyle: CSSObjectWithLabel) => ({
    ...baseStyle,
    color: "#f8f9fa",
  }),
  placeholder: (baseStyle: CSSObjectWithLabel) => ({
    ...baseStyle,
    textTransform: "capitalize",
  }),
};

const MySelect = ({ setGenre, options, type }: Props) => {
  return (
    <div className="genres flex-1">
      <Select
        options={options}
        placeholder={type}
        isMulti
        isSearchable
        closeMenuOnSelect={false}
        noOptionsMessage={() => `No ${type} found`}
        onChange={setGenre}
        styles={styles}
      />
    </div>
  );
};

export default MySelect;

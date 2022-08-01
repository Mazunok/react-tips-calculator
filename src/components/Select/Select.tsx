import Select, { SingleValue } from "react-select";
import { ITipsOption } from "../../types";
import { stylesConfig } from "./styles";

interface IProps {
  tips: ITipsOption;
  handleSelect: (option: SingleValue<ITipsOption> | null) => void;
}

export const CustomSelect = ({ tips, handleSelect }: IProps) => {
  const options: ITipsOption[] = [
    { value: 10, label: "10%" },
    { value: 15, label: "15%" },
    { value: 20, label: "20%" },
  ];

  return (
    <Select
      options={options}
      defaultValue={tips}
      onChange={handleSelect}
      styles={stylesConfig}
      isMulti={false}
    />
  );
};

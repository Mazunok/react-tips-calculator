import { StyledForm, Title, Subtitle, TotalPrice } from "./styles";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { CustomSelect } from "../Select/Select";
import { useState } from "react";
import { ITipsOption } from "../../types";
import { SingleValue } from "react-select";

export const Form = () => {
  const [tips, setTips] = useState<ITipsOption>({
    label: "10%",
    value: 10,
  });

  const handleSelect = (option: SingleValue<ITipsOption>): void => {
    if (option) {
      setTips(option);
    }
  };

  return (
    <StyledForm>
      <Title>Welcome to App</Title>
      <Subtitle>Let’s go calculate your tips</Subtitle>
      <Input placeholder="Enter bill"/>
      <Input placeholder="Enter people"/>
      <CustomSelect tips={tips} handleSelect={handleSelect} />
      <TotalPrice>Total:0.00$</TotalPrice>
      <Button />
    </StyledForm>
  );
};

import { StyledForm, Title, Subtitle, TotalPrice } from "./styles";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { CustomSelect } from "../Select/Select";
import { FormEvent, useEffect, useState } from "react";
import { ITipsOption } from "../../types";
import { SingleValue } from "react-select";
import { useInput } from "../../hooks/useInput";

export const Form = () => {
  const bill = useInput();
  const people = useInput();
  const [tips, setTips] = useState<ITipsOption>({
    label: "10%",
    value: 10,
  });
  const [disabled, setDisabled] = useState<boolean>(true);
  const [total, setTotal] = useState<number>(0);

  const handleSelect = (option: SingleValue<ITipsOption>): void => {
    if (option) {
      setTips(option);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const calculateTips = (
      bill: string,
      people: string,
      procent: number
    ): number => {
      const billValue = Number(bill);
      const peopleValue = Number(people);
      return billValue + ((billValue * procent) / 100) * peopleValue;
    };
    setTotal(calculateTips(bill.value, people.value, tips.value));
  };

  useEffect((): void => {
    bill.value && people.value ? setDisabled(false) : setDisabled(true);
  },[bill,people]);

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Title>Welcome to App</Title>
      <Subtitle>Let’s go calculate your tips</Subtitle>
      <Input placeholder="Enter bill" {...bill} />
      <Input placeholder="Enter people" {...people} />
      <CustomSelect tips={tips} handleSelect={handleSelect} />
      <TotalPrice>Total:{total.toFixed(2)}$</TotalPrice>
      <Button disabled={isDisabled} />
    </StyledForm>
  );
};

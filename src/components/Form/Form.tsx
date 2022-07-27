import { StyledForm, Title, Subtitle } from "./styles";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { Select } from "../Select/Select";

export const Form = () => {
  return (
    <StyledForm>
      <Title>Welcome to App</Title>
      <Subtitle>Let’s go calculate your tips</Subtitle>
      <Input></Input>
      <Input></Input>
      <Select></Select>
      <Button></Button>
    </StyledForm>
  );
};

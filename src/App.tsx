import React from "react";
import { Form } from "./components/Form/Form";
import styled from "styled-components";
import shape from "./assets/shape.svg";

export const App = () => {
  return (
    <Wrapper>
      <Form />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  min-height: 100vh;
  background: no-repeat url(${shape}) #eaf2f2;
  overflow: hidden;
`;

export default App;

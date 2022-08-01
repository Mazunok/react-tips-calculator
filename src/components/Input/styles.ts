import styled from "styled-components";

const StyledInput = styled.input`
  border: none;
  width: 331px;
  height: 68px;
  margin-bottom: 15px;
  border-radius: 30px;
  box-shadow: (0px 4px 4px rgba(0, 0, 0, 0.25));
  font-family: "Arial";
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  color: rgba(117, 108, 108, 0.6);
  @media (min-width: 1024px) {
    width: 456px;
  }
`;

export { StyledInput };

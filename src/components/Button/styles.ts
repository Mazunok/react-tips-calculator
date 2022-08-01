import styled from "styled-components";

const StyledButton = styled.button<{ disabled: boolean }>`
  border: none;
  width: 321px;
  height: 61px;
  background: #2ed2c9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: "Arial";
  font-weight: 400;
  font-size: 24px;
  color: #ffffff;
  opacity: ${({ disabled }) => (disabled ? "0.5" : "1")};
`;

export { StyledButton };

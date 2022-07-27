import styled from "styled-components";

const StyledForm = styled.form`
  margin: 0 auto;
  max-width: 414px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  font-family: "Arial";
  font-weight: 400;
  font-size: 24px;
  color: #000000;
`;

const Subtitle = styled.p`
  font-family: "Arial";
  font-weight: 400;
  font-size: 24px;
  color: rgba(117, 108, 108, 0.57);
`;

export { StyledForm, Title, Subtitle };

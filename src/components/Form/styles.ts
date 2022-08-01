import styled from "styled-components";

const StyledForm = styled.form`
  margin: 0 auto;
  max-width: 414px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* align-items: center; */
  @media (min-width: 1024px) {
    max-width: 459px;
  }
`;

const Title = styled.h1`
  margin-bottom: 45px;
  font-family: "Arial";
  font-weight: 400;
  font-size: 24px;
  color: #000000;
  align-self: center;
  @media (min-width: 1024px) {
    font-size: 40px;
  }
`;

const Subtitle = styled.h2`
  align-self: center;
  margin-bottom: 45px;
  font-family: "Arial";
  font-weight: 400;
  font-size: 24px;
  color: rgba(117, 108, 108, 0.57);
  @media (min-width: 1024px) {
    font-size: 32px;
  }
`;

const TotalPrice = styled.h2`
  align-self: start;
  padding-left: 10px;
  margin-bottom: 45px;
  font-family: "Arial";
  font-weight: 500;
  font-size: 18px;
  color: #000000;
  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

export { StyledForm, Title, Subtitle, TotalPrice };

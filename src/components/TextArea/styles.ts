import styled from "styled-components";

export const Text = styled.h1`
  font-size: 1.3rem;
  font-weight: 300;
  text-align: center;
  margin-bottom: 10px;
  color: ${(props) => (props.color ? props.color : "#216319")};
`;

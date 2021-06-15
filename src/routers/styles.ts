import styled from "styled-components";

export const Container = styled.div`
  background: #fabf37;
  height: 90px;
  padding: 10px;
  align-items: center;
`;

export const Image = styled.img`
  display: block;
  margin: 0 auto -5px auto;
  width: 338px;
  height: 264px;
`;

export const Button = styled.button`
  padding: 0.5em;
  text-transform: uppercase;
  font-weight: 300;
  border-radius: 20px;
  background-color: ${(props) => (props.color ? props.color : "#2c0440")};
  border: 1px solid #2c0440;
  color: #fff;
  margin: -5px auto;
  display: block;
  transition: all linear 0.1s;
  position: sticky;
  &:hover,
  &:focus {
    opacity: 0.8;
  }
`;

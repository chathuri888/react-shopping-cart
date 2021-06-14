import styled from 'styled-components';

export const Container = styled.div`
  background: #fabf37;
  height: 90px;
  padding: 10px;
  align-items: center;
`;

export const Button = styled.button`
  padding: 10px 20px;
  text-transform: uppercase;
  font-weight: 300;
  border-radius: 5px;
  background-color: ${(props) => (props.color ? props.color : '#2c0440')};
  border: 1px solid #2c0440;
  color: #fff;
  margin: 5px auto;
  display: block;
  transition: all linear 0.1s;

  &:hover,
  &:focus {
    opacity: 0.8;
  }
`;

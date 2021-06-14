import styled from 'styled-components';
import Modal from 'styled-react-modal';

export const Container = styled.div`
  border: 1px solid #ccc;
  padding: 15px;
  width: 250px;
  margin: 15px;
  border-radius: 20px;
  background: #fabf37;
`

export const Name = styled.h1`
  font-size: 1.3rem;
  font-weight: 300;
  text-align: center;
  margin-bottom: 10px;
`

export const Discription = styled.h2`
  font-size: 1rem;
  font-weight: 300;
  text-align: center;
  margin-bottom: 10px;
`

export const Price = styled.p`
  font-weight: 600;
  text-align: center;
  margin-bottom: 10px;
`

export const Image = styled.img`
  display: block;
  margin: 0 auto 10px auto;
  max-width: 100;
  max-height: 100px;
`

export const StyledModal = Modal.styled`
  width: 20rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;

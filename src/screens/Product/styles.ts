import styled from 'styled-components'

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

export const Button = styled.button`
  padding: 10px 20px;
  text-transform: uppercase;
  font-weight: 300;
  border-radius: 5px;
  background-color: #2c0440;
  border: 1px solid #2c0440;
  color: #fff;
  margin: 5px auto;
  display: block;
  transition: all linear 0.1s;

  &:hover,
  &:focus {
    opacity: 0.8;
  }
`
export const Input = styled.input.attrs(props => ({
  type: "number",
  size: props.size || "0em",
}))`
  border: 2px solid palevioletred;
  margin: ${props => props.size};
  padding: ${props => props.size};
  width: 50px;
  height: 40px;
  text-transform: uppercase;
  font-weight: 300;
  border-radius: 5px;
  border: 1px solid #2c0440;
  color: #2c0440;
  margin: 5px auto;
  display: block;
  transition: all linear 0.1s;
  text-align: center;
`;
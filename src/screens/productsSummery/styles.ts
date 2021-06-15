import styled from "styled-components";

export const Table = styled.table`
  margin: 30px;
  border-radius: 20px;
  border-spacing: 0;
  border-collapse: collapse;
  border: 1px solid #ccc;
  font-weight: 300;

  td,
  th {
    padding: 5px 10px;
    border: 1px solid #ccc;
    background-color: #fabf37;
    color: #2c0042;
  }

  thead {
    font-size: 1.1em;
    text-align: center;
  }

  th[scope="row"] {
    font-weight: 600;
    text-align: left;
  }

  .price {
    text-align: right;
  }

  .line-item {
    th {
      font-weight: normal;
    }
  }
`;

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: 30px 15px;
`;

export const Input = styled.input.attrs((props) => ({
  type: "number",
  size: props.size || "0em",
}))`
  border: 2px solid palevioletred;
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
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

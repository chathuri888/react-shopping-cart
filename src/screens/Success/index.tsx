import React from "react";
import { useDispatch, useSelector } from "react-redux";

import LinkButton from "../../components/LinkButton";
import TextArea from "../../components/TextArea";
import { resetCartData } from "../../store/cart/actions";
import { Container } from "./styles";
import { RootState } from "../../store/rootReducer";

import { setOpenShoppingCart } from "../../store/cart/actions";

const Success: React.FC = () => {
  const dispatch = useDispatch();
  const { isShoppingCartOpen } = useSelector((state: RootState) => state.cart);
  const dataReset = () => {
    dispatch(resetCartData());
    dispatch(setOpenShoppingCart(!isShoppingCartOpen));
  };

  return (
    <Container>
      <TextArea lable="PAYMENT SUCCESS" />
      <LinkButton to="/" onClick={dataReset}>
        Continue Shopping
      </LinkButton>
    </Container>
  );
};

export default Success;

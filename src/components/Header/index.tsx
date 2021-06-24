import { useDispatch, useSelector } from "react-redux";

import Button from "../Button";
import { RootState } from "../../store/rootReducer";
import { Container } from "./styles";
import TextArea from "../TextArea";
import { setOpenShoppingCart } from "../../store/cart/actions";

const Header = () => {
  const dispatch = useDispatch();
  const { totalQuantity, isShoppingCartOpen } = useSelector(
    (state: RootState) => state.cart
  );
  const buttonShow = totalQuantity > 0;

  const isOpenShoppingCart = () => {
    dispatch(setOpenShoppingCart(!isShoppingCartOpen));
  };

  return (
    <Container>
      <TextArea lable="Cart Item" />
      {buttonShow && (
        <Button
          lable={totalQuantity}
          onPress={() => isOpenShoppingCart()}
        ></Button>
      )}
    </Container>
  );
};

export default Header;

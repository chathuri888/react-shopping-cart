import { useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LinkButton from "../components/LinkButton";
import ShoppingBucket from "../res/img/bucket.png";
import Cart from "../screens/Cart";
import ProductList from "../screens/ProductList";
import Succes from "../screens/Success";
import { RootState } from "../store/rootReducer";
import { Container, Image } from "./styles";
import TextArea from "../components/TextArea";

const Header = () => {
  const { totalQuantity } = useSelector((state: RootState) => state.cart);
  const buttonShow = totalQuantity > 0;

  return (
    <Container>
      <BrowserRouter>
        <TextArea lable="Cart Item" />
        {buttonShow && <LinkButton to="/cart">{totalQuantity}</LinkButton>}
        <Image src={ShoppingBucket} alt="shopping" />
        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/succes">
            <Succes />
          </Route>
          <Route path="/">
            <ProductList />
          </Route>
        </Switch>
      </BrowserRouter>
    </Container>
  );
};

export default Header;

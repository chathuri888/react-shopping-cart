import { BrowserRouter, Route, Switch } from "react-router-dom";
import ShoppingBucket from "../res/img/bucket.png";
import ProductList from "../screens/ProductList";
import Succes from "../screens/Success";
import { Container, Image } from "./styles";

const NavigationRoutes = () => {
  return (
    <Container>
      <Image src={ShoppingBucket} alt="shopping" />
      <BrowserRouter>
        <Switch>
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

export default NavigationRoutes;

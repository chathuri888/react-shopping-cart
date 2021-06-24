import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Product as ProductModel } from "../../entities/Product";
import { RootState } from "../../store/rootReducer";

import Product from "../Product";
import { Container, Loading, ContainerProduct } from "./styles";
import { fetchProducts } from "../../store/cart/actions";
import SummeryTable from "../productsSummery";
import ModalCart from "../../components/ShoppingCartModal";
import { setOpenShoppingCart } from "../../store/cart/actions";

const ProductList: React.FC = () => {
  const dispatch = useDispatch();
  const { products, isShoppingCartOpen } = useSelector(
    (state: RootState) => state.cart
  );
  const [productsList, setProducts] = useState<ProductModel[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { items } = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    dispatch(fetchProducts());
    setLoading(true);
    setProducts(products);
    setLoading(false);
  }, [productsList]);

  return (
    <Container>
      {loading ? (
        <Loading>Loading...</Loading>
      ) : (
        <>
          <SummeryTable productsList={products} />
          <ContainerProduct>
            {products?.map((product) => (
              <Product
                key={product.id}
                product={product}
                selectedItems={items}
              />
            ))}
          </ContainerProduct>
        </>
      )}
      <ModalCart
        isOpen={isShoppingCartOpen}
        onClick={() => dispatch(setOpenShoppingCart(!isShoppingCartOpen))}
      />
    </Container>
  );
};

export default ProductList;

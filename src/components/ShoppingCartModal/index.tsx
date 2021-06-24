import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import LinkButton from "../../components/LinkButton";
import formatCurrency from "../../helpers/formatCurrency";
import { calculateCart } from "../../store/cart/actions";
import { RootState } from "../../store/rootReducer";
import CartItem from "../CartItem";
import { Loading, Table, Updating, Container } from "./styles";
import Button from "../../components/Button";

import Modal from "../ModalBase";

interface OwnProps {
  onClick: Function;
  isOpen: boolean;
}

const ModalShoppingCart = ({ isOpen, onClick }: OwnProps) => {
  const cart = useSelector((state: RootState) => state.cart);

  const dispatch = useDispatch();

  const formattedSubtotal = useMemo(
    () => formatCurrency(cart.subtotal),
    [cart.subtotal]
  );

  const formattedShipping = useMemo(
    () => formatCurrency(cart.shipping),
    [cart.shipping]
  );

  const formattedTotal = useMemo(
    () => formatCurrency(cart.total),
    [cart.total]
  );

  const modalBody = () => {
    return (
      <Container>
        <Table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Line total</th>
            </tr>
          </thead>
          <tbody>
            {cart.items.length ? (
              cart.items.map((item) => (
                <CartItem key={item.product.id} item={item} />
              ))
            ) : (
              <tr>
                <td colSpan={4}>Your cart is empty</td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr>
              <th colSpan={3} scope="row">
                Subtotal
              </th>
              <td className="price">
                {cart.loading ? <Loading /> : formattedSubtotal}
              </td>
            </tr>
            <tr>
              <th colSpan={3} scope="row">
                Shipping
              </th>
              <td className="price">
                {cart.loading ? <Loading /> : formattedShipping}
              </td>
            </tr>
            <tr>
              <th colSpan={3} scope="row">
                Total
              </th>
              <td className="price">
                {cart.loading ? <Loading /> : formattedTotal}
              </td>
            </tr>
            <tr>
              <th colSpan={4} scope="row">
                <Button
                  lable="Calculate totals"
                  onPress={() => dispatch(calculateCart())}
                />

                {cart.loading && <Updating>Updating...</Updating>}
              </th>
            </tr>
            <tr>
              <th colSpan={4} scope="row">
                <LinkButton to="/succes">Checkout</LinkButton>
              </th>
            </tr>
          </tfoot>
        </Table>
      </Container>
    );
  };
  return (
    <Modal
      isOpen={isOpen}
      onClick={() => onClick()}
      modalBody={modalBody()}
    ></Modal>
  );
};

export default ModalShoppingCart;

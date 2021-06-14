import React, { useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';

import formatCurrency from '../../../helpers/formatCurrency';
import { addProduct, removeProduct } from '../../../store/cart/actions';
import { CartStateItem } from '../../../store/cart/types';
import { ActionButton, Quantity } from './styles';

interface CartItem {
  item: CartStateItem;
}

const CartItem: React.FC<CartItem> = ({ item }) => {
  const dispatch = useDispatch();

  const formattedPrice = useMemo(() => formatCurrency(item.product.price), [item.product.price]);
  const formattedLineTotal = useMemo(() => formatCurrency(item.lineTotal), [item.lineTotal]);

  const handleIncrease = useCallback(() => {
    if (item.quantity < item.product.stock) {
      const quantity = 1;
      dispatch(addProduct(item.product, quantity));
    }
  }, [dispatch, item.product]);

  const handleDecrease = useCallback(() => {
    dispatch(removeProduct(item.product));
  }, [dispatch, item.product]);

  return (
    <tr key={item.product.id} className="line-item">
      <th scope="row">{item.product.name}</th>
      <td className="price">{formattedPrice}</td>
      <td>
        <Quantity>
          <ActionButton onClick={handleDecrease}>-</ActionButton>
          {item.quantity}
          <ActionButton onClick={handleIncrease}>+</ActionButton>
        </Quantity>
      </td>
      <td className="price">{formattedLineTotal}</td>
    </tr>
  );
};

export default CartItem;

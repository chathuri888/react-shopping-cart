import { CartStateItem } from '../store/cart/types';

export const normalizeItem = (value: CartStateItem[], productId: number) => {
  const quantity = value?.find(({ product }) => product?.id === productId);
  return quantity?.quantity || 0;
};

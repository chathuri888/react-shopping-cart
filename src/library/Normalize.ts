import { CartStateItem } from "../store/cart/types";

import { Product } from "../entities/Product";

export const normalizeItem = (value: CartStateItem[], productId: number) => {
  const quantity = value?.find(({ product }) => product?.id === productId);
  return quantity?.quantity || 0;
};

export const normalizePRoducts = (value: Product[]) => {
  const products = value.map((x, i) => {
    x.totalPrice = x.price * x.stock;
    x.id = i + 1;
    return x;
  });
  return products;
};

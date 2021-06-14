import { Promise } from 'bluebird';

import { Cart } from '../entities/Cart';
import { Product } from '../entities/Product';

export interface CalculateCartDto {
  items: {
    quantity: number;
    product: Product;
  }[];
}

export default async function calculateCart({ items }: CalculateCartDto): Promise<Cart> {
  const shipping = 5;
  const subtotal = items.reduce(
    (accumulator, item) => accumulator + item.quantity * item.product.price,
    0,
  );
  const total = shipping + subtotal;
  const totalQuantity = items.reduce((accumulator, item) => accumulator + item.quantity, 0);

  return Promise.delay(1000, {
    items,
    shipping,
    subtotal,
    total,
    totalQuantity,
  });
}

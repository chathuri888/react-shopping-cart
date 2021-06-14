import { Product } from './Product';

export interface Cart {
  items: {
    quantity: number;
    product: Product;
  }[];
  subtotal: number;
  shipping: number;
  total: number;
  totalQuantity: number;
}

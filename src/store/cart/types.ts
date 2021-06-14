import { Cart } from '../../entities/Cart';
import { Product } from '../../entities/Product';

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const CALCULATE_CART = 'CALCULATE_CART';
export const CALCULATE_CART_SUCCESS = 'CALCULATE_CART_SUCCESS';
export const CALCULATE_CART_FAILURE = 'CALCULATE_CART_FAILURE';
export const RESET_CART_DATA = 'RESET_CART_DATA';

export interface AddProductAction {
  type: typeof ADD_PRODUCT;
  product: Product;
  quantity: number;
}

export interface RemoveProductAction {
  type: typeof REMOVE_PRODUCT;
  product: Product;
}

export interface CalculateCartAction {
  type: typeof CALCULATE_CART;
}

export interface ResetCartData {
  type: typeof RESET_CART_DATA;
}

export interface CalculateCartSuccessAction {
  type: typeof CALCULATE_CART_SUCCESS;
  cart: Cart;
}

export interface CalculateCartFailureAction {
  type: typeof CALCULATE_CART_FAILURE;
  message: string;
}

export type CartActionTypes =
  | AddProductAction
  | RemoveProductAction
  | CalculateCartAction
  | CalculateCartSuccessAction
  | CalculateCartFailureAction
  | ResetCartData;

export interface CartStateItem {
  quantity: number;
  lineTotal: number;
  product: Product;
}

export interface CartState {
  error: boolean;
  loading: boolean;
  items: CartStateItem[];
  shipping: number;
  subtotal: number;
  total: number;
  totalQuantity: number;
}

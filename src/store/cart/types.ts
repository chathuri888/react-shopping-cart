import { Cart } from "../../entities/Cart";
import { Product } from "../../entities/Product";
import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  CALCULATE_CART,
  RESET_CART_DATA,
  CALCULATE_CART_SUCCESS,
  CALCULATE_CART_FAILURE,
} from "../../constants/cart";

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

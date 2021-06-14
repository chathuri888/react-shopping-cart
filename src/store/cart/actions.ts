import { Cart } from '../../entities/Cart';
import { Product } from '../../entities/Product';
import {
  ADD_PRODUCT,
  CALCULATE_CART,
  CALCULATE_CART_FAILURE,
  CALCULATE_CART_SUCCESS,
  CartActionTypes,
  REMOVE_PRODUCT,
  RESET_CART_DATA,
} from './types';

export function addProduct(product: Product, quantity: number): CartActionTypes {
  return {
    type: ADD_PRODUCT,
    product,
    quantity,
  };
}

export function removeProduct(product: Product): CartActionTypes {
  return {
    type: REMOVE_PRODUCT,
    product,
  };
}

export function calculateCart(): CartActionTypes {
  return {
    type: CALCULATE_CART,
  };
}

export function calculateCartSuccess(cart: Cart): CartActionTypes {
  return {
    type: CALCULATE_CART_SUCCESS,
    cart,
  };
}

export function calculateCartFailure(message: string): CartActionTypes {
  return {
    type: CALCULATE_CART_FAILURE,
    message,
  };
}

export function resetCartData() {
  return {
    type: RESET_CART_DATA,
  };
}

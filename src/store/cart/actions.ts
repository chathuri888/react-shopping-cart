import { Cart } from "../../entities/Cart";
import { Product, ProductRange } from "../../entities/Product";
import { CartActionTypes } from "./types";
import {
  ADD_PRODUCT,
  CALCULATE_CART,
  CALCULATE_CART_FAILURE,
  CALCULATE_CART_SUCCESS,
  REMOVE_PRODUCT,
  RESET_CART_DATA,
  FETCH_PRODUCTS_DATA,
  FETCH_PRODUCTS_DATA_SUCCESS,
  PRICE_RANGE_CHANGE,
  SET_SHOPPING_CART_OPEN,
} from "../../constants/cart";

export function addProduct(
  product: Product,
  quantity: number
): CartActionTypes {
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

export function fetchProducts() {
  return {
    type: FETCH_PRODUCTS_DATA,
  };
}

export function fetchProductsSucces(products: Product[]) {
  return {
    type: FETCH_PRODUCTS_DATA_SUCCESS,
    products,
  };
}

export function changePriceRange(priceRange: ProductRange) {
  return {
    type: PRICE_RANGE_CHANGE,
    priceRange,
  };
}

export function setOpenShoppingCart(openCart: boolean) {
  return {
    type: SET_SHOPPING_CART_OPEN,
    openCart,
  };
}

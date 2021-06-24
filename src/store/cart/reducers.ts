import produce from "immer";

import { CartActionTypes, CartState } from "./types";
import {
  ADD_PRODUCT,
  CALCULATE_CART,
  CALCULATE_CART_FAILURE,
  CALCULATE_CART_SUCCESS,
  REMOVE_PRODUCT,
  RESET_CART_DATA,
  PRICE_RANGE_CHANGE,
  FETCH_PRODUCTS_DATA_SUCCESS,
  SET_SHOPPING_CART_OPEN,
} from "../../constants/cart";

const PRODUCT_RANGE = [
  { id: 1, minPrice: 0, maxPrice: 100 },
  { id: 2, minPrice: 100, maxPrice: 200 },
  { id: 3, minPrice: 201, maxPrice: 300 },
];

const initialState: CartState = {
  error: false,
  loading: false,
  items: [],
  subtotal: 0,
  shipping: 0,
  total: 0,
  totalQuantity: 0,
  products: [],
  productRange: PRODUCT_RANGE,
  isShoppingCartOpen: false,
};

const resetCart = (state: CartState) => ({
  ...state,
  error: false,
  loading: false,
  items: [],
  subtotal: 0,
  shipping: 0,
  total: 0,
  totalQuantity: 0,
});

export function cartReducer(
  state = initialState,
  action: CartActionTypes
): CartState {
  switch (action.type) {
    case ADD_PRODUCT:
      return produce(state, (draftState) => {
        const foundItem = draftState.items.find(
          (item) => item.product.id === action.product.id
        );
        if (foundItem) {
          foundItem.quantity += action.quantity;
          foundItem.lineTotal = foundItem.product.price * foundItem.quantity;
        } else {
          draftState.items.push({
            quantity: action.quantity,
            product: action.product,
            lineTotal: action.product.price,
          });
        }
      });
    case REMOVE_PRODUCT:
      return produce(state, (draftState) => {
        const foundItem = draftState.items.find(
          (item) => item.product.id === action.product.id
        );

        if (foundItem) {
          if (foundItem.quantity < 2) {
            draftState.items.splice(draftState.items.indexOf(foundItem), 1);
          } else {
            foundItem.quantity -= 1;
          }
        }

        return draftState;
      });
    case CALCULATE_CART:
      return { ...state, loading: true };
    case CALCULATE_CART_FAILURE:
      return { ...state, loading: false, error: true };
    case CALCULATE_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        shipping: action.cart.shipping,
        subtotal: action.cart.subtotal,
        total: action.cart.total,
        totalQuantity: action.cart.totalQuantity,
      };
    case FETCH_PRODUCTS_DATA_SUCCESS:
      return { ...state, products: action.products };
    case RESET_CART_DATA:
      return resetCart(state);
    case PRICE_RANGE_CHANGE:
      return produce(state, (draftState) => {
        const foundItem = draftState.productRange.find(
          (item) => item.id === action.priceRange.id
        );
        if (foundItem) {
          foundItem.id = action.priceRange.id;
          foundItem.minPrice = action.priceRange.minPrice;
          foundItem.maxPrice = action.priceRange.maxPrice;
        }
      });
    case SET_SHOPPING_CART_OPEN:
      return { ...state, isShoppingCartOpen: action.openCart };
    default:
      return state;
  }
}

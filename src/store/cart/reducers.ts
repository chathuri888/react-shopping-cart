import produce from "immer";

import { CartActionTypes, CartState } from "./types";
import {
  ADD_PRODUCT,
  CALCULATE_CART,
  CALCULATE_CART_FAILURE,
  CALCULATE_CART_SUCCESS,
  REMOVE_PRODUCT,
  RESET_CART_DATA,
} from "../../constants/cart";

const initialState: CartState = {
  error: false,
  loading: false,
  items: [],
  subtotal: 0,
  shipping: 0,
  total: 0,
  totalQuantity: 0,
};

const resetCart = () => ({
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
    case RESET_CART_DATA:
      return resetCart();
    default:
      return state;
  }
}

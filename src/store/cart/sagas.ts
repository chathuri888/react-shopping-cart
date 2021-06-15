import { all, call, put, select, takeLatest } from "redux-saga/effects";

import calculateCart from "../../services/calculateCart";
import { RootState } from "../rootReducer";
import {
  calculateCart as actionCalculateCart,
  calculateCartFailure,
  calculateCartSuccess,
  fetchProductsSucces,
} from "./actions";
import {
  AddProductAction,
  CalculateCartAction,
  RemoveProductAction,
} from "./types";
import {
  ADD_PRODUCT,
  CALCULATE_CART,
  REMOVE_PRODUCT,
  FETCH_PRODUCTS_DATA,
} from "../../constants/cart";
import axios from "axios";
import { normalizePRoducts } from "../../library/Normalize";

function* calculateCartAction(action: CalculateCartAction): any {
  try {
    const state: RootState = yield select((state) => state);
    const cart = yield call(calculateCart, {
      items: state.cart.items.map((item) => ({
        quantity: item.quantity,
        product: item.product,
      })),
    });

    yield put(calculateCartSuccess(cart));
  } catch (e) {
    yield put(calculateCartFailure("There was an error"));
  }
}

function* addProduct(action: AddProductAction): any {
  console.log("saga:addProduct", action);
  yield put(actionCalculateCart());
}

function* removeProduct(action: RemoveProductAction): any {
  console.log("saga:removeProduct", action);
  yield put(actionCalculateCart());
}

function* fetchProductAction(): any {
  const apiCall = () => axios.get("http://cat-store-api.frostdigital.se/api");
  try {
    const { data } = yield call(apiCall);
    const formateData = normalizePRoducts(data.products);
    yield put(fetchProductsSucces(formateData));
  } catch (error) {
    console.log(error);
  }
}

export default all([
  takeLatest(CALCULATE_CART, calculateCartAction),
  takeLatest(ADD_PRODUCT, addProduct),
  takeLatest(REMOVE_PRODUCT, removeProduct),
  takeLatest(FETCH_PRODUCTS_DATA, fetchProductAction),
]);

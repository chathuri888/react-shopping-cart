import { all, call, put, select, takeLatest } from 'redux-saga/effects';

import calculateCart from '../../services/calculateCart';
import { RootState } from '../rootReducer';
import {
  calculateCart as actionCalculateCart,
  calculateCartFailure,
  calculateCartSuccess,
} from './actions';
import {
  ADD_PRODUCT,
  AddProductAction,
  CALCULATE_CART,
  CalculateCartAction,
  REMOVE_PRODUCT,
  RemoveProductAction,
} from './types';

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
    yield put(calculateCartFailure('There was an error'));
  }
}

function* addProduct(action: AddProductAction): any {
  console.log('saga:addProduct', action);
  yield put(actionCalculateCart());
}

function* removeProduct(action: RemoveProductAction): any {
  console.log('saga:removeProduct', action);
  yield put(actionCalculateCart());
}

export default all([
  takeLatest(CALCULATE_CART, calculateCartAction),
  takeLatest(ADD_PRODUCT, addProduct),
  takeLatest(REMOVE_PRODUCT, removeProduct),
]);

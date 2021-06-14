import { combineReducers } from 'redux';

import { cartReducer } from './cart/reducers';
import { CartState } from './cart/types';

export interface RootState {
  cart: CartState;
}

const rootReducer = combineReducers({
  cart: cartReducer,
});

export default rootReducer;

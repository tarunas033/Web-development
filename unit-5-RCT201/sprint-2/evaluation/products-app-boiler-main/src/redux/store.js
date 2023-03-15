// TODO: use this store variable to create a store.

// Note: you can delete the line below, but remember to create a new store variable


import { createStore, combineReducers } from 'redux';
import authReducer from './auth/auth.reducer';
import cartReducer from './reducers/cart';
import productReducer from './reducers/product';

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  product: productReducer,
});

const store = createStore(rootReducer);

if (window.Cypress) {
  window.store = store;
}

export default store;
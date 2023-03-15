// TODO: use this store variable to create a store.
import {
  legacy_createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import { authReducer } from "./auth/auth.reducer";
import { cartReducer } from "./cart/cart.reducer";
import { productReducer } from "./product/product.reducer";
import thunk from "redux-thunk";

// Note: use cart, product and auth as keys

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  product: productReducer,
});

const createComposer = window.REDUX_DEVTOOLS_EXTENSION_ || compose;

export const store = legacy_createStore(
  rootReducer,
  createComposer(applyMiddleware(thunk))
);

if (window.Cypress) {
  window.store = store;
}
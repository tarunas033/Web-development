import { increment , decrement } from "./redux/action.js";
import {store} from "./redux/store.js";

console.log(store.getState());
store.dispatch(increment());
console.log(store.getState());
store.dispatch(decrement());
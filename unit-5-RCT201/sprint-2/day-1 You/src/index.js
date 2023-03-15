import {store} from "./store.js";
import {func2} from "./2.js";

const func1 = () => {
    console.log(store.getState());
    store.dispatch({type:"update", payload});
    console.log(store.getState());
}
func1();
func2();
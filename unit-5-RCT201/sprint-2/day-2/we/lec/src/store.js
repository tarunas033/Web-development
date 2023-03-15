import { legacy_createStore } from "redux";
import { reducerFunc } from "./redux/reducer";
export const store=legacy_createStore(reducerFunc);
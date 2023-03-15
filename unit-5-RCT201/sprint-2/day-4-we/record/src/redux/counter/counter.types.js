
import {legacy_createStore ,combineReducers} from "redux"

import {counterReducer} from "./counter/counter.reducer";
import {counterReducer} from "./todos/todos.reducer";


const rootReducer = combineReducers ({
    counter:counterReducer,
    todos :todosReducer,
})


export const store = legacy_createStore(reducer);


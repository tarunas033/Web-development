import {legacy_createStore} from "redux";

let initialState = {
    a:1,
    counter :0,
};
const reducerFn = (state = initialState,action) => {
    const { type , payload } = action
   switch(type){
    case "update":{
        return {
            ...state,
            a: payload,
        }
      }
      case "INC" : {
        return{
            ...state,
            counter : state.counter + 1
        }
      }
      case "DEC" : {
        return{
            ...state,
            counter : state.counter - 1
        }
    }
      default: {
        return state;
      }
   }

}


export const store = legacy_createStore(reducerFn);
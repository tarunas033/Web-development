import { INC, DEC} from "./counter.types";


const initialValue ={

 count :0,

};

export const counterReducer = (state = initialValue, action) => {
    switch(action.type) {
        case INC : {
            return {
            ...state,
            count:state.count + action.payload
            }
        }

        case DEC : {
            return {
            ...state,
            count:state.count - action.payload
            }
          }
          default : {
            return state;
        }

    }
}

import { ADD_TODO ,UPDATE_TODO ,REMOVE_TODO} from "./todos.types";


const initialValue ={

  todo : [],

};

export const reducer = (state = initialValue, action) => {
    switch(action.type) {
        case ADD_TODO : {
            return {
            ...state,
            count:[...state.todo ,action.payload]
            }
        }
        case UPDATE_TODO : {
            const updatedTodos = state.todo.map((todo) => {
                if(todo.id === action.payload.id) {
            return {
            ...todo,
            ...action.payload,

            }

        }
        return todo;
    });
       return {
        ...state,
        todo: updatedTodos,
       };

    }
    case REMOVE_TODO : {
        return {
        ...state,
        todo: state.todo.filter((todo) =>todo.id !== action.payload.id),
        }
    }
    default : {
        return state;
        }

    }
}
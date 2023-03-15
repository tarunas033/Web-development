import { ADD_TODO , UPDATE_TODO , REMOVE_TODO } from "./todos.types";


export const increment = () => ({type:INC, payload:1})

export const decrement = () => ({type:DEC, payload:1})

export const addTodo = (newTodo) => ({type:ADD_TODO, payload:newTodo});

export const updateTodo = (updateTodo) => ({
            type:UPDATE_TODO, 
            payload:updateTodo,
        })

export const removeTodo = (removedTodo) => ({
            type: REMOVE_TODO,
            payload:removedTodo, 
            
        })
       
    
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
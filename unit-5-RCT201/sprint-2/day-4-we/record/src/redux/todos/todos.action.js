import { ADD_TODO , UPDATE_TODO , REMOVE_TODO } from "./todos.types";

export const addTodo = (newTodo) => ({type:ADD_TODO, payload:newTodo});

export const updateTodo = (updateTodo) => ({
            type:UPDATE_TODO, 
            payload:updateTodo,
        })

export const removeTodo = (removedTodo) => ({
            type: REMOVE_TODO,
            payload:removedTodo, 
            
        })
       
    
export const addTodoApi = async() => {

    let response = await axios.get("http://localhost:8080");
    return response.data;
};
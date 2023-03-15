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
       
    

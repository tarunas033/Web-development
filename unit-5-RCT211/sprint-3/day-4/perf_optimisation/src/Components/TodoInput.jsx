import React,{useCallback, useState} from "react";
import {Todo} from "./Todo";


const initialState = [
    { id:1 , title : "task-1" , status :false },
    { id:2 , title : "task-2" , status :false },
    { id:3 , title : "task-3" , status :false }
]

export const TodoInput = () => {
   
    const [title,setTitle] = useState("");
    const [todos , setTodos] = useState(initialState)

    const addHandler = () => {
        const newTodo = {
           id:Date.now() + title ,
           title,
           status : false 
        }
        setTodos((prev) => [...prev ,newTodo]);
        setTitle("");
    } ;
    const handleDelete = useCallback((id) => {
      setTodos((prev) => {
          return prev.filter((el)  => el.id !== id);
      });
    },[]);
    const handleToggle = useCallback((id) => {
        setTodos((prev) => {
            return prev.map((el)  => {
              return  el.id === id ? {...el , status : !el.status} : el ;
            });
        });
    },[]);

    return (
        <div>
        <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick ={addHandler}>Add Todo</button>
        <br/>
        <h2>Todo List</h2>
        {todos.map((el) => {
                return <Todo {...el.id}{...el} handleToggle={handleToggle} handleDelete={handleDelete} />
            })}
       </div>

    );
    
}
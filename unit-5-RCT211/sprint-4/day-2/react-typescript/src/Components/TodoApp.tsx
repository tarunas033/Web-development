import React, { useEffect, useState } from 'react'
import { getTodo } from '../api';
import { Todo } from '../constants';
import {TodoInput} from './TodoInput';
import {TodoItem} from './TodoItem';

// array of object
// type of object
// type Todo={
// id:number,
// title:string,
// status:boolean
// }

export const TodoApp = () => {
    const [todos,setTodos] = useState<Todo[]>([]);
    const [change,setChange] =useState<boolean>(false)
    const onAdd = (newTodo: Todo)=>{
        setTodos([...todos, newTodo])
    }

    const handleChange=()=>{
        setChange(prev => !prev)
    }

    useEffect(()=>{
        getTodo().then((res)=> setTodos(res))
    },[change])

  return (
    <div>
        <TodoInput onAdd={onAdd}/>
        <h1>Todo Map</h1>
        {todos.length>0 && todos.map((el)=>{
            return <TodoItem key={el.id} {...el} handleChange={handleChange}/>
        }) }
    </div>
  )
}


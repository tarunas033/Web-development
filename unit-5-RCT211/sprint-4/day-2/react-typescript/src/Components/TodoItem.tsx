import React from 'react'
import { addTodo, dellete, toggleTodo } from '../api'
import { Todo } from '../constants'


interface TodoItempropType extends Todo{
  handleChange:()=> void
}

export const TodoItem = ({id,title,status,handleChange}:TodoItempropType) => {

  const handleToggle=()=>{
    toggleTodo(id).then(()=>handleChange())
  }

  const handleDelete=()=>{
    dellete(id).then(()=>handleChange())
  }

  return (
    <div>
        <h3>
            {title} -- {status ?"Completed" : "pending"}
        </h3>
        <button onClick={handleToggle}>Toggle</button>
        <button onClick={handleDelete}>Delete</button>
    </div>
  )
}


import React, { useState } from 'react'
import { addTodo } from '../api';
import { Todo } from '../constants';

type TodoInputPropType ={
    onAdd:(a: Todo)=> void; //void ---> nothing
}

export const TodoInput = ({onAdd}: TodoInputPropType) => {
    const [title, setTitle] = useState <string>("")

    const submitHandler = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        // Post request
        addTodo(title).then((res:Todo)=>{
            onAdd(res)
        });
        setTitle("")

    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setTitle(e.target.value)
    }

  return (
    <div>
        <form onSubmit={submitHandler}>
            <input type="text" onChange={handleChange} value={title}/>
            <button>Add Todo</button>
        </form>
    </div>
  )
}


import TodoInput from './TodoInput';
import TodoList from "./TodoList";
import React,{useState} from 'react';

enum TodoStatus {

PENDING="PENDING",
IN_PROGRESS="IN_PROGRESS",
DONE="DONE",

}

export interface TodoType {
    id: number,
    text:string,
    status:TodoStatus
}

const Todo = () => {
    const [todos,setTodos] = useState<TodoType[]>([])

    const handleAdd = (text:string) => {
       const todoItem :TodoType = {
        id: Date.now(),
        text,
        status:TodoStatus.PENDING
       } 
       setTodos(
        [...todos,todoItem]
       )
    }

console.log(todos)

return (
    <div>
        <div><TodoInput handleAdd = {handleAdd} /></div>
        <div><TodoList data = {todos}/></div>
    </div>
)

}

export default Todo;
// import React from 'react'
import axios,{AxiosResponse} from "axios";
import { Todo } from "./constants";

export const getTodo = async () => {
    let res: AxiosResponse<Todo[]> = await axios.get("http://localhost:8080/todos")

  return res.data
}

export const addTodo =async (title:string)=>{
    let res: AxiosResponse<Todo> = await axios.post("http://localhost:8080/todos",
    {title,
    status:false}
    
    )
    console.log(res.data);
    return res.data

}

export const toggleTodo= async (id:number)=>{
    let todo= await axios.get(`http://localhost:8080/todos/${id}`)

    let newObj = {status:! todo.data.status};

    let res = await axios.patch(`http://localhost:8080/todos/${id}`, newObj)
}

export const dellete = async (id:number)=>{
    let todo= await axios.get(`http://localhost:8080/todos/${id}`)

    // let newObj = {status:! todo.data.status};

    let res = await axios.delete(`http://localhost:8080/todos/${id}`)
    
}
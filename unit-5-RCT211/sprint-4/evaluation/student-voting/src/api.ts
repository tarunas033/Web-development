import React from 'react'
import axios,{AxiosResponse} from "axios";
import { Entry, Student } from './constants';
export const getdata=async ()=>{
    let res:AxiosResponse<Student[]>=await axios.get("http://localhost:8080/Student")
    return res.data
}
export const addStudent=async(obj:Entry)=>{
    let res:AxiosResponse<Student>= await axios.post(`http://localhost:8080/Student`,obj)
    return res.data;

}

export const updateVote=async(id:number)=>{
    let res= await axios.get(`http://localhost:8080/Student/${id}`)
    let vote={vote:res.data.vote+1}
    axios.patch(`http://localhost:8080/Student/${id}`,vote)
}
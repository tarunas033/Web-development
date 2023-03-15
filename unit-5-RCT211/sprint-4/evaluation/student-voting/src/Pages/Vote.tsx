import React , {useEffect, useState} from 'react';
import StudentCard from "../components/StudentCard";
import {getdata} from "../api";
import { Student } from "../constants"


const Vote = () => {
    const [std, setStd] = useState<Student[]>([])
    const [change ,setChange] =useState<boolean>(false)
    const handleChange = () => {
        setChange((prev) =>!prev)
    }
    useEffect(() => {
        getdata().then((res) =>setStd(res))
    },[change]);
  return (
    <div> {
       std.length>0 && std.map((ele) =>(
        <StudentCard key ={ele.id}{...ele} handleChange ={handleChange} />
       ))
       }
    </div>
  )
}

export default Vote;

import React, { useState } from 'react'
import { addStudent, getdata } from '../api';
import { Entry, Student } from '../constants';

const initialState={
  name:"",
  image:"",
  vote:0,
  batch:"",
  code:"",

  
  // id:Date.now(),
}

const Home = () => {
    const [formData,setFormData]= useState<Entry>(initialState);
  

    const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        addStudent(formData)
        setFormData(initialState)



    }

    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
      const {name,value}=e.target;
        setFormData((prev)=>{
        return {...prev,[name]:name==="vote" ? +value:value}
    })
  }


  return (
    <div>
        <h3>Nominate</h3>
        <form onSubmit={handleSubmit}>
            <input type="url" placeholder='Image' onChange={(e)=>handleChange(e)} name="image" value={formData.image} /><br/>
            <input type="text" placeholder='Name' onChange={(e)=>handleChange(e)} name="name" value={formData.name}/><br/>
            <input type="text" placeholder='Student Code' onChange={(e)=>handleChange(e)} name="code" value={formData.code}/><br/>
            <input type="text" placeholder='Batch' onChange={(e)=>handleChange(e)} name="batch" value={formData.batch}/><br/>
           <br/>
            <button>Nominate</button>
        </form>
    </div>
  )
}

export default Home;
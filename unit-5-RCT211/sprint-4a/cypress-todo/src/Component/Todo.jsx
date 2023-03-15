import React, { useEffect, useState } from 'react'
import axios from 'axios';

export const Todo = () => {

    const [ value , setValue ] = useState("");
    const [data , setData] = useState([])

    const handleAdd = (e) => {
        e.preventDefault();
    
   const payload ={
        id:Date.now(),
        title:value,
        status:false
    }

    axios.post(`http://localhost:8080/todos`,payload)
    .then((res)  => setData([...data, res.data]))
    
   setValue("")
    
   };

    const getdata = () => {
        axios.get(" http://localhost:8080/todos").then((res) => setData(res.data))
    }

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8080/todos/${id}`)

        const newData= data.filter((el) => el.id === id);
        setData([...newData])

    }

    useEffect(() => {
        getdata();
    },[]);

    const handleToggle = (id) => {
        data.map((el) =>{
            el.id===id? (el.status =!el.status): el
        })
    }

  return (
    <form onSubmit={handleAdd}>
       <input
       type="text" 
       placeholder="Write something here..."
       value={value}
       onChange={(e)=>setValue(e.target.value)}
       />
       <button type="submit">Add</button>

       <div>
        {
              data.map((el) => {
                   <div key={el.id}>
                    <h3>{el.title}</h3>-<p onClick={handleToggle(el.id)}>{el.status ? "True" : "False"}</p>
                    <button onClick={() =>handleDelete(el.id)}>DELETE</button>
                   </div>
              })
            }
       </div>

    </form>
   
  );
};



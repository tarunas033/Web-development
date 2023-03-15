import React from 'react'
import { updateVote } from '../api'
import { Student } from '../constants'


interface stuCard extends Student {
  handleChange:()=> void
}

const StudentCard = ({id,name,image,code,batch,vote,handleChange}:stuCard) => {
  const handleVote=()=>{
    updateVote(id).then(()=>handleChange())
  }
  return (
    <div>
      <img src={image} alt=""/>
      <p>Name:{name}</p>
      <p>Batch:{batch}</p>
      <p>Student Code:{code}</p>
      <button onClick={handleVote}>Vote</button>
      <p>Vote Count:{vote}</p>
    </div>
  )
}

export default StudentCard
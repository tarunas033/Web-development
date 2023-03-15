import './App.css';
import { useState } from 'react';

function App() {
  const [count , setCount] =useState(0)
  return (
    <div className="App">
      <h3 className='counter_value'>Counter:{count}</h3>
      <button className='add_btn' onClick={()=>setCount((prev) => prev + 1)}>Add</button>
      <button className='reduce_btn' onClick={()=>setCount((prev) => prev - 1)}>Reduce</button>

     
    </div>
  );
}

export default App;

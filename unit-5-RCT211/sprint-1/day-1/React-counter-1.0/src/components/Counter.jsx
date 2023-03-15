import React ,{ useState } from 'react';


const Counter = () => {
    const [count,setCounter] = useState(0)
  return (
    <div>
      <h2 data-testid="counter-header">Counter</h2>
        <h3 data-testid="count">{count}</h3>
        <button onClick={() =>setCounter((prev) => prev + 1)} data-testid="add-btn">+</button>
        <button onClick={() =>setCounter((prev) => prev - 1)} data-testid="subtract-btn">-</button>
        <button onClick={() =>setCounter((prev) => prev * 2)} data-testid="double-btn">Double</button>
    </div>
  )
}

export default Counter;



import React , {useState} from 'react';
import Head from "next/head";

const Counter = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
        <Head>
            <title>Counter App</title>
        </Head>
     <h1>Counter :{count}</h1>
     <div>
        <button onClick ={() => setCount(count-1)}>DEC</button>
        <button onClick ={() => setCount(count+1)}>INC</button>
    </div>
    </div>


  )
}

export default Counter;

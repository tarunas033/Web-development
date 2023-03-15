import { useState } from "react"
import React from "react";
import Button from "./Button";

function Counter (){
    const [value,setValue] = useState<number>(0)
    return (
        <div>
            <h1>{value}</h1>
            <Button handleOnClick={()=>setValue(value-1)} text="-"/>
            <Button handleOnClick={()=>setValue(value+1)} text="+"/>
        </div>
    )
}

export default  Counter;

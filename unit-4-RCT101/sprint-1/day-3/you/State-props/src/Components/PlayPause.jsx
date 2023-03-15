// Write Code here
// do a default export
import React from "react"

function PlayPause(){
    const[check,setCheck] = React.useState(false)
    function handle(){
        {setCheck(!check)}
    }
    return (
        <div>
            <h1>{check? "The state is playing":"The state is paused"}</h1>
            <button onClick={handle}>{check?"playing":"paused"}</button>
        </div>
    )
} 
export default PlayPause
import React , {memo, useMemo }  from 'react';

const heavyTask = (time) => {
        let start = Date.now();
        while(Date.now() - start < time){
            continue;
        }
     
    };

const customCheck = (prev ,curr) => {
    return (
    prev.id === curr.id && 
    prev.title ===curr.title &&
    prev.status === curr.status 
    ) 
}

export const Todo = memo(
    ({ id, title, status, handleDelete, handleToggle}) => {
      // console.log("Re-rendering");
    
      heavyTask(200);
      
     return (
        <div>
          <h3>{title}</h3>
          <p>{status ? "true" : "false"}</p>
          <button onClick={() =>handleDelete(id)}>Delete</button>
          <button onClick={() =>handleToggle(id)}>Toggle</button>
        </div>
      );
    },
    customCheck()
 
    );






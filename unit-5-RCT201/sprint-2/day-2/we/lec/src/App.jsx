import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getTodos,updateTodos } from "./redux/action";

function App() {
  const store = useSelector((store) => store.task);
  const dispatch = useDispatch();
  useEffect(() => {
    getTodos(dispatch);
  }, []);
  return (
    <div className="App">
      {/* <Inputvalue/> */}
      <br/>
      <br/>
      {store &&
        store.map((el) => {
          return (
            <div key={el.id}>
              <h3>{el.value}</h3>
              <button onClick={()=>dispatch(updateTodo(el.id,el.isCompleted=!el.isCompleted))}>{el.isCompleted ? "completed" : "Not-Completed"}</button>
            </div>
          );
        })}
    </div>
  );
}

export default App;

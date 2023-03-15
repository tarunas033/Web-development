import React from "React";
import {useDispatch , useSelector} from "react-redux";
import {decrement , increment} from "../redux/action";

const CounterApp = () => {
    console.log("CounterApp")
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.count);

    return (
<div>
    <h1>CounterApp :{count}</h1>
    <div>
        <button onClick = {() =>dispatch(decrement())}>-</button>
        <button onClick = {() =>dispatch(increment())}>+</button>
    </div>
</div>
  );
};
export default CounterApp;
import React ,{useState}from "react";
import { store } from "../Redux/store";


const CounterValue = () => {

  const counter = 0; //get the counter value from the Redux store

  const [force ,setForce] = useState();

  const {getState , subscribe } = store;

  subscribe(()  => {
       setForce((prev) => prev + 1)
  })

  return <div data-testid="counterValue">{getState().counter}</div>;
};

export default CounterValue;

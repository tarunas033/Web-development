import React from "react";
import { store } from "../Redux/store";
import { handleAddActionObj } from "../Redux/action";
import { handleReduceActionObj } from "../Redux/action";
const CounterButtons = () => {
    const { dispatch} = store;

  return (
    <div data-testid="counterButtons">
      <button data-testid="addButton"  onClick={()  =>dispatch(handleAddActionObj(1))}>ADD</button>
      <button data-testid="reduceButton"  onClick={() =>dispatch(handleReduceActionObj(1))}>REDUCE</button>
    </div>
  );
};

export default CounterButtons;

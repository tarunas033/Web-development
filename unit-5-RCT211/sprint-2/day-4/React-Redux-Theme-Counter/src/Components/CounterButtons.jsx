import React from "react";
import { useDispatch,useSelector} from "react-redux";
import { handleAdd, handleReduce} from "../Redux/action";
const CounterButtons = () => {
  const dispatch=useDispatch();
  
  const {theme}=useSelector((store)=>store.themeReducer)
  return (
    <div data-testid="counterButtons">
      <button data-testid="addButton" onClick={()=>dispatch(handleAdd(1))}>ADD</button>
      <button data-testid="reduceButton" onClick={()=>dispatch(handleReduce(1))}>REDUCE</button>
    </div>
  );
};

export default CounterButtons;

import React from "react";
import CounterButtons from "./CounterButtons";
import CounterValue from './CounterValue'
import Theme from "./Theme";
import { useSelector } from "react-redux";
import "./counter.css"
const Counter = () => {
  const {theme}=useSelector((store)=>store.themeReducer)
  console.log(theme)
  return (
    // the following div classname should be chnaged accrding to the theme
     
    <div data-testid="counter" className={theme==="light" ? "light_theme" :"dark_theme"}>
       <Theme/>
      <h1>Counter</h1>
      {/* Import CounterValue component here and DO NOT PASS anything through props, for this component */}
        <CounterButtons/>
        <CounterValue/>
      {/* Import CounterButtons component here and DO NOT PASS anything through props, for this component */}
    </div>
  );
};

export default Counter;

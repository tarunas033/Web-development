import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "./components/Button";
import Counter from "./components/Counter"

function App() {
  return (
    <div className="App">
     <Button buttontext={''} children={undefined}/>
     <Counter/>
    </div>
  );
}

export default App;

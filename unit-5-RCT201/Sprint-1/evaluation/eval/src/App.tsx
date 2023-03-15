import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddCity from "./Components/AddCity";
import AddCountry from './Components/AddCountry';
import CityCountryTable from './Components/CityCountryTable';

function App() {
  return (
    <div className="App">
    <h1>Hiii</h1>
     <AddCity/>
     <AddCountry/>
     <CityCountryTable/>
    </div>
  );
}

export default App;

import React from 'react';
import {Routes,Route} from "react-router-dom";
import Home from './Home';
import Result from './Result';
import Vote from './Vote';

const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/result" element={<Result/>}/>
            <Route path ="/vote" element={<Vote/>}/>
            <Route path="*" element={<h3>Page Not Found</h3>}/>
        </Routes>
    </div>
  )
}

export default MainRoutes
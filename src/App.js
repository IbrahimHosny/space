import React, {Fragment} from 'react';
// import {BrowseRouter} from "react-router-dom"
import './App.css';
import './index.css'
import Navbar from './components/Navbar.js';
import { Route, Routes } from 'react-router';
import Home from './components/Home';
import Destination from './components/Destination';
import Crew from './components/Crew';
import Technology from './components/Technology';
import data from './components/data.json';

export const dataContext = React.createContext();
function App() {
  return (
    <Fragment>
    <Navbar />
    <dataContext.Provider value={data}>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/destination' element={<Destination />} />
    <Route path='/crew' element={<Crew />} />
    <Route path='/technology' element={<Technology />} />
    </Routes>
    </dataContext.Provider>
    </Fragment>
  );
}

export default App;

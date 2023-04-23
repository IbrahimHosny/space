import {Fragment} from 'react';
// import {BrowseRouter} from "react-router-dom"
import './App.css';
import './index.css'
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router';
import Home from './components/Home';
import Destination from './components/Destination';

function App() {
  return (
    <Fragment>
    <NavBar />
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/destination' element={<Destination />} />
    </Routes>
    </Fragment>
  );
}

export default App;

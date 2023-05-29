import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';

function App(){

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path='/home/:id' element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;




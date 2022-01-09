import React from 'react';
import Home from './pages/Home/home'
import Navbar from './components/Navbar';

import { Login } from './pages/Login/Login';
import { Signup } from './pages/Signup/Signup';

import {
	BrowserRouter as Router,
	Route,
	Routes
 } from 'react-router-dom'


function App() {
  return (
      <Router>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        </Routes>
   </Router>  

);
}

export default App;

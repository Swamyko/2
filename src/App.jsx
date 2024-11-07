import './App.css'
import React from "react";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";

import Layout from './pages/Layout';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/dashboard';
function App() {

  return (
   <HashRouter>
   <Routes>
    <Route path='/' element={<Layout/>}/>
    
    <Route path="login" element={<Login/>}/>
    <Route path="register" element={<Register/>}/>
    <Route path="/dashboard" element={<Dashboard />} />
    
    
   </Routes>
   
   </HashRouter> 
  )
}

export default App
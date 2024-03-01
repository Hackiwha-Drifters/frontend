import React from 'react'
import Home from '@/pages/Home';
import { Routes, Route } from "react-router-dom";
import Signup from '@/pages/Signup';
import Signupdoctor from '@/pages/Signupdoctor';
import Login from '@/pages/Login';
import Doctormain from '@/pages/Doctormain';
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/signupdoc" element={<Signupdoctor/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/doctormain" element={<Doctormain/>}></Route>

    </Routes>
  );
};

export default Routers;
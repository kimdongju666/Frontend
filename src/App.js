import './App.css';
import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './Components/SignIn';
import Login from './Components/Login';
import Home from './Components/Home';
import Hospital from './Pages/Hospital';
import Solution from './Pages/Solution';
import Danger from './Pages/Danger';
import Community from './Pages/Community';
import LoginHeader from './Components/LoginHeader';
import LoginHome from './Components/LoginHome';
import ScrollToTop from './ScrollTop';


function App() {
  const [test, setTest] = useState("");
  

  return (

    <div>
      
      <BrowserRouter>
      <ScrollToTop />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/login" element={<Login />} />
          <Route path="/hospital" element={<Hospital />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/danger" element={<Danger />} />
          <Route path="/community" element={<Community />} />
          <Route path="/loginheader" element={<LoginHeader />} />
          <Route path="/loginhome" element={<LoginHome />} />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
    
  );
}

export default App;

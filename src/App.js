import './App.css';
import React, { useEffect, useState} from 'react';
import axios from 'axios';
import Header from './Components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './Components/SignIn';
import Login from './Components/Login';


function App() {
  const [test, setTest] = useState("");

  function callBack(str) {
    setTest(str);
  }

  useEffect(() => {
    axios({
      url: 'http://localhost:8080/',
      method: 'GET'
    })
    .then((res) => {
      callBack(res.data);
    })
  }, []);
  

  return (
    <div>
      <BrowserRouter>
        <Header/>
      <div className="App">
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
    
  );
}

export default App;

import './App.css';
import React, { useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  const [test, setTest] = useState("");

  function callBack(str) {
    setTest(str);
  }

  useEffect(() => {
    axios({
      url: 'http://localhost:8080/....',
      method: 'GET'
    })
    .then((res) => {
      callBack(res.data);
    })
  }, []);
  

  return (
    <div className="App">
      짜잔
      {test}
    </div>
  );
}

export default App;

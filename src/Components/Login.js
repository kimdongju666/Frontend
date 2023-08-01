import axios from "axios";
import React, { useEffect, useState } from "react";
import header from "./Header";
import Footer from "./Footer";
import Header from "./Header";

function Login() {
  const [userid, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const [idValid, setIdValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);


  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post("/members/login", {
        userid: userid,
        password: password,
        username: username,
      })
      .then((response) => {
        console.log(response);
        alert("Login successful");
        localStorage.setItem("id", response.data.data.userid);
        localStorage.setItem("pw", response.data.data.password);
        localStorage.setItem("username", response.data.data.username);
        localStorage.setItem("authToken", response.data.data.jwtToken);
        window.location.replace("http://localhost:3000/LoginHome");
      })

      .catch(function (error) {
        alert("Login failed");
      });
  };

  
  const handleId = (e) => {
    setUserId(e.target.value);
    const regex = /^[a-z0-9_]{4,12}$/;
    if (regex.test(userid)) {
      setIdValid(true);
    } else {
      setIdValid(false);
    }
  };
  const handlePw = (e) => {
    setPassword(e.target.value);
    const regex = /^(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]|.*[0-9]).{7,24}$/;
    if (regex.test(password)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };

  useEffect(() => {
    if (idValid && pwValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [idValid, pwValid]);

  return (
    <>
      <Header />
      <div className="page">
        <div className="titleWrap">Login</div>
        <div className="contentWrap">
          <div className="inputTitle">Id</div>
          <div className="inputWrap">
            <input
              type="text"
              className="input"
              placeholder="Enter 4-12 English lowercase letters and numbers"
              value={userid}
              onChange={handleId}
            />
          </div>
          <div className="errorMessage">
            {!idValid && userid.length > 0 && (
              <div>Please enter a valid ID</div>
            )}
          </div>

          <div style={{ marginTop: "26px" }} className="inputTitle">
            Password
          </div>
          <div className="inputWrap">
            <input
              type="password"
              className="input"
              placeholder="Enter at least 8 characters, including case, number, and special characters"
              value={password}
              onChange={handlePw}
            />
          </div>
          <div className="errorMessage">
            {!pwValid && password.length > 0 && (
              <div>
                Enter at least 8 characters, including case, number, and special characters
              </div>
            )}
          </div>
        </div>
        <button
          disabled={notAllow}
          onClick={onSubmitHandler}
          className="bottomButton"
        >
          Login
        </button>
      </div>

    </>
  );
}

export default Login;
import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import '../CSS/SignIn.css';
import Footer from "./Footer";

function SignIn() {
  const [username, setusername] = useState("");
  const [userid, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [nameValid, setNameValid] = useState(false);
  const [idValid, setIdValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post("/members/join", {
        username: username,
        userid: userid,
        password: password,
        email: email,
      })
      .then(() => {
        alert("You have successfully registered!");
      })

      .catch(function (error) {
        alert("Failed to register as a member!");
      });
  };

  const handleName = (e) => {
    setusername(e.target.value);
    const regex = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{2,}$/;
    if (regex.test(username)) {
      setNameValid(true);
    } else {
      setNameValid(false);
    }
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
    const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{7,}$/;
    if (regex.test(password)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z0-9]+/;
    if (regex.test(email)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  useEffect(() => {
    if (nameValid && idValid && pwValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [nameValid, idValid, pwValid]);

  return (
    <>
      <Header />
      <div className="page">
        <div className="titleWrap">Sign up</div>

        <div className="contentWrap">
          <div className="inputTitle">Name</div>
          <div className="inputWrap">
            <input
              type="text"
              className="input"
              placeholder="kevin"
              value={username}
              onChange={handleName}
            />
          </div>
          <div className="errorMessage">
            {!nameValid && username.length > 0 && (
              <div>Please enter a valid name</div>
            )}
          </div>

          <div style={{ marginTop: "26px" }} className="inputTitle">
            Id
          </div>
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
            Email
          </div>
          <div className="inputWrap">
            <input
              type="text"
              className="input"
              placeholder="Email@example.com"
              value={email}
              onChange={handleEmail}
            />
          </div>
          <div className="errorMessage">
            {!emailValid && email.length > 0 && (
              <div>Please enter a valid Email</div>
            )}
          </div>

          <div style={{ marginTop: "26px" }} className="inputTitle">
            password
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
          submit
        </button>
      </div>

    </>
  );
}

export default SignIn;
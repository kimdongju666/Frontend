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
        alert("회원가입에 성공했습니다!");
      })

      .catch(function (error) {
        alert("회원가입에 실패했습니다!");
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
        <div className="titleWrap">회원 가입</div>

        <div className="contentWrap">
          <div className="inputTitle">이름</div>
          <div className="inputWrap">
            <input
              type="text"
              className="input"
              placeholder="홍길동"
              value={username}
              onChange={handleName}
            />
          </div>
          <div className="errorMessage">
            {!nameValid && username.length > 0 && (
              <div>올바른 이름을 입력해주세요.</div>
            )}
          </div>

          <div style={{ marginTop: "26px" }} className="inputTitle">
            아이디
          </div>
          <div className="inputWrap">
            <input
              type="text"
              className="input"
              placeholder="4~12자 영문소문자, 숫자 입력"
              value={userid}
              onChange={handleId}
            />
          </div>
          <div className="errorMessage">
            {!idValid && userid.length > 0 && (
              <div>올바른 아이디를 입력해주세요.</div>
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
              <div>올바른 Email을 입력해주세요.</div>
            )}
          </div>

          <div style={{ marginTop: "26px" }} className="inputTitle">
            비밀번호
          </div>
          <div className="inputWrap">
            <input
              type="password"
              className="input"
              placeholder="영문대소문자, 숫자, 특수문자 포함 8자 이상 입력"
              value={password}
              onChange={handlePw}
            />
          </div>
          <div className="errorMessage">
            {!pwValid && password.length > 0 && (
              <div>
                영문대소문자, 숫자, 특수문자 포함 8자 이상 입력해주세요.
              </div>
            )}
          </div>
        </div>
        <button
          disabled={notAllow}
          onClick={onSubmitHandler}
          className="bottomButton"
        >
          확인
        </button>
      </div>

    </>
  );
}

export default SignIn;
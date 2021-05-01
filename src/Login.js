import React, { useState } from "react";
import "./Login.css";
import logo from "./amazon_dark.png";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    // Firebase login
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();
    // Firebase register
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // Successfully creates a new user with email & password
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      {/* logo */}
      <Link to="/">
        <img className="login_logo" src={logo} alt="logo" />
      </Link>
      <div className="login_container">
        <h1>Sign In</h1>
        <form action="">
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={login} className="login_signInButton">
            Sign in
          </button>
        </form>
        <p>
          By signing-in you agree to the amazon fake clone condition of use &
          Sale.Please see our privacy notice
        </p>
        <button
          type="submit"
          onClick={register}
          className="login_registerButton"
        >
          Create your amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;

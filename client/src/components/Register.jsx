import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  faTimes,
  faCheck,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { baseUserUrl } from "../constants";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
  const userRef = useRef();
  const errorRef = useRef();
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [validUserName, setValidUserName] = useState(false);
  const [userNameFocus, setUserNameFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [matchPassword, setMatchPassword] = useState("");
  const [validMatchPassword, setValidMatchPassword] = useState(false);
  const [matchPasswordFocus, setMatchPasswordFocus] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const userResult = USER_REGEX.test(userName);
    setValidUserName(userResult);
  }, [userName]);

  useEffect(() => {
    const passwordResult = PWD_REGEX.test(password);
    setValidPassword(passwordResult);
    const matchResult = password === matchPassword;
    setValidMatchPassword(matchResult);
  }, [password, matchPassword]);

  useEffect(() => {
    setErrorMessage("");
  }, [userName, password, matchPassword]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const v1 = USER_REGEX.test(userName);
    const v2 = PWD_REGEX.test(password);
    if (!v1 || !v2) {
      return;
    }
    try {
      const response = await fetch(baseUserUrl + "/register", {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user: { userName, password } }),
      }).then((response) => response.json());
      console.log("New user is added:", response);
      setUserName("");
      setPassword("");
      setMatchPassword("");
      // navigate("/login");
    } catch (err) {
      if (!err?.response) {
        setErrorMessage("No Server Response");
      } else if (err.response?.status === 400) {
        setErrorMessage("This name already exists");
      } else {
        setErrorMessage("Registration Failed");
      }
      errorRef.current.focus();
    }
  };

  return (
    <section className="register-section">
      <p
        ref={errorRef}
        className={errorMessage ? "errorMessage" : "offscreen"}
        aria-live="assertive"
      >
        {errorMessage}
      </p>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          Username:
          <FontAwesomeIcon
            icon={faCheck}
            className={validUserName ? "valid" : "hide"}
          />
          <FontAwesomeIcon
            icon={faTimes}
            className={validUserName || !userName ? "hide" : "invalid"}
          />
        </label>
        <input
          type="text"
          id="username"
          ref={userRef}
          autoComplete="off"
          onChange={(event) => setUserName(event.target.value)}
          value={userName}
          required
          aria-invalid={validUserName ? "false" : "true"}
          aria-describedby="userinfo"
          onFocus={() => setUserNameFocus(true)}
          onBlur={() => setUserNameFocus(false)}
        />
        <p
          id="userinfo"
          className={
            userNameFocus && userName && !validUserName
              ? "nameinfo"
              : "offscreen"
          }
        >
          <FontAwesomeIcon icon={faInfoCircle} />
          Contains from 4 to 24 characters.
          <br />
          Must begin with a letter.
          <br />
          Letters, numbers, underscores, hyphens allowed.
        </p>

        <label htmlFor="password">
          Password:
          <FontAwesomeIcon
            icon={faCheck}
            className={validPassword ? "valid" : "hide"}
          />
          <FontAwesomeIcon
            icon={faTimes}
            className={validPassword || !password ? "hide" : "invalid"}
          />
        </label>
        <input
          type="password"
          id="password"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
          required
          aria-invalid={validPassword ? "false" : "true"}
          aria-describedby="passwordinfo"
          onFocus={() => setPasswordFocus(true)}
          onBlur={() => setPasswordFocus(false)}
        />
        <p
          id="passwordinfo"
          className={passwordFocus && !validPassword ? "nameinfo" : "offscreen"}
        >
          <FontAwesomeIcon icon={faInfoCircle} />
          8 to 24 characters.
          <br />
          Must include uppercase and lowercase letters, a number and a special
          character.
          <br />
          Allowed special characters:{" "}
          <span aria-label="exclamation mark">!</span>{" "}
          <span aria-label="at symbol">@</span>{" "}
          <span aria-label="hashtag">#</span>{" "}
          <span aria-label="dollar sign">$</span>{" "}
          <span aria-label="percent">%</span>
        </p>
        <label htmlFor="matchpassword">
          Confirm Password:
          <FontAwesomeIcon
            icon={faCheck}
            className={validMatchPassword && matchPassword ? "valid" : "hide"}
          />
          <FontAwesomeIcon
            icon={faTimes}
            className={
              validMatchPassword || !matchPassword ? "hide" : "invalid"
            }
          />
        </label>
        <input
          type="password"
          id="matchpassword"
          onChange={(event) => setMatchPassword(event.target.value)}
          value={matchPassword}
          required
          aria-invalid={validMatchPassword ? "false" : "true"}
          aria-describedby="matchpasswordinfo"
          onFocus={() => setMatchPasswordFocus(true)}
          onBlur={() => setMatchPasswordFocus(false)}
        />
        <p
          id="matchpasswordinfo"
          className={
            matchPasswordFocus && !validMatchPassword ? "nameinfo" : "offscreen"
          }
        >
          <FontAwesomeIcon icon={faInfoCircle} />
          Must match the first password input field.
        </p>
        <button
          disabled={
            !validUserName || !validPassword || !validMatchPassword
              ? true
              : false
          }
        >
          Register
        </button>
      </form>
      <p>Do you have the account already?</p>
      <Link to="/login">
        <p>Log in</p>
      </Link>
    </section>
  );
};

export default Register;

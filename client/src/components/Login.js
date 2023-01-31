import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { SignContext } from "../context/SignContext";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [sign, setSign] = useContext(SignContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    setUser("");
    setPassword("");
    setSign(true);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    setSign(false);
  };
  return (
    <>
      {sign ? (
        <div>
          <h1>You are logged in!</h1>
          <Link to="/">
            <p>Go to the Home page</p>
          </Link>
          <button onClick={handleLogout}>Log out</button>
        </div>
      ) : (
        <div className="login">
          <h1>Sign in</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              autoComplete="off"
              onChange={(event) => setUser(event.target.value)}
              value={user}
              required
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
              required
            />
            <button>Sign In</button>
          </form>
          <p>Don't have an account yet?</p>
          <Link to="/">
            <p>Sign up</p>
          </Link>
        </div>
      )}
    </>
  );
};

export default Login;

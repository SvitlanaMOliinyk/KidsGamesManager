import { useState, useRef, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { baseUserUrl } from "../constants";
import { SignContext } from "../context/SignProvider";
import { FavoritesContext } from "../context/FavoritesContext";

const Login = () => {
  const { setSign, setIsLoggedIn } = useContext(SignContext);
  const { setFavoriteIds } = useContext(FavoritesContext);
  const userRef = useRef();
  const errorRef = useRef();
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrorMessage("");
  }, [userName, password]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(baseUserUrl + "/login", {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user: { userName, password } }),
      }).then((response) => response.json());
      const name = response.user.userName;
      const psw = response.user.password;
      const _id = response.user._id;
      const userFavoritesIds = response.user.favoriteGames;
      setSign({ name, psw, _id, userFavoritesIds });
      setIsLoggedIn(true);
      setUserName("");
      setPassword("");
      setFavoriteIds(userFavoritesIds);
      localStorage.setItem("favoriteIds", JSON.stringify(userFavoritesIds));
      navigate("/");
    } catch (err) {
      if (!err?.response) {
        setErrorMessage("No Server Response");
      } else if (err.response?.status === 400) {
        setErrorMessage("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrorMessage("Unauthorized");
      } else {
        setErrorMessage("Registration Failed");
      }
      errorRef.current.focus();
    }
  };

  //
  /* <button onClick={handleLogout}>Log out</button> */
  return (
    <section className="content login">
      <p
        ref={errorRef}
        className={errorMessage ? "errorMassage" : "offscreen"}
        aria-live="assertive"
      >
        {errorMessage}
      </p>
      <h1>Log in</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          ref={userRef}
          autoComplete="off"
          onChange={(event) => setUserName(event.target.value)}
          value={userName}
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
        <button>Log in</button>
      </form>
      <p>Don't have an account yet?</p>
      <Link to="/register">
        <p>Sign up</p>
      </Link>
    </section>
  );
};

export default Login;

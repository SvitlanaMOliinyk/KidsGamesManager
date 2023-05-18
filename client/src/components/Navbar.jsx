import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { SignContext } from "../context/SignProvider";
import { FavoritesContext } from "../context/FavoritesContext";
import { baseUserUrl } from "../constants";

const Navbar = () => {
  const { sign, setSign } = useContext(SignContext);
  const { favoriteIds, setFavoriteIds } = useContext(FavoritesContext);
  const navigate = useNavigate();
  const [isLoggedOut, setLoggedOut] = useState(false);

  const handleLogout = () => {
    setLoggedOut(true);
    navigate("/home");
  };

  useEffect(() => {
    if (isLoggedOut) {
      fetch(baseUserUrl + "/update", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ favoriteGames: favoriteIds, id: sign._id }),
      }).then((response) => console.log("Your favorite is updated:", response));
      setFavoriteIds([]);
      setSign({});
      setLoggedOut(false);
    }
  }, [isLoggedOut]);

  return (
    <header className="navbar">
      <h3>KIDS' GAMES MANAGER</h3>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>

        <NavLink to="find">Find</NavLink>

        {sign?.name ? (
          <>
            <NavLink to="add">Add</NavLink>
            <NavLink to="favorite">Favorites</NavLink>
            <NavLink
              onClick={handleLogout}
              to="/"
              style={{
                color: "#F5F6F3",
                background: "#CB5834",
              }}
            >
              Log out
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to="register">Register</NavLink>
            <NavLink
              to="login"
              style={{
                color: "#F5F6F3",
                background: "#CB5834",
              }}
            >
              Log In
            </NavLink>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

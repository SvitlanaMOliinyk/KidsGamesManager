import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { SignContext } from "../context/SignProvider";

const Navbar = () => {
  const { sign, setSign } = useContext(SignContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    setSign({});
    navigate("/register");
  };
  return (
    <header className="navbar">
      <h3>KIDS' GAMES MANAGER</h3>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="add">Add</NavLink>
        
        <NavLink to="find">Find</NavLink>
        <NavLink to="favorite">Favorites</NavLink>

        {sign?.name ? (
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

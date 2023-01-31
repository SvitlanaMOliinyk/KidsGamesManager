import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="navbar">
      <h1>KIDS' GAMES MANAGER</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="add">Add</NavLink>
        <NavLink to="help">Help</NavLink>
        <NavLink to="find">Find</NavLink>
        <NavLink to="favorite">Favorites</NavLink>
        <NavLink
          to="login"
          style={{
            color: "#F5F6F3",
            background: "#CB5834",
          }}
        >
          Log In
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;

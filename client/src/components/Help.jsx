import { NavLink, Outlet } from "react-router-dom";
const Help = () => {
  return (
    <section className="content help-app">
      <h2>Help page</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolor
        assumenda, itaque nesciunt alias voluptatum nobis blanditiis eos
        officiis aperiam earum eum vel quas odio optio, distinctio ab sunt unde
        incidunt ipsum omnis amet magnam accusantium aut! Excepturi, cupiditate
        iusto!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus
        veniam ducimus eligendi nihil, cumque ab eveniet modi architecto quidem,
        non odit saepe facere voluptas esse mollitia illo fuga exercitationem id
        dicta iusto eaque numquam quaerat ad! Fugit velit beatae laudantium.
      </p>
      <nav>
        <NavLink
          to="questions"
          style={{
            color: "#F5F6F3",
            background: "#CB5834",
          }}
        >
          Visit Question Page
        </NavLink>
      </nav>
      <Outlet />
    </section>
  );
};

export default Help;

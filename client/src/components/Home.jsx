import playing from "./assets/playing-children.jpeg";
import jumping from "./assets/jumping.jpeg";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <section className="content home">
      <div className="welcome">
        <h2>Welcome</h2>

        <span
          style={{
            color: "#cb5834",
            textShadow: "2px 2px 7px #d69469",
            fontSize: "2rem",
          }}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            <br />
            Excepturi, cupiditate iusto!
          </p>
        </span>
      </div>
      <div className="white">
        <div className="all-games">
          <div className="overlay">
            <p>
              Lorem ipsum dolor sit, <br />
              amet consectetur adipisicing elit.
            </p>
          </div>
          <NavLink
            to="games"
            style={{
              color: "limegreen",
              border: "2px solid limegreen",
              fontSize: "2rem",
              textAlign: "center",
            }}
          >
            All games
          </NavLink>
        </div>
      </div>

      <div className="playing">
        <div className="img-playing-container">
          <img
            className="img-playing"
            src={playing}
            alt="playing"
            width={300}
          />
          <h2>Heading</h2>
        </div>
        <p>
          Rerum dolor assumenda, itaque nesciunt alias voluptatum nobis
          blanditiis eos officiis aperiam earum eum vel quas odio optio,
          distinctio ab sunt unde incidunt ipsum omnis amet magnam accusantium
          aut!
        </p>
      </div>

      <div className="card-part">
        <div className="photos">
          <img
            className="img-jumping"
            src={jumping}
            alt="jumping"
            width={300}
          />
          <h2>Heading</h2>
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Necessitatibus veniam ducimus eligendi nihil, cumque ab eveniet modi
          architecto quidem, non odit saepe facere voluptas esse mollitia illo
          fuga exercitationem id dicta iusto eaque numquam quaerat ad! Fugit
          velit beatae laudantium.
        </p>
      </div>
    </section>
  );
};

export default Home;

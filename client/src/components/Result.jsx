import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

const Result = ({ game, error }) => {
  const { handleFavorites } = useContext(FavoritesContext);
  const {
    _id,
    name,
    age,
    image,
    location,
    kind,
    rules,
    minPlayers,
    maxPlayers,
  } = game;

  return (
    <section className="result">
      <li className="game" key={_id}>
        {Object.keys(game).length ? (
          <div className="rules">
            <div className="image-container">
              <img
                src={image?.url}
                alt={name}
                className="image-game"
                width="300"
              />
              <div className="game-name">
                <h3>{name}</h3>
              </div>
            </div>
            <table>
              <tr>
                <p>
                  From{" "}
                  <span style={{ color: "red", fontSize: "larger" }}>
                    {age}
                  </span>{" "}
                  years old
                </p>
              </tr>
              <tr>
                <p>
                  Number of players:{" "}
                  <span style={{ color: "red" }}>
                    {minPlayers} - {maxPlayers}
                  </span>
                </p>
              </tr>
              <tr>
                <p>
                  Place: <span style={{ fontStyle: "italic" }}>{location}</span>
                </p>
              </tr>
              <tr>
                <p>
                  Kind of game:{" "}
                  <span style={{ fontStyle: "italic" }}>{kind}</span>
                </p>
              </tr>
            </table>
            <div className="game-rules">
              <p>
                <span
                  style={{ textDecoration: "underline", fontStyle: "italic" }}
                >
                  Rules.
                </span>{" "}
                {rules}
              </p>
            </div>
            <button className="favorites" id={_id} onClick={handleFavorites}>
              Save in Favorites
            </button>
          </div>
        ) : (
          error
        )}
      </li>
    </section>
  );
};

export default Result;

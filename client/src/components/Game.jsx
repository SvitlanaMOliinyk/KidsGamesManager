import { useContext } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { FavoritesContext } from "../context/FavoritesContext";
import { baseUrl } from "../constants";

export default function Game() {
  const { id } = useParams();
  const urlGet = baseUrl + `/${id}`;
  const { data: game, isLoading, error } = useFetch(urlGet);
  const { handleFavorites } = useContext(FavoritesContext);
  const { _id, name, age, url, location, kind, rules, minPlayers, maxPlayers } =
    game;

  return (
    <section className="content section-game">
      <li className="game" key={_id}>
        <div className="rules">
          <div className="image-container">
            <img src={url} alt={name} className="image-game" width="300" />
            <div className="game-name">
              <h3>{name}</h3>
            </div>
          </div>
          <table>
            <tr>
              <p>
                From{" "}
                <span style={{ color: "red", fontSize: "larger" }}>{age}</span>{" "}
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
        </div>
        {!isLoading ? (
          !error ? (
            <div className="buttonDiv">
              <button className="favorites" id={_id} onClick={handleFavorites}>
                Save in Favorites
              </button>
            </div>
          ) : (
            <h3>{error}</h3>
          )
        ) : (
          <h3>Loading...</h3>
        )}
      </li>
    </section>
  );
}

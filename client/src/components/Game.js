import { useContext } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { FavoritesContext } from "../context/FavoritesContext";
import { baseUrl } from "../constants";

const Game = () => {
  const { id } = useParams();
  const url = baseUrl + `/${id}`;
  const { data: game, isLoading, error } = useFetch(url);
  const [favoriteIds, handleFavorites] = useContext(FavoritesContext);

  return (
    <li className="game" key={game.id}>
      <div className="rules">
        <h3>{game.name}</h3>
        <h5>{game.age}+</h5>
        <p>
          Number of players: {game.minPlayers} - {game.maxPlayers}
        </p>
        <p>{game.location}</p>
        <p>{game.kind}+</p>
        <p>{game.rules}</p>
      </div>
      {!isLoading ? (
        !error ? (
          <div className="buttonDiv">
            <button
              className="favorites"
              id={game.id}
              onClick={handleFavorites}
            >
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
  );
};

export default Game;

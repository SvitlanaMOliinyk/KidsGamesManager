import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

const Result = ({ game, error }) => {
  const [favoriteIds, handleFavorites] = useContext(FavoritesContext);

  return (
    <li className="game" key={game.id}>
      {Object.keys(game).length ? (
        <div className="rules">
          <h3>{game.name}</h3>
          <p>{game.age}+</p>
          <p>
            Number of players: {game.minPlayers} - {game.maxPlayers}
          </p>
          <p>{game.location}</p>
          <p>{game.kind}+</p>
          <p>{game.rules}</p>
          <button className="favorites" id={game.id} onClick={handleFavorites}>
            Save in Favorites
          </button>
        </div>
      ) : (
        error
      )}
    </li>
  );
};

export default Result;

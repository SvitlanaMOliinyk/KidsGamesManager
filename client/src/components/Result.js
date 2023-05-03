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
    <li className="game" key={_id}>
      {Object.keys(game).length ? (
        <div className="rules">
          <h3>{name}</h3>
          <div className="image-container">
          <img src={image?.url} alt={name} className="image-game" width="300" />
        </div>
          <p>{age}+</p>
          <p>
            Number of players: {minPlayers} - {maxPlayers}
          </p>
          <p>{location}</p>
          <p>{kind}+</p>
          <p>{rules}</p>
          <button className="favorites" id={_id} onClick={handleFavorites}>
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

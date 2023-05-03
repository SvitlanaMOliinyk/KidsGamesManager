import { useContext } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { FavoritesContext } from "../context/FavoritesContext";
import { baseUrl } from "../constants";

export default function Game() {
  const { id } = useParams();
  const url = baseUrl + `/${id}`;
  const { data: game, isLoading, error } = useFetch(url);
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
      <div className="rules">
        <h3>{name}</h3>
        <div className="image-container">
          <img src={image?.url} alt={name} className="image-game" width="300" />
        </div>

        <h5>{age}+</h5>
        <p>
          Number of players: {minPlayers} - {maxPlayers}
        </p>
        <p>{location}</p>
        <p>{kind}</p>
        <p>{rules}</p>
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
  );
}

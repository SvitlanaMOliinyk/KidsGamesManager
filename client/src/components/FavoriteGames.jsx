import { useContext, useState, useEffect } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { baseUrl } from "../constants";

const FavoriteGames = () => {
  const {favoriteIds, handleFavorites} = useContext(FavoritesContext);
  const urlArray = favoriteIds.map((favoriteId) => baseUrl + "/" + favoriteId);
  const [favorites, setFavorites] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getFavoriteGame = async () => {
      setIsLoading(true);

      let results = [];
      try {
        for (let i = 0; i < urlArray.length; i++) {
          const response = await fetch(urlArray[i]);
          const result = await response.json();
          results.push(result.result);
        }
        setIsLoading(false);
      } catch (error) {
        console.log("Error", error.message);
        setIsLoading(false);
        setError("Download is failed");
      }
      setFavorites(results);
    };
    getFavoriteGame();
  }, []);

  function handleRemove(favoriteGame) {
    const unlike = favoriteGame.target.id;
    setFavorites(favorites.filter((favorite) => favorite.id !== unlike));
    handleFavorites(favoriteGame);
    window.location.reload();
  }

  return (
    <section className="content favorite-games">
    <ul className="favorites">
      {!isLoading ? (
        favorites.length ? (
          favorites.map((favorite) => (
            <li className="favorite" key={favorite.id}>
              <div className="favoritesContainer">
                <h3>{favorite.name}</h3>
                <h5>{favorite.age}+</h5>
                <p>
                  Number of players: {favorite.minPlayers} -{" "}
                  {favorite.maxPlayers}
                </p>
                <p>{favorite.location}</p>
                <p>{favorite.kind}+</p>
                <p>{favorite.rules}</p>
                <button
                  className="favorites"
                  id={favorite._id}
                  onClick={handleRemove}
                >
                  Remove from Favorites
                </button>
              </div>
            </li>
          ))
        ) : (
          <h3>Please, add your favorite games!</h3>
        )
      ) : (
        <p>Loading...</p>
      )}
      <h2>{error}</h2>
    </ul>
    </section>
  );
};

export default FavoriteGames;

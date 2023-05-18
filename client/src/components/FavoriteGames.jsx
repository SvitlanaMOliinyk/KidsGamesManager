import { useContext, useState, useEffect } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { baseUrl } from "../constants";

const FavoriteGames = () => {
  const { favoriteIds, handleFavorites } = useContext(FavoritesContext);
  const [favorites, setFavorites] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getFavoriteGame = async () => {
      setIsLoading(true);
      const urlArray = favoriteIds.map(
        (favoriteId) => baseUrl + "/" + favoriteId
      );
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
  }, [favoriteIds]);

  function handleRemove(favoriteGame) {
    const unlike = favoriteGame.target.id;
    setFavorites(favorites.filter((favorite) => favorite.id !== unlike));
    handleFavorites(favoriteGame);
  }

  return (
    <section className="content favorite-games">
      <ul className="favorites">
        {!isLoading ? (
          favorites.length ? (
            favorites.map((favorite) => (
              <li className="favorite" key={favorite.id}>
                <div className="favoritesContainer">
                  <div className="image-container">
                    <img
                      src={favorite.url}
                      alt={favorite.name}
                      className="image-game"
                      width="200"
                    />
                    <div className="game-name">
                      <h3>{favorite.name}</h3>
                    </div>
                  </div>
                  <h4>
                    {" "}
                    <span
                      style={{
                        color: "red",
                        display: "block",
                        paddingTop: "1rem",
                      }}
                    >
                      {favorite.age}+
                    </span>
                  </h4>
                  <p>
                    Number of players:{" "}
                    <span style={{ color: "red", paddingLeft: "0.5rem" }}>
                      {favorite.minPlayers} - {favorite.maxPlayers}
                    </span>
                  </p>
                  <p>
                    Place:{" "}
                    <span style={{ color: "red", paddingLeft: "0.5rem" }}>
                      {favorite.location}
                    </span>
                  </p>
                  <p>
                    {" "}
                    Kind of game:
                    <span style={{ color: "red", paddingLeft: "0.5rem" }}>
                      {favorite.kind}
                    </span>
                  </p>
                  <p>
                    <span
                      style={{
                        textDecoration: "underline",
                        fontStyle: "italic",
                      }}
                    >
                      Rules.
                    </span>
                    {favorite.rules}
                  </p>
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

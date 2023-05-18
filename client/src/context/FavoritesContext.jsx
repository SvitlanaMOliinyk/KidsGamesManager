import { createContext, useState, useEffect } from "react";

export const FavoritesContext = createContext();
export function FavoritesProvider({ children }) {
  const [favoriteIds, setFavoriteIds] = useState(() => {
    const favoriteIds = localStorage.getItem("favoriteIds");
    console.log("localStorage.getItem in FavoriteContext:", favoriteIds)
    const parsedFavoriteIds = JSON.parse(favoriteIds);
    return parsedFavoriteIds || [];
  });

  useEffect(() => {
    if (favoriteIds !== null) {
      localStorage.setItem("favoriteIds", JSON.stringify(favoriteIds));
    }
  }, [favoriteIds]);

  function handleFavorites(favoriteGame) {
    const favoriteGameId = favoriteGame.target.id;
    if (favoriteIds.includes(favoriteGameId)) {
      setFavoriteIds(
        favoriteIds.filter((favoriteId) => favoriteId !== favoriteGameId)
      );
    } else {
      setFavoriteIds([...favoriteIds, favoriteGameId]);
    }
  }

  const value = {
    favoriteIds,
    setFavoriteIds,
    handleFavorites,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

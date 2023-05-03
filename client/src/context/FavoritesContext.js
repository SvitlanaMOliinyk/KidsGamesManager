import { createContext, useState } from "react";

export const FavoritesContext = createContext();
export function FavoritesProvider({ children }) {
  const [favoriteIds, setFavoriteIds] = useState([]);

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

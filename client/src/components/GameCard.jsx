import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";


export default function GameCard({game}) {
  
  const { handleFavorites } = useContext(FavoritesContext);
  const {
    name,
    image, 
  } = game;

  return (

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
  );
}

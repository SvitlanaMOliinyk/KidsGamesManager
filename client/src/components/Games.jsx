import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { baseUrl } from "../constants";
// import Game from "Game.js";

const Games = () => {
  const { data: games, isLoading, error } = useFetch(baseUrl);
  return (
    <section className="content games">
    <div className="games">
      <h2>List of Games</h2>
      <ul className="game-list">
        {isLoading ? (
          <div>Loading...</div>
        ) : !error && games?.length > 0 ? (
          games.map((game) => (
            <li key={game._id}>
              {" "}
              <Link to={`/${game._id}`}>{game.name}</Link>
            </li>
          ))
        ) : (
          error
        )}
      </ul>
    </div>
    </section>
  );
};

export default Games;

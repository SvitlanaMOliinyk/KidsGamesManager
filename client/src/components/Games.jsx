import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { baseUrl } from "../constants";
import GameCard from "./GameCard";

const Games = () => {
  const { data: games, isLoading, error } = useFetch(baseUrl);
  return (
    <section className="content games">
      <div className="games-cards">
        <h2>List of Games</h2>
        <ul className="game-list">
          {isLoading ? (
            <div>Loading...</div>
          ) : !error && games?.length > 0 ? (
            games.map((game) => (
              <Link to={`/${game._id}`}><li className="game-card" key={game.id}>
                {" "}
               <GameCard key={game.id} game={game} />
              </li></Link>
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

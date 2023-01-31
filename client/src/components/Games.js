import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { baseUrl } from "../constants";

const Games = () => {
  const { data: games } = useFetch(baseUrl);
  return (
    <div className="games">
      <h2>List of Games</h2>
      {games.map((game) => (
        <ul className="game-list">
          <Link to={`/${game.id}`}>
            <li key={game.id}>{game.name}</li>
          </Link>
        </ul>
      ))}
    </div>
  );
};

export default Games;

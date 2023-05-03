import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../constants";

const Add = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [minPlayers, setMinPlayers] = useState(0);
  const [maxPlayers, setMaxPlayers] = useState(0);
  const [location, setLocation] = useState("");
  const [kind, setKind] = useState("");
  const [rules, setRules] = useState("");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGame = {
      name,
      age,
      minPlayers,
      maxPlayers,
      location,
      kind,
      rules,
    };
    setIsPending(true);

    fetch(baseUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newGame),
    }).then((response) => console.log("New game is added:", response));
    setIsPending(false);
    navigate("/about");
  };

  return (
    <main>
      <h3>Add a new game</h3>
      <form className="add-game" onSubmit={handleSubmit}>
        <label>
          <span>Add a Name of the Game</span>
          <input
            id="new-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          <span>Add the Age of players</span>
          <input
            id="new-age"
            type="text"
            required
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <label>
          <span>Add the Minimum Number of Players</span>
          <input
            id="new-min"
            type="text"
            required
            value={minPlayers}
            onChange={(e) => setMinPlayers(e.target.value)}
          />
        </label>
        <label>
          <span>Add the Maximum Number of Players</span>
          <input
            id="new-game"
            type="text"
            required
            value={maxPlayers}
            onChange={(e) => setMaxPlayers(e.target.value)}
          />
        </label>
        <label>
          <span>Describe the Place: Indoor or Outdoor</span>
          <input
            id="new-max"
            type="text"
            required
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <label>
          <span>
            Enter the Kind of the Game(for ex. <er>Tag Game</er>)
          </span>
          <input
            id="new-kind"
            type="text"
            required
            value={kind}
            onChange={(e) => setKind(e.target.value)}
          />
        </label>
        <label>
          <span>Describe the rules</span>
          <textarea
            id="new-rules"
            type="text"
            required
            value={rules}
            onChange={(e) => setRules(e.target.value)}
          />
        </label>
        {!isPending && <button type="submit">Add</button>}
        {isPending && <button disabled>Adding the game...</button>}
      </form>
    </main>
  );
};

export default Add;

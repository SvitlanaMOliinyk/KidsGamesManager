import { useState } from "react";
import useFetch from "../hooks/useFetch";
import Results from "./Results";
import { baseUrl } from "../constants";

export default function Find() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [minPlayers, setMinPlayers] = useState("");
  const [maxPlayers, setMaxPlayers] = useState("");
  const [location, setLocation] = useState("");
  const [kind, setKind] = useState("");
  const [query, setQuery] = useState("");
  const { data, isLoading, error } = useFetch(query);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.length > 0) {
      const queryName = `name=${name}`;
      const urlName = baseUrl + "/find?" + queryName;
      setQuery(urlName);
      setIsSubmitted(true);
    } else {
      let queryPart = "";
      if (age) {
        queryPart = queryPart + `age=${age}`;
      }
      if (minPlayers) {
        queryPart =
          queryPart.length > 0
            ? queryPart + `&minPlayers=${minPlayers}`
            : `minPlayers=${minPlayers}`;
      }
      if (maxPlayers) {
        queryPart =
          queryPart.length > 0
            ? queryPart + `&maxPlayers=${maxPlayers}`
            : `maxPlayers=${maxPlayers}`;
      }
      if (location) {
        queryPart =
          queryPart.length > 0
            ? queryPart + `&location=${location}`
            : `location=${location}`;
      }
      if (kind) {
        queryPart =
          queryPart.length > 0 ? queryPart + `&kind=${kind}` : `kind=${kind}`;
      }
      const queryURL = baseUrl + "/find?" + queryPart;
      setQuery(queryURL);
      setIsSubmitted(true);
    }
  };
  return (
    <section className="content find-form">
      <h3>Search for a game</h3>
      {isSubmitted === false ? (
        <form className="search-form" onSubmit={handleSubmit}>
          <label>
            <span>Enter the name of a game</span>
            <input
              type="text"
              id="search-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            <span>Age of a child</span>
            <select
              type="text"
              id="search-age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            >
              <option value="no-value"></option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
              <option value="5">5+</option>
              <option value="6">6+</option>
              <option value="9">9+</option>
              <option value="10">10+</option>
            </select>
          </label>
          <label>
            <span>Number of players (min)</span>
            <select
              type="text"
              id="search-number"
              value={minPlayers}
              onChange={(e) => setMinPlayers(e.target.value)}
            >
              <option value="no-value"></option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="6">6</option>
              <option value="8">8</option>
            </select>
          </label>
          <label>
            <span>Number of players (max)</span>
            <select
              type="text"
              id="search-max"
              value={maxPlayers}
              onChange={(e) => setMaxPlayers(e.target.value)}
            >
              <option value="no-value"></option>
              <option value="2">2</option>
              <option value="4">4</option>
              <option value="6">6</option>
              <option value="8">8</option>
              <option value="12">12</option>
            </select>
          </label>
          <label>
            <span>Indoor or outdoor</span>
            <select
              type="text"
              id="search-location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="no-value"></option>
              <option value="indoor">Indoor</option>
              <option value="outdoor">Outdoor</option>
            </select>
          </label>
          <label>
            <span>Kind of the game</span>
            <select
              type="text"
              id="search-kind"
              value={kind}
              onChange={(e) => setKind(e.target.value)}
            >
              <option value="no-value"></option>
              <option value="hand games">Hand games</option>
              <option value="tag game">Tag Games</option>
              <option value="card game">Card Games</option>
              <option value="hiding games">Hiding Games</option>
              <option value="active games">Active Games</option>
              <option value="jumping games">Jumping games</option>
            </select>
          </label>
          <button className="search-button" type="submit">
            Submit
          </button>
        </form>
      ) : !isLoading ? (
        <Results data={data} error={error} />
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
}

import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../constants";
import { SignContext } from "../context/SignProvider";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Add = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [minPlayers, setMinPlayers] = useState(0);
  const [maxPlayers, setMaxPlayers] = useState(0);
  const [location, setLocation] = useState("");
  const [kind, setKind] = useState("");
  const [rules, setRules] = useState("");
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(SignContext);

  const handleConvertToBase64 = (event) => {
    console.log("File event:", event);
    const file = event.target.files[0];
    setImage(file);
  };

  useEffect(() => {
    let fileReader,
      isCancel = false;
    if (image) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          console.log("Result after FileReader:", result);
          setImageUrl(result);
        }
      };
      fileReader.readAsDataURL(image);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [image]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoggedIn === true && imageUrl !== null) {
      const newGame = {
        name,
        age,
        minPlayers,
        maxPlayers,
        location,
        kind,
        rules,
      };

      const gameImage = imageUrl;

      setIsPending(true);

      fetch(baseUrl, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ game: newGame, gameImage: gameImage }),
      }).then((response) => console.log("New game is added:", response));
      setIsPending(false);
      navigate("/about");
    } else {
      navigate("/login");
    }
  };

  return (
    <section className="content add">
      <div className="text-game">
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
          <label htmlFor="fileInput" className="upload">
            <span>
              Choose images to upload (SVG, PNG, JPG)
              <FontAwesomeIcon
                icon={faDownload}
                style={{ paddingLeft: "0.5rem" }}
              />
            </span>
            <input
              accept="image/*"
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={handleConvertToBase64}
            />
          </label>
          {!isPending && <button type="submit">Add</button>}
          {isPending && <button disabled>Adding the game...</button>}
        </form>
      </div>
    </section>
  );
};

export default Add;

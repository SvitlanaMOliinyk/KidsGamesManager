import mongoose from "mongoose";
const { SchemaTypes } = mongoose;
const gameSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: {
    public_id: { type: String},
    url: { type: String},
  },
  age: { type: Number, required: true },
  minPlayers: { type: Number, required: true },
  maxPlayers: { type: Number, required: true },
  location: { type: String, required: true },
  kind: { type: String, required: true },
  rules: { type: String, required: true },
});
const Game = mongoose.model("games", gameSchema);
export default Game;

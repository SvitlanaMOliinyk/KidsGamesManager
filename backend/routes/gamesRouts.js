import express from "express";
import {
  createGame,
  // createGameCollection,
  getGames,
  getGame,
  getGameName,
} from "../controllers/gamesMethods.js";

const gamesRouter = express.Router();

gamesRouter.get("/", getGames);

// router.get("/createCollection", createGameCollection);

gamesRouter.post("/", createGame);

gamesRouter.get("/find", getGameName);

gamesRouter.get("/:id", getGame);

export default gamesRouter;

import express from "express";
import {
  createGame,
  getGames,
  getGame,
  getGameName,
} from "../controllers/gamesMethods.js";

const router = express.Router();

router.get("/", getGames);

router.post("/", createGame);

router.get("/find", getGameName);

router.get("/:id", getGame);

export default router;

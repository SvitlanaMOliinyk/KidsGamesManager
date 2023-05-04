import { games } from "../data/gamesData.js";
import Game from "../models/Game.js";

export const createGameCollection = async () => {
  await Game.deleteMany({});
  try {
    await Game.create(games);
    console.log("data successfully inserted");
  } catch (error) {
    console.log(error);
  }
};

export const createGame = async (req, res) => {
  const game = req.body;
  console.log("game after POST", game)
  try {
    if (typeof game !== "object") {
      res.status(400).json({
        success: false,
        msg: `You need to provide a 'game' object. Received: ${JSON.stringify(
          game
        )}`,
      });
      return;
    } else  if(game.name &&
    game.age &&
    game.minPlayers &&
    game.maxPlayers &&
    game.location &&
    game.kind &&
    game.rules){
      const newGame = await Game.create(game);
      res.status(201).json({ success: true, result: newGame });
    }
  } catch (error) {
    logError(error);
    res.status(500).json({
      success: false,
      msg: "Unable to create game, try again later",
    });
  }
};

export const getGames = async (req, res) => {
  try {
    const games = await Game.find({});
    res.status(200).json({ success: true, result: games });
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: "Unable to get games, please try again later",
    });
  }
};

export const getGameName = async (req, res) => {
  const gameName = req.query.name;
  const age = +req.query.age;
  const minPlayers = +req.query.minPlayers;
  const maxPlayers = +req.query.maxPlayers;
  const location = req.query.location;
  const kind = req.query.kind;
  try {
    if (gameName) {
      const nameOfGame = await Game.find({
        name: { $regex: gameName, $options: "i" },
      });
      console.log("Game by name:", nameOfGame);
      res.status(200).json({ success: true, result: nameOfGame });
    } else {
      let foundGame = [];
      if (age) {
        foundGame = await Game.find({
          age: age,
        });
      }
      if (minPlayers) {
        foundGame = await Game.find({
          minPlayers: { $gte: minPlayers },
        });
      }
      if (maxPlayers) {
        foundGame = await Game.find({
          maxPlayers: { $lte: maxPlayers },
        });
      }
      if (location) {
        foundGame = await Game.find({
          location: location,
        });
      }
      if (kind) {
        foundGame = await Game.find({
          kind: kind,
        });
      }
      res.status(200).json({ success: true, result: foundGame });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: "Unable to get the game, please try again later",
    });
  }
};

export const getGame = async (req, res) => {
  const { id } = req.params;
  try {
    const game = await Game.findById(id);
    console.log("Game:", game);
    res.status(200).json({ success: true, result: game });
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: "Unable to get the game, please try again later",
    });
  }
};

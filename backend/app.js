import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import gamesRouts from "./routes/games.js";

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use("/games", gamesRouts);

app.get("/", (req, res) => res.send("Hello!"));

export default app;

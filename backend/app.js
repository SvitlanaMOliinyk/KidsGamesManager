import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import gamesRouter from "./routes/gamesRouts.js";
import userRouter from "./routes/usersRouts.js";


const app = express();
app.use(bodyParser.json({ limit: "5mb" }));
app.use(bodyParser.urlencoded({ limit: "5mb", extended: true }));
app.use(express.json());
app.use(cors());

app.use("/games", gamesRouter);
app.use("/users", userRouter);

app.get("/", (req, res) => res.send("Hello!"));

export default app;

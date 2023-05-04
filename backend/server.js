import dotenv from "dotenv";
import app from "./app.js";
dotenv.config();
import dbConnection from "./db/dbConnection.js";
import { logInfo, logError } from "./util/logInfoAndError.js";

const port = process.env.PORT;

const startServer = async () => {
  try {
    await dbConnection();
    app.listen(port, () => {
      logInfo(`Server started on port ${port}`);
    });
  } catch (error) {
    logError(error);
  }
};

startServer();

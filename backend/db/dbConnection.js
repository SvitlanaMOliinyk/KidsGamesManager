import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const dbConnection = () => mongoose.connect(process.env.MONGODB_URL);

export default dbConnection;

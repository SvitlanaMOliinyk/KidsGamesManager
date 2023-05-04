import mongoose from "mongoose";
import validateAllowedFields from "../util/validateAllowedFields.js";

const { SchemaTypes } = mongoose;
const userSchema = new mongoose.Schema(
  {
    userName: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePicture: { type: String, default: "" },
    favoriteGames: [
      {
        type: SchemaTypes.ObjectId,
        ref: "Game",
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export const validateUser = (userObject) => {
  const errorList = [];
  const allowedKeys = ["userName", "password"];

  const validatedKeysMessage = validateAllowedFields(userObject, allowedKeys);

  if (validatedKeysMessage.length > 0) {
    errorList.push(validatedKeysMessage);
  }

  if (userObject.userName == null) {
    errorList.push("userName is a required field");
  }

  if (!userObject.password) {
    errorList.push("password is a required field");
  }

  return errorList;
};

export default User;
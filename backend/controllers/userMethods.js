import User, { validateUser } from "../models/User.js";
import { logError } from "../util/logInfoAndError.js";
import validationErrorMessage from "../util/validationErrorMessage.js";

export const createUser = async (req, res) => {
  try {
    const { user } = req.body;
    if (typeof user !== "object") {
      res.status(400).json({
        success: false,
        msg: `You need to provide a 'user' object. Received: ${JSON.stringify(
          user
        )}`,
      });

      return;
    }

    const errorList = validateUser(user);

    if (errorList.length > 0) {
      res
        .status(400)
        .json({ success: false, msg: validationErrorMessage(errorList) });
    } else {
      const newUser = await User.create(user);

      res.status(201).json({ success: true, user: newUser });
    }
  } catch (error) {
    logError(error);
    if (error.name === "MongoServerError" && error.code === 11000) {
      res.status(400).json({ success: false, msg: "userName already exists" });
    } else {
      res.status(500).json({
        success: false,
        msg: "Unable to create user, try again later",
      });
    }
  }
};

export const loginUser = async (req, res) => {
  try {
    const { user } = req.body;
    const userData = await User.findOne({ userName: user.userName });

    if (!userData) {
      res.status(404).json({ success: false, msg: "Wrong Credentials!" });
      return;
    }

    if (user.password === userData.password) {
      res.status(201).json({ success: true, user: userData });
    } else {
      res.status(400).json({ success: false, msg: "Wrong Credentials!" });
      return;
    }
  } catch (error) {
    logError(error);
    res
      .status(500)
      .json({ success: false, msg: "Unable to login user, try again later" });
  }
};
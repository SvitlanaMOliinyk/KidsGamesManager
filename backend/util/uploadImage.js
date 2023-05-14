import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
dotenv.config();
import { logError, logInfo } from "./logInfoAndError.js";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KAY,
  api_secret: process.env.ClOUDINARY_SECRET,
});

const options = {
  overwrite: true,
  invalidate: true,
  resource_type: "auto",
};

export default function uploadGameImage(gameImage) {
  //gameImage -> base64
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(gameImage, options, (error, result) => {
      if (result && result.url) {
        return resolve({ url: result.url, public_id: result.public_id });
      }
      return reject(error);
    });
  });
}

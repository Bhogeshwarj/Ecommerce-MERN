

// using multer 

import multer from "multer";
import { extname } from "path";
import { v4 as uuid } from "uuid";



const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, "uploads");
  },
  filename(req, file, callback) {
    const id = uuid();
    const extName = file.originalname.split(".").pop();
    const fileName = `${id}.${extName}`
    callback(null, fileName);
  },
});

export const singleUpload = multer({ storage }).single("photo");
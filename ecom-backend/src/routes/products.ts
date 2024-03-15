import express from "express";
import { adminOnly } from "../middlewares/auth.js";
import { newProduct } from "../controllers/products.js";
import { singleUpload } from "../middlewares/multer.js";


const app = express.Router();

app.post("/new",singleUpload,newProduct);

export default app;
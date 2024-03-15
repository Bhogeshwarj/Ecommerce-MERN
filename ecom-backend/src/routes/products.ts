import express from "express";
import { adminOnly } from "../middlewares/auth.js";
import { getlatestProducts, newProduct,getAllCategories, getAdminProducts, getSingleProduct, updateProduct, deleteProduct } from "../controllers/products.js";
import { singleUpload } from "../middlewares/multer.js";


const app = express.Router();

// create new product /api/v1.\/new
app.post("/new",adminOnly,singleUpload,newProduct);

app.get("/latest",getlatestProducts);

app.get("/categories",getAllCategories)

app.get("/admin-products", getAdminProducts);

// to update we use .put method
app.route("/:id").get(getSingleProduct).put(singleUpload,updateProduct).delete(deleteProduct);
export default app;
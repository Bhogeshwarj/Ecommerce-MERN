import express from 'express';
const app = express.Router();
import { newOrder } from '../controllers/orders.js';
// route - /api/v1/order/new
app.post("/new", newOrder);
app
    .route("/:id");
export default app;

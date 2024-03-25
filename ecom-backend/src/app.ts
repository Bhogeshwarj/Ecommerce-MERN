import express from 'express';
import { errorMiddleware } from "./middlewares/error.js";
import NodeCache from 'node-cache';
import { config } from 'dotenv';

//importing routes
import userRoute from './routes/user.js';
import productRoute from './routes/products.js';
import orderRoute from './routes/orders.js';
import morgan from 'morgan';

config({
    path:"./.env"
});

import { connect } from 'http2';
import { connectDB } from './utils/features.js';

const port = process.env.PORT || 3000;
const mongoURI = process.env.MONGO_URI || "";

connectDB(mongoURI);

// export const nodeCache = new NodeCache({ stdTTL: 100, checkperiod: 120 });
export const myCache = new NodeCache();
// it will save data in ram
const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.get('/',(req,res)=>{
    res.send(`<h1>hello world</h1>
     <p>this is a paragraph</p>`)
})


//using routes
app.use("/api/v1/user",userRoute);
app.use("/api/v1/product", productRoute);
app.use("/api/v1/order", orderRoute);

app.use("/uploads", express.static("uploads"));
// http://localhost:3000/uploads/3990288.jpg  
app.use(errorMiddleware);

app.listen(port,()=>{
    console.log(`server is working on port ${port} `)
})




import express from 'express';
import { errorMiddleware } from "./middlewares/error.js";

//importing routes
import userRoute from './routes/user.js';
import productRoute from './routes/products.js';


import { connect } from 'http2';
import { connectDB } from './utils/features.js';

const port = 3000;
connectDB();
const app = express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.send(`<h1>hello world</h1>
     <p>this is a paragraph</p>`)
})


//using routes
app.use("/api/v1/user",userRoute);
app.use("/api/v1/product", productRoute);

app.use(errorMiddleware);

app.listen(port,()=>{
    console.log(`server is working on port ${port} `)
})




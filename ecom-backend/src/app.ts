import express from 'express';

const port = 3000;
const app = express();


app.listen(port,()=>{
    console.log(`server is working on port ${port} `)
})

app.get('/',(req,res)=>{
    res.send(`<h1>hello world</h1>


    <p>this is a paragraph</p>`)
})


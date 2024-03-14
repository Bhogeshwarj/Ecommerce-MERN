import mongoose from "mongoose"

// functin to connect to the database
export const connectDB =()  =>{
    mongoose.connect("mongodb://localhost:27017/Ecommerce-website", {

    }).then((c)=>{
        console.log(`DB connected to ${c.connection.host}`)
    }).catch((err)=>{
        console.log(err)
    })
}
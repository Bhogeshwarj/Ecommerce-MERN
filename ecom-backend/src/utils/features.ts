import mongoose from "mongoose"
import { Product } from "../models/product.js"
import { InvalidateCacheProps } from "../types/types.js";
import { myCache } from "../app.js";
// functin to connect to the database
export const connectDB =()  =>{
    mongoose.connect("mongodb://localhost:27017/Ecommerce-website", {

    }).then((c)=>{
        console.log(`DB connected to ${c.connection.host}`)
    }).catch((err)=>{
        console.log(err)
    })
}

export const invalidateCache = async ({
    product,
    order,
    admin,
    userId,
    orderId,
    productId,
  }: InvalidateCacheProps) => {
    if (product) {
      const productKeys: string[] = [
        "latest-products",
        "categories",
        "all-products",
      ];
      const products = await Product.find({}).select("_id");
      products.forEach(i => {
        productKeys.push(`product-${i._id}`);
      });
      
      myCache.del(productKeys);
    }
    if (order) {
      const ordersKeys: string[] = [
        "all-orders",
        `my-orders-${userId}`,
        `order-${orderId}`,
      ];
  
      myCache.del(ordersKeys);
    }

  };
  
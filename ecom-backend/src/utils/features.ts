import mongoose from "mongoose"
import { Product } from "../models/product.js"
import { InvalidateCacheProps, OrderItemType } from "../types/types.js";
import { myCache } from "../app.js";
// functin to connect to the database
export const connectDB =(uri: string)  =>{
    // mongoose.connect("mongodb://localhost:27017/Ecommerce-website", {
    mongoose.connect(uri, {
        dbName: "Ecommerce-website",

   
    }).then((c)=>{
        console.log(`DB connected to ${c.connection.host}`)
    }).catch((err)=>{
        console.log(err)
    })
}


export const invalidateCache = ({
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

    if (typeof productId === "string") productKeys.push(`product-${productId}`);

    if (typeof productId === "object")
      productId.forEach((i) => productKeys.push(`product-${i}`));

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
  if (admin) {
    myCache.del([
      "admin-stats",
      "admin-pie-charts",
      "admin-bar-charts",
      "admin-line-charts",
    ]);
  }
};


  export const reduceStock =async (orderItems: OrderItemType[]) =>{
    for (let i = 0; i < orderItems.length; i++) {
      const order = orderItems[i];
      const product = await Product.findById(order.productId);
      if(!product) throw new Error("product Not found");
      product.stock -= order.quantity;
      await product.save();
    }
  };
  
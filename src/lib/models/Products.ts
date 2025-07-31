import mongoose from "mongoose";


const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  images: [String], 
  price: Number,
  stock: Number,
});

 export const Product=mongoose.models.Product || mongoose.model("Product", ProductSchema)